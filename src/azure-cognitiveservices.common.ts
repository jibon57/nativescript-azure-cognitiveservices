import { Observable } from 'tns-core-modules/data/observable';
import { knownFolders, File } from "tns-core-modules/file-system/file-system";

export class Common extends Observable {

    public speechSynthesisResult: SpeechSynthesisResult = {
        audioData: "",
        reason: ""
    };
    public speechToTextResult: SpeechToTextResult = {
        duration: "",
        offset: "",
        jsonResult: "",
        reason: "",
        text: "",
    };

    constructor() {
        super();
    }

    /**
      * recordFile
      */
    public getRecordFile(fileName) {
        return knownFolders.temp().path + "/" + fileName;
    }

    /**
    * audioDataSaveAsMP3
    */
    public audioDataSaveAsMP3(audioData, fileName = "audioData.mp3") {

        let file = knownFolders.temp().path + "/" + fileName;
        let audioFile = File.fromPath(file);

        return new Promise(function (resolve, reject) {
            audioFile.write(audioData).then(() => {
                resolve(file);
            }).catch((e) => {
                reject(e);
            })
        })
    }
}

export interface AzureCognitiveservicesInterface {
    speechSynthesis(contents: any, voiceName?: string);
    speechToTextRecognizeOnce(audioFile?: string, recognitionLanguage?: string);
    startContinuousRecognition(recognitionLanguage?: string);
    stopContinuousRecognition(): void;
    startRecorder(fileName?: string): void;
    stopRecorder();
}

export interface SpeechSynthesisResult {
    audioData: any;
    reason: any;
}

export interface SpeechToTextResult {
    duration: any;
    offset: any;
    jsonResult: any;
    reason: any;
    text: string;
}

export interface ErrorResponse {
    msg: any;
}


