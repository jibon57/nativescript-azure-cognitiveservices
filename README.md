[![npm](https://img.shields.io/npm/v/nativescript-azure-cognitiveservices.svg)](https://www.npmjs.com/package/nativescript-azure-cognitiveservices)
[![npm](https://img.shields.io/npm/dt/nativescript-azure-cognitiveservices.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-azure-cognitiveservices)

# nativescript-azure-cognitiveservices
[Azure cognitive services](https://azure.microsoft.com/en-us/services/cognitive-services/) implementation for NativeScript. Both iOS & Android platfroms are supported.

**Features:**

* Speech to Text
* Text to Speech
* WAV recorder


## Installation

```javascript
tns plugin add nativescript-azure-cognitiveservices
```

## Usage (Please check demo project for details)

**Import**

JavaScript:
```javascript
var azure = require("nativescript-azure-cognitiveservices");
var azureService = new azure.AzureCognitiveservices("API_KEY", "Region");
```

TS:
```javascript
import { AzureCognitiveservices, SpeechSynthesisResult, SpeechToTextResult } from "nativescript-azure-cognitiveservices";

constructor() {
    this.azureService = new AzureCognitiveservices("API_KEY", "Region");
}
```

**Functions**
```javascript
speechSynthesis(contents: any, voiceName?: string): any;
speechToTextRecognizeOnce(audioFile?: string, recognitionLanguage?: string): any;
startContinuousRecognition(recognitionLanguage?: string): any;
stopContinuousRecognition(): void;
startRecorder(fileName?: string): void;
stopRecorder(): any;
audioDataSaveAsMP3(audioData: any, fileName?: string): Promise<string>;
```

**Require Permission:**

Android:
```javascript
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

iOS:
```javascript
<key>NSMicrophoneUsageDescription</key>
<string>Recording Practice Sessions</string>
```