import { Component, OnInit } from "@angular/core";
import { AzureCognitiveservices, SpeechSynthesisResult, SpeechToTextResult } from "nativescript-azure-cognitiveservices";
import { TNSPlayer } from 'nativescript-audio';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public azureService: AzureCognitiveservices;

    constructor() {
        this.azureService = new AzureCognitiveservices("API_KEY", "Region");
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    /**
     * speechSynthesis
     */
    public speechSynthesis() {

        let t = this;

        this.azureService.on("speechSynthesisResult", function (res) {
            t.azureService.off("speechSynthesisResult");
            let result: SpeechSynthesisResult = res.object.get('speechSynthesisResult');
            console.log(result.reason);

            t.azureService.audioDataSaveAsMP3(result.audioData).then((res) => {
                t.playFile(res);
            })
        })

        this.azureService.on("error", function (res) {
            t.azureService.off("error");
            let msg = res.object.get('msg');;
            console.log(msg);
        })

        this.azureService.speechSynthesis("hello world");
    }

    /**
     * recordWAV
     */
    public recordWAV() {
        let t = this;

        this.azureService.on("recordFile", function (res) {
            t.azureService.off("recordFile");
            let recordFile = res.object.get('recordFile');;
            console.log(recordFile);
            t.playFile(recordFile);
        })

        this.azureService.startRecorder();

        setTimeout(() => {
            this.azureService.stopRecorder();
        }, 5000);
    }

    /**
     * speechToTextRecognizeOnce
     */
    public speechToTextRecognizeOnce() {

        let t = this;

        this.azureService.on("speechToTextResult", function (res) {
            t.azureService.off("speechToTextResult");
            let recordFile: SpeechToTextResult = res.object.get('speechToTextResult');;

            console.log(recordFile.text);
            console.log(recordFile.jsonResult);
        });

        this.azureService.on("error", function (res) {
            t.azureService.off("error");
            let msg = res.object.get('msg');;
            console.log(msg);
        })

        // https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support
        this.azureService.speechToTextRecognizeOnce();
    }

    /**
     * continuousRecognition
     */
    public continuousRecognition() {

        let t = this;

        this.azureService.on("speechToTextResult", function (res) {
            t.azureService.off("speechToTextResult");
            let recordFile: SpeechToTextResult = res.object.get('speechToTextResult');;

            console.log(recordFile.text);
            console.log(recordFile.jsonResult);
        });

        this.azureService.on("error", function (res) {
            t.azureService.off("error");
            let msg = res.object.get('msg');;
            console.log(msg);
        })

        // https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support
        this.azureService.startContinuousRecognition();

        setTimeout(() => {
            this.azureService.stopContinuousRecognition();
        }, 5000);
    }

    /**
     * recognizeFromWAV
     */
    public recognizeFromWAV() {

        let t = this;

        this.azureService.on("speechToTextResult", function (res) {
            t.azureService.off("speechToTextResult");
            let recordFile: SpeechToTextResult = res.object.get('speechToTextResult');;

            console.log(recordFile.text);
            console.log(recordFile.jsonResult);
        });

        this.azureService.on("error", function (res) {
            t.azureService.off("error");
            let msg = res.object.get('msg');;
            console.log(msg);
        })

        this.azureService.on("recordFile", function (res) {
            t.azureService.off("recordFile");
            let recordFile = res.object.get('recordFile');;

            t.azureService.speechToTextRecognizeOnce(recordFile);
        })

        this.azureService.startRecorder();

        setTimeout(() => {
            this.azureService.stopRecorder();
        }, 5000);
    }

    /**
     * playRecordedFile
     */
    public playFile(file) {

        let player = new TNSPlayer();

        player.initFromFile({
            audioFile: file,
            autoPlay: true,
            loop: false,
            completeCallback: function (ee) {
                console.log("completeCallback");
            },
            errorCallback: function (re) {
                console.dir(re);
            },
            infoCallback: function (res) {
                console.log("infoCallback")
            }
        }).then(() => {
            player.play();
        })
    }
}
