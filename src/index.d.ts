import { Common } from './azure-cognitiveservices.common';
export declare class AzureCognitiveservices extends Common {
  constructor(apiKey: any, region: any);
  speechSynthesis(contents: any, voiceName?: string): any;
  speechToTextRecognizeOnce(audioFile?: string, recognitionLanguage?: string): any;
  startContinuousRecognition(recognitionLanguage?: string): any;
  stopContinuousRecognition(): void;
  startRecorder(fileName?: string): void;
  stopRecorder(): any;
  audioDataSaveAsMP3(audioData: any, fileName?: string): Promise<string>;
}

export interface AzureCognitiveservicesInterface {
  speechSynthesis(contents: any, voiceName?: string): any;
  speechToTextRecognizeOnce(audioFile?: string, recognitionLanguage?: string): any;
  startContinuousRecognition(recognitionLanguage?: string): any;
  stopContinuousRecognition(): void;
  startRecorder(): any;
  stopRecorder(): any;
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