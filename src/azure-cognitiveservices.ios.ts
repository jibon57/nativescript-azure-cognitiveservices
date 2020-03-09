import { Common, AzureCognitiveservicesInterface } from './azure-cognitiveservices.common';

export class AzureCognitiveservices extends Common implements AzureCognitiveservicesInterface {

    private apiKey;
    private region;
    private speechRecognizer;
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
    public async speechSynthesis(contents, voiceName = "en-US-JessaRUS") {

        let speechConfig = SPXSpeechConfiguration.alloc().initWithSubscriptionRegion(this.apiKey, this.region);

        speechConfig.setSpeechSynthesisOutputFormat(SPXSpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3)
        speechConfig.speechSynthesisVoiceName = voiceName;

        let speechSynthesizer = SPXSpeechSynthesizer.alloc().initWithSpeechConfigurationAudioConfiguration(speechConfig, null);

        let speechResult = speechSynthesizer.speakText(contents);
        this.speechSynthesisResult.reason = speechResult.reason;

        if (speechResult.reason == SPXResultReason.SynthesizingAudioCompleted) {

            this.speechSynthesisResult.audioData = speechResult.audioData;

            this.notify({
                eventName: 'speechSynthesisResult',
                object: this
            })

        } else {

            let details = SPXSpeechSynthesisCancellationDetails.alloc().initFromCanceledSynthesisResult(speechResult);

            if (details.errorDetails) {
                this.msg = details.errorDetails;
            } else {
                this.msg = "NoMatch"
            }

            this.notify({
                eventName: 'error',
                object: this
            })
        }
    }

    /**
     * speechToTextRecognizeOnce
     * https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support
     */
    public speechToTextRecognizeOnce(audioFile = "", recognitionLanguage = "en-US") {

        let recordingSession = AVAudioSession.sharedInstance();
        let t = this;

        recordingSession.requestRecordPermission(function (allowed) {
            if (allowed) {
                t.doSpeechToTextRecognizeOnce(audioFile, recognitionLanguage);
            } else {

                t.msg = "permissionError";
                t.notify({
                    eventName: 'error',
                    object: t
                })
            }
        })
    }

    /**
     * doSpeechToTextRecognizeOnce
    */
    private doSpeechToTextRecognizeOnce(audioFile = "", recognitionLanguage) {

        let speechConfig = SPXSpeechConfiguration.alloc().initWithSubscriptionRegion(this.apiKey, this.region);
        speechConfig.outputFormat = SPXOutputFormat.Detailed;

        let speechRecognizer, t = this;

        if (audioFile) {
            let audioConfig = SPXAudioConfiguration.alloc().initWithWavFileInput(audioFile)
            speechRecognizer = SPXSpeechRecognizer.alloc().initWithSpeechConfigurationAudioConfiguration(speechConfig, audioConfig);
        } else {
            speechRecognizer = SPXSpeechRecognizer.alloc().init(speechConfig);
        }

        let speechResult = speechRecognizer.recognizeOnce();
        t.speechToTextResult.reason = speechResult.reason;

        if (speechResult.reason == SPXResultReason.RecognizedSpeech) {

            let properties = speechResult.properties;
            let speechJson = properties.getPropertyById(SPXPropertyId.SpeechServiceResponseJsonResult);

            t.speechToTextResult.text = speechResult.text;
            t.speechToTextResult.jsonResult = speechJson;
            t.speechToTextResult.duration = speechResult.duration;
            t.speechToTextResult.offset = speechResult.offset;

            this.notify({
                eventName: 'speechToTextResult',
                object: this
            })

        } else {
            let details = SPXCancellationDetails.alloc().initFromCanceledRecognitionResult(speechResult);

            if (details.errorDetails) {
                this.msg = details.errorDetails;
            } else {
                this.msg = "NoMatch"
            }

            this.notify({
                eventName: 'error',
                object: this
            })
        }
    }

