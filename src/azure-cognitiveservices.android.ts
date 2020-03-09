import { Common, AzureCognitiveservicesInterface } from "./azure-cognitiveservices.common";
import * as permissions from "nativescript-permissions"

const ResultReason = com.microsoft.cognitiveservices.speech.ResultReason;
const SpeechConfig = com.microsoft.cognitiveservices.speech.SpeechConfig;
const SpeechSynthesisCancellationDetails = com.microsoft.cognitiveservices.speech.SpeechSynthesisCancellationDetails;
const SpeechSynthesizer = com.microsoft.cognitiveservices.speech.SpeechSynthesizer;
const SpeechRecognizer = com.microsoft.cognitiveservices.speech.SpeechRecognizer;
const AudioConfig = com.microsoft.cognitiveservices.speech.audio.AudioConfig;
let CancellationDetails = com.microsoft.cognitiveservices.speech.CancellationDetails;

export class AzureCognitiveservices extends Common implements AzureCognitiveservicesInterface {

    private apiKey;
    private region;
    private speechRecognizer: com.microsoft.cognitiveservices.speech.SpeechRecognizer;
    private recordFileName = "recordedFile.wav";

    public _recorder;
    public msg;
    public recordFile;


    constructor(apiKey, region) {
        super();
        this.apiKey = apiKey;
        this.region = region;
    }

    /**
     * speechSynthesis
     * https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support
     */
    public speechSynthesis(contents, voiceName = "en-US-JessaRUS") {

        let config = SpeechConfig.fromSubscription(this.apiKey, this.region);

        config.setSpeechSynthesisOutputFormat(com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3);
        config.setSpeechSynthesisVoiceName(voiceName);

        let synthesizer = new SpeechSynthesizer(config);

        let result = synthesizer.SpeakText(contents);

        this.speechSynthesisResult.reason = result.getReason()

        if (result.getReason() == ResultReason.SynthesizingAudioCompleted) {

            this.speechSynthesisResult.audioData = result.getAudioData();

            this.notify({
                eventName: 'speechSynthesisResult',
                object: this
            })


        } else {

            let details = SpeechSynthesisCancellationDetails.fromResult(result);
            let msg = details.getErrorDetails();
            if (!msg) {
                msg = result.toString();
            }

            this.msg = msg;

            this.notify({
                eventName: 'error',
                object: this
            })

        }

        synthesizer.close();
        config.close();
    }

    /**
     * speechToTextRecognizeOnce
     * https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support
     */
    public speechToTextRecognizeOnce(audioFile = "", recognitionLanguage = "en-US") {
        permissions.requestPermission(android.Manifest.permission.RECORD_AUDIO).then((result) => {
            this.doSpeechToTextRecognizeOnce(audioFile, recognitionLanguage);
        }).catch(() => {

            this.msg = "permissionError";
            this.notify({
                eventName: 'error',
                object: this
            })
        })
    }

    /**
     * doSpeechToTextRecognizeOnce
     */
    private doSpeechToTextRecognizeOnce(audioFile = "", recognitionLanguage) {

        let config = SpeechConfig.fromSubscription(this.apiKey, this.region);
        config.setOutputFormat(com.microsoft.cognitiveservices.speech.OutputFormat.Detailed);
        config.setSpeechRecognitionLanguage(recognitionLanguage)

        let speechRecognizer, t = this;

        if (audioFile !== "") {
            let audioConfig = AudioConfig.fromWavFileInput(audioFile);
            speechRecognizer = new SpeechRecognizer(config, audioConfig);
        } else {
            speechRecognizer = new SpeechRecognizer(config);
        }

        let task = speechRecognizer.recognizeOnceAsync();

        let result: com.microsoft.cognitiveservices.speech.RecognitionResult = task.get();

        t.speechToTextResult.reason = result.getReason();

        if (result.getReason() == ResultReason.RecognizedSpeech) {

            let properties = result.getProperties();
            let PropertyId = com.microsoft.cognitiveservices.speech.PropertyId;
            let speechJson = properties.getProperty(PropertyId.SpeechServiceResponse_JsonResult);

            t.speechToTextResult.text = result.getText();
            t.speechToTextResult.jsonResult = speechJson;
            t.speechToTextResult.duration = result.getDuration();
            t.speechToTextResult.offset = result.getOffset();

            this.notify({
                eventName: 'speechToTextResult',
                object: this
            })
        }
        else {
            let details = CancellationDetails.fromResult(result);

            this.msg = details.getErrorDetails();

            if (!this.msg) {
                this.msg = result.toString();
            }

            this.notify({
                eventName: 'error',
                object: this
            })
        }

        speechRecognizer.close();
        config.close();
    }