    /**
     * startContinuousRecognition
     * https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support
     */
    public startContinuousRecognition(recognitionLanguage = "en-US") {
        let recordingSession = AVAudioSession.sharedInstance();
        let t = this;

        recordingSession.requestRecordPermission(function (allowed) {
            if (allowed) {
                t.doSpeechToTextContinuousRecognition(recognitionLanguage);
            } else {

                t.msg = "permissionError";
                t.notify({
                    eventName: 'error',
                    object: t
                })
            }
        })
    }


    /**
     * stopContinuousRecognition
     */
    public stopContinuousRecognition() {
        if (this.speechRecognizer) {
            this.speechRecognizer.stopContinuousRecognition();
            this.speechRecognizer = null;
        }
    }

    /**
     * doSpeechToTextContinuousRecognition
     */
    private doSpeechToTextContinuousRecognition(recognitionLanguage) {

        let speechConfig = SPXSpeechConfiguration.alloc().initWithSubscriptionRegion(this.apiKey, this.region);
        speechConfig.outputFormat = SPXOutputFormat.Detailed;

        let speechRecognizer = SPXSpeechRecognizer.alloc().init(speechConfig);
        let t = this;

        speechRecognizer.addRecognizedEventHandler((event, e) => {

            let speechResult = e.result;
            t.speechToTextResult.reason = speechResult.reason;

            if (speechResult.reason == SPXResultReason.RecognizedSpeech) {

                let properties = speechResult.properties;
                let speechJson = properties.getPropertyById(SPXPropertyId.SpeechServiceResponseJsonResult);

                t.speechToTextResult.text = speechResult.text;
                t.speechToTextResult.jsonResult = speechJson;
                t.speechToTextResult.duration = speechResult.duration;
                t.speechToTextResult.offset = speechResult.offset;

                t.notify({
                    eventName: 'speechToTextResult',
                    object: t
                })

            } else {
                let details = SPXCancellationDetails.alloc().initFromCanceledRecognitionResult(speechResult);

                if (details.errorDetails) {
                    t.msg = details.errorDetails;
                } else {
                    t.msg = "NoMatch"
                }

                t.notify({
                    eventName: 'error',
                    object: t
                })
            }
        });

        speechRecognizer.startContinuousRecognition();
        speechRecognizer = speechRecognizer;
    }

    /**
     * startRecorder
     * in WAV format
     */
    public startRecorder(fileName = "recordedFile.wav") {

        let t = this;
        this.recordFileName = fileName;
        let recordingSession = AVAudioSession.sharedInstance();
        recordingSession.setCategoryError(AVAudioSessionCategoryPlayAndRecord);
        recordingSession.setActiveError(true);

        recordingSession.requestRecordPermission(function (allowed) {

            if (allowed) {

                const recordSetting: any = NSMutableDictionary.alloc().init();
                recordSetting.setValueForKey(NSNumber.numberWithInt(kAudioFormatLinearPCM), 'AVFormatIDKey');
                recordSetting.setValueForKey(NSNumber.numberWithInt(16), 'AVEncoderAudioQualityKey');
                recordSetting.setValueForKey(NSNumber.numberWithFloat(16000.0), 'AVSampleRateKey');
                recordSetting.setValueForKey(NSNumber.numberWithInt(1), 'AVNumberOfChannelsKey');

                const url = NSURL.fileURLWithPath(t.getRecordFile(fileName));

                t._recorder = AVAudioRecorder.alloc().initWithURLSettingsError(url, recordSetting);

                t._recorder.prepareToRecord();

                t._recorder.record();

            } else {
                t.msg = "permissionError";

                t.notify({
                    eventName: 'error',
                    object: t
                })
            }
        })
    }

    /**
     * stopRecorder
     */
    public stopRecorder() {

        if (this._recorder) {
            this._recorder.stop();

            this.recordFile = this.getRecordFile(this.recordFileName);

            this.notify({
                eventName: 'recordFile',
                object: this
            })
        }
    }
}