    /**
     * startContinuousRecognition
     * https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support
     */
    public startContinuousRecognition(recognitionLanguage = "en-US") {
        permissions.requestPermission(android.Manifest.permission.RECORD_AUDIO).then((result) => {
            this.doSpeechToTextContinuousRecognition(recognitionLanguage);
        }).catch(() => {

            this.msg = "permissionError";
            this.notify({
                eventName: 'error',
                object: this
            })
        })
    }

    /**
     * stopContinuousRecognition
     */
    public stopContinuousRecognition() {
        if (this.speechRecognizer) {
            this.speechRecognizer.stopContinuousRecognitionAsync().get();
            this.speechRecognizer = null;
        }
    }

    /**
     * doSpeechToTextContinuousRecognition
     */
    private doSpeechToTextContinuousRecognition(recognitionLanguage) {

        let t = this;
        let config = SpeechConfig.fromSubscription(this.apiKey, this.region);
        config.setOutputFormat(com.microsoft.cognitiveservices.speech.OutputFormat.Detailed);
        config.setSpeechRecognitionLanguage(recognitionLanguage);

        let speechRecognizer = new SpeechRecognizer(config);

        speechRecognizer.recognized.addEventListener(new com.microsoft.cognitiveservices.speech.util.EventHandler({
            onEvent: function (event, e) {

                let result = e.getResult();

                t.speechToTextResult.reason = result.getReason();

                if (result.getReason() == ResultReason.RecognizedSpeech) {

                    let properties = result.getProperties();
                    let PropertyId = com.microsoft.cognitiveservices.speech.PropertyId;
                    let speechJson = properties.getProperty(PropertyId.SpeechServiceResponse_JsonResult);

                    t.speechToTextResult.text = result.getText();
                    t.speechToTextResult.jsonResult = speechJson;
                    t.speechToTextResult.duration = result.getDuration();
                    t.speechToTextResult.offset = result.getOffset();

                    t.notify({
                        eventName: 'speechToTextResult',
                        object: t
                    })
                }
                else {
                    let details = CancellationDetails.fromResult(result);
                    t.msg = details.getErrorDetails();

                    if (!this.msg) {
                        t.msg = result.toString();
                    }

                    t.notify({
                        eventName: 'error',
                        object: t
                    })
                }
            }
        }))

        // Start continuous speech recognition
        speechRecognizer.startContinuousRecognitionAsync().get();
        this.speechRecognizer = speechRecognizer;
    }

    /**
     * startRecorder
     * in WAV format
     */
    public startRecorder(fileName = "recordedFile.wav") {

        this.recordFileName = fileName;

        permissions.requestPermission(android.Manifest.permission.RECORD_AUDIO).then((result) => {
            this.setupOmRecorderRecorder().then(() => {
                this._recorder.startRecording();
            })
        }).catch(() => {

            this.msg = "permissionError";

            this.notify({
                eventName: 'error',
                object: this
            })
        })
    }

    /**
     * stopRecorder
     */
    public stopRecorder() {

        if (this._recorder) {

            this._recorder.stopRecording();
            this.setupOmRecorderRecorder();

            this.recordFile = this.getRecordFile(this.recordFileName);

            this.notify({
                eventName: 'recordFile',
                object: this
            })
        }
    }

    /**
     * setupRecorder
     */
    private async setupOmRecorderRecorder() {

        let file = this.getRecordFile(this.recordFileName);

        this._recorder = omrecorder.OmRecorder.wav(new omrecorder.PullTransport.Default(
            this.mic(),
            new omrecorder.PullTransport.OnAudioChunkPulledListener({
                onAudioChunkPulled(audioChunk) {
                    //console.log(audioChunk.maxAmplitude() / 200.0);
                },
            })),
            new java.io.File(file)
        );

        return this._recorder;
    }

    /**
     * mic
     */
    private mic() {
        return new omrecorder.PullableSource.Default(
            new omrecorder.AudioRecordConfig.Default(
                android.media.MediaRecorder.AudioSource.MIC,
                android.media.AudioFormat.ENCODING_PCM_16BIT,
                android.media.AudioFormat.CHANNEL_IN_MONO,
                16000)
        );
    }


}
