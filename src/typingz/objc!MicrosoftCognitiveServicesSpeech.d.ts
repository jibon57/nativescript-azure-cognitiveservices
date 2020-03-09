
declare class SPXAudioConfiguration extends NSObject {

	static alloc(): SPXAudioConfiguration; // inherited from NSObject

	static new(): SPXAudioConfiguration; // inherited from NSObject

	constructor(o: { defaultSpeakerOutput: void; });

	constructor(o: { microphone: string; });

	constructor(o: { streamInput: SPXAudioInputStream; });

	constructor(o: { streamOutput: SPXAudioOutputStream; });

	constructor(o: { streamOutput: SPXAudioOutputStream; });

	constructor(o: { wavFileInput: string; });

	constructor(o: { wavFileOutput: string; });

	constructor(o: { wavFileOutput: string; });

	initWithDefaultSpeakerOutput(): this;

	initWithMicrophone(deviceName: string): this;

	initWithStreamInput(stream: SPXAudioInputStream): this;

	initWithStreamOutput(stream: SPXAudioOutputStream): this;

	initWithStreamOutputError(stream: SPXAudioOutputStream): this;

	initWithWavFileInput(path: string): this;

	initWithWavFileOutput(path: string): this;

	initWithWavFileOutputError(path: string): this;
}

declare class SPXAudioDataStream extends NSObject {

	static alloc(): SPXAudioDataStream; // inherited from NSObject

	static new(): SPXAudioDataStream; // inherited from NSObject

	constructor(o: { fromSynthesisResult: SPXSpeechSynthesisResult; });

	constructor(o: { fromSynthesisResult: SPXSpeechSynthesisResult; });

	canReadData(bytesRequested: number): boolean;

	canReadDataFromPositionBytesRequested(pos: number, bytesRequested: number): boolean;

	getPosition(): number;

	getStatus(): SPXStreamStatus;

	initFromSynthesisResult(result: SPXSpeechSynthesisResult): this;

	initFromSynthesisResultError(result: SPXSpeechSynthesisResult): this;

	readDataFromPositionDataLength(pos: number, data: NSMutableData, length: number): number;

	readDataLength(data: NSMutableData, length: number): number;

	saveToWavFile(fileName: string): void;

	setPosition(pos: number): void;
}

declare class SPXAudioInputStream extends NSObject {

	static alloc(): SPXAudioInputStream; // inherited from NSObject

	static new(): SPXAudioInputStream; // inherited from NSObject
}

declare class SPXAudioOutputStream extends NSObject {

	static alloc(): SPXAudioOutputStream; // inherited from NSObject

	static new(): SPXAudioOutputStream; // inherited from NSObject
}

declare const enum SPXAudioStreamContainerFormat {

	OGG_OPUS = 257,

	MP3 = 258,

	FLAC = 259,

	ALAW = 260,

	MULAW = 261,

	AMRNB = 262,

	AMRWB = 263
}

declare class SPXAudioStreamFormat extends NSObject {

	static alloc(): SPXAudioStreamFormat; // inherited from NSObject

	static new(): SPXAudioStreamFormat; // inherited from NSObject

	constructor(o: { usingCompressedFormat: SPXAudioStreamContainerFormat; });

	constructor(o: { usingPCMWithSampleRate: number; bitsPerSample: number; channels: number; });

	initUsingCompressedFormat(audioStreamContainerFormat: SPXAudioStreamContainerFormat): this;

	initUsingPCMWithSampleRateBitsPerSampleChannels(samplesPerSecond: number, bitsPerSample: number, channels: number): this;
}

declare class SPXCancellationDetails extends NSObject {

	static alloc(): SPXCancellationDetails; // inherited from NSObject

	static new(): SPXCancellationDetails; // inherited from NSObject

	readonly errorCode: SPXCancellationErrorCode;

	readonly errorDetails: string;

	readonly reason: SPXCancellationReason;

	constructor(o: { fromCanceledRecognitionResult: SPXRecognitionResult; });

	constructor(o: { fromCanceledRecognitionResult: SPXRecognitionResult; });

	initFromCanceledRecognitionResult(recognitionResult: SPXRecognitionResult): this;

	initFromCanceledRecognitionResultError(recognitionResult: SPXRecognitionResult): this;
}

declare const enum SPXCancellationErrorCode {

	NoError = 0,

	AuthenticationFailure = 1,

	BadRequest = 2,

	TooManyRequests = 3,

	Forbidden = 4,

	ConnectionFailure = 5,

	ServiceTimeout = 6,

	ServiceError = 7,

	ServiceUnavailable = 8,

	RuntimeError = 9
}

declare const enum SPXCancellationReason {

	Error = 1,

	EndOfStream = 2
}

declare class SPXConnection extends NSObject {

	static alloc(): SPXConnection; // inherited from NSObject

	static new(): SPXConnection; // inherited from NSObject

	constructor(o: { fromRecognizer: SPXRecognizer; });

	constructor(o: { fromRecognizer: SPXRecognizer; });

	addConnectedEventHandler(eventHandler: (p1: SPXConnection, p2: SPXConnectionEventArgs) => void): void;

	addDisconnectedEventHandler(eventHandler: (p1: SPXConnection, p2: SPXConnectionEventArgs) => void): void;

	close(): void;

	initFromRecognizer(recognizer: SPXRecognizer): this;

	initFromRecognizerError(recognizer: SPXRecognizer): this;

	open(forContinuousRecognition: boolean): void;

	sendMessagePayload(path: string, payload: string): void;

	sendMessagePayloadError(path: string, payload: string): boolean;

	setMessagePropertyPropertyNamePropertyValue(path: string, propertyName: string, propertyValue: string): void;
}

declare class SPXConnectionEventArgs extends SPXSessionEventArgs {

	static alloc(): SPXConnectionEventArgs; // inherited from NSObject

	static new(): SPXConnectionEventArgs; // inherited from NSObject
}

declare class SPXGrammar extends NSObject {

	static alloc(): SPXGrammar; // inherited from NSObject

	static new(): SPXGrammar; // inherited from NSObject
}

declare class SPXGrammarPhrase extends NSObject {

	static alloc(): SPXGrammarPhrase; // inherited from NSObject

	static new(): SPXGrammarPhrase; // inherited from NSObject

	constructor(o: { text: string; });

	initWithText(value: string): this;
}

declare class SPXIntentRecognitionCanceledEventArgs extends SPXIntentRecognitionEventArgs {

	static alloc(): SPXIntentRecognitionCanceledEventArgs; // inherited from NSObject

	static new(): SPXIntentRecognitionCanceledEventArgs; // inherited from NSObject

	readonly errorCode: SPXCancellationErrorCode;

	readonly errorDetails: string;

	readonly reason: SPXCancellationReason;
}

declare class SPXIntentRecognitionEventArgs extends SPXRecognitionEventArgs {

	static alloc(): SPXIntentRecognitionEventArgs; // inherited from NSObject

	static new(): SPXIntentRecognitionEventArgs; // inherited from NSObject

	readonly result: SPXIntentRecognitionResult;
}

declare class SPXIntentRecognitionResult extends SPXRecognitionResult {

	static alloc(): SPXIntentRecognitionResult; // inherited from NSObject

	static new(): SPXIntentRecognitionResult; // inherited from NSObject

	readonly intentId: string;
}

declare class SPXIntentRecognizer extends SPXRecognizer {

	static alloc(): SPXIntentRecognizer; // inherited from NSObject

	static new(): SPXIntentRecognizer; // inherited from NSObject

	authorizationToken: string;

	constructor();

	constructor();

	constructor(o: { speechConfiguration: SPXSpeechConfiguration; audioConfiguration: SPXAudioConfiguration; });

	constructor(o: { speechConfiguration: SPXSpeechConfiguration; audioConfiguration: SPXAudioConfiguration; });

	addAllIntentsFromModel(model: SPXLanguageUnderstandingModel): void;

	addAllIntentsFromModelMappingToId(model: SPXLanguageUnderstandingModel, intentId: string): void;

	addCanceledEventHandler(eventHandler: (p1: SPXIntentRecognizer, p2: SPXIntentRecognitionCanceledEventArgs) => void): void;

	addIntentFromModel(intentName: string, model: SPXLanguageUnderstandingModel): void;

	addIntentFromModelMappingToId(intentName: string, model: SPXLanguageUnderstandingModel, intentId: string): void;

	addIntentFromPhrase(simplePhrase: string): void;

	addIntentFromPhraseMappingToId(simplePhrase: string, intentId: string): void;

	addRecognizedEventHandler(eventHandler: (p1: SPXIntentRecognizer, p2: SPXIntentRecognitionEventArgs) => void): void;

	addRecognizingEventHandler(eventHandler: (p1: SPXIntentRecognizer, p2: SPXIntentRecognitionEventArgs) => void): void;

	init(speechConfiguration: SPXSpeechConfiguration): this;

	initError(speechConfiguration: SPXSpeechConfiguration): this;

	initWithSpeechConfigurationAudioConfiguration(speechConfiguration: SPXSpeechConfiguration, audioConfiguration: SPXAudioConfiguration): this;

	initWithSpeechConfigurationAudioConfigurationError(speechConfiguration: SPXSpeechConfiguration, audioConfiguration: SPXAudioConfiguration): this;

	recognizeOnce(): SPXIntentRecognitionResult;

	recognizeOnceAsync(resultReceivedHandler: (p1: SPXIntentRecognitionResult) => void): void;

	recognizeOnceAsyncError(resultReceivedHandler: (p1: SPXIntentRecognitionResult) => void): boolean;

	startContinuousRecognition(): void;

	stopContinuousRecognition(): void;
}

declare class SPXLanguageUnderstandingModel extends NSObject {

	static alloc(): SPXLanguageUnderstandingModel; // inherited from NSObject

	static new(): SPXLanguageUnderstandingModel; // inherited from NSObject

	constructor(o: { appId: string; });

	constructor(o: { endpoint: string; });

	constructor(o: { subscription: string; withAppId: string; andRegion: string; });

	initWithAppId(appId: string): this;

	initWithEndpoint(uri: string): this;

	initWithSubscriptionWithAppIdAndRegion(key: string, appId: string, region: string): this;
}

declare class SPXNoMatchDetails extends NSObject {

	static alloc(): SPXNoMatchDetails; // inherited from NSObject

	static new(): SPXNoMatchDetails; // inherited from NSObject

	readonly reason: SPXNoMatchReason;

	constructor(o: { fromNoMatchRecognitionResult: SPXRecognitionResult; });

	constructor(o: { fromNoMatchRecognitionResult: SPXRecognitionResult; });

	initFromNoMatchRecognitionResult(recognitionResult: SPXRecognitionResult): this;

	initFromNoMatchRecognitionResultError(recognitionResult: SPXRecognitionResult): this;
}

declare const enum SPXNoMatchReason {

	NotRecognized = 1,

	InitialSilenceTimeout = 2,

	InitialBabbleTimeout = 3,

	KeywordNotRecognized = 4
}

declare const enum SPXOutputFormat {

	Simple = 0,

	Detailed = 1
}

declare class SPXPhraseListGrammar extends SPXGrammar {

	static alloc(): SPXPhraseListGrammar; // inherited from NSObject

	static new(): SPXPhraseListGrammar; // inherited from NSObject

	constructor(o: { recognizer: SPXRecognizer; });

	addPhrase(phrase: string): void;

	clear(): void;

	initWithRecognizer(recognizer: SPXRecognizer): this;
}

interface SPXPropertyCollection {

	getPropertyById(propertyId: SPXPropertyId): string;

	getPropertyByIdDefaultValue(propertyId: SPXPropertyId, defaultValue: string): string;

	getPropertyByName(name: string): string;

	getPropertyByNameDefaultValue(name: string, defaultValue: string): string;

	setPropertyToById?(value: string, propertyId: SPXPropertyId): void;

	setPropertyToByName?(value: string, name: string): void;
}
declare var SPXPropertyCollection: {

	prototype: SPXPropertyCollection;
};

declare const enum SPXPropertyId {

	SpeechServiceConnectionKey = 1000,

	SpeechServiceConnectionEndpoint = 1001,

	SpeechServiceConnectionRegion = 1002,

	SpeechServiceAuthorizationToken = 1003,

	SpeechServiceAuthorizationType = 1004,

	SpeechServiceConnectionEndpointId = 1005,

	SpeechServiceConnectionHost = 1006,

	SpeechServiceConnectionProxyHostName = 1100,

	SpeechServiceConnectionProxyPort = 1101,

	SpeechServiceConnectionProxyUserName = 1102,

	SpeechServiceConnectionProxyPassword = 1103,

	SpeechServiceConnectionUrl = 1104,

	SpeechServiceConnectionTranslationToLanguages = 2000,

	SpeechServiceConnectionTranslationVoice = 2001,

	SpeechServiceConnectionTranslationFeatures = 2002,

	SpeechServiceConnectionIntentRegion = 2003,

	SpeechServiceConnectionRecognitionMode = 3000,

	SpeechServiceConnectionRecognitionLanguage = 3001,

	SpeechSessionId = 3002,

	SpeechServiceConnectionSynthesisLanguage = 3100,

	SpeechServiceConnectionSynthesisVocie = 3101,

	SpeechServiceConnectionSynthesisOutputFormat = 3102,

	SpeechServiceConnectionInitialSilenceTimeoutMs = 3200,

	SpeechServiceConnectionEndSilenceTimeoutMs = 3201,

	SpeechServiceConnectionEnableAudioLogging = 3202,

	SpeechServiceResponseRequestDetailedResultTrueFalse = 4000,

	SpeechServiceResponseRequestProfanityFilterTrueFalse = 4001,

	SpeechServiceResponseProfanityOption = 4002,

	SpeechServiceResponsePostProcessingOption = 4003,

	SpeechServiceResponseRequestWordLevelTimestamps = 4004,

	SpeechServiceResponseStablePartialResultThreshold = 4005,

	SpeechServiceResponseOutputFormatOption = 4006,

	SpeechServiceResponseTranslationRequestStablePartialResult = 4100,

	SpeechServiceResponseJsonResult = 5000,

	SpeechServiceResponseJsonErrorDetails = 5001,

	SpeechServiceResponseRecognitionLatencyMs = 5002,

	CancellationDetailsReason = 6000,

	CancellationDetailsReasonText = 6001,

	CancellationDetailsReasonDetailedText = 6002,

	LanguageUnderstandingServiceResponseJsonResult = 7000,

	SpeechLogFilename = 9001
}

declare class SPXPullAudioInputStream extends SPXAudioInputStream {

	static alloc(): SPXPullAudioInputStream; // inherited from NSObject

	static new(): SPXPullAudioInputStream; // inherited from NSObject

	constructor(o: { audioFormat: SPXAudioStreamFormat; readHandler: (p1: NSMutableData, p2: number) => number; closeHandler: () => void; });

	constructor(o: { readHandler: (p1: NSMutableData, p2: number) => number; closeHandler: () => void; });

	initWithAudioFormatReadHandlerCloseHandler(format: SPXAudioStreamFormat, readHandler: (p1: NSMutableData, p2: number) => number, closeHandler: () => void): this;

	initWithReadHandlerCloseHandler(readHandler: (p1: NSMutableData, p2: number) => number, closeHandler: () => void): this;
}

declare class SPXPullAudioOutputStream extends SPXAudioOutputStream {

	static alloc(): SPXPullAudioOutputStream; // inherited from NSObject

	static new(): SPXPullAudioOutputStream; // inherited from NSObject

	readLength(data: NSMutableData, length: number): number;
}

declare class SPXPushAudioInputStream extends SPXAudioInputStream {

	static alloc(): SPXPushAudioInputStream; // inherited from NSObject

	static new(): SPXPushAudioInputStream; // inherited from NSObject

	constructor(o: { audioFormat: SPXAudioStreamFormat; });

	close(): void;

	initWithAudioFormat(format: SPXAudioStreamFormat): this;

	write(data: NSData): void;
}

declare class SPXPushAudioOutputStream extends SPXAudioOutputStream {

	static alloc(): SPXPushAudioOutputStream; // inherited from NSObject

	static new(): SPXPushAudioOutputStream; // inherited from NSObject

	constructor(o: { writeHandler: (p1: NSData) => number; closeHandler: () => void; });

	initWithWriteHandlerCloseHandler(writeHandler: (p1: NSData) => number, closeHandler: () => void): this;
}

declare class SPXRecognitionEventArgs extends SPXSessionEventArgs {

	static alloc(): SPXRecognitionEventArgs; // inherited from NSObject

	static new(): SPXRecognitionEventArgs; // inherited from NSObject

	readonly offset: number;
}

declare class SPXRecognitionResult extends NSObject {

	static alloc(): SPXRecognitionResult; // inherited from NSObject

	static new(): SPXRecognitionResult; // inherited from NSObject

	readonly duration: number;

	readonly offset: number;

	readonly properties: SPXPropertyCollection;

	readonly reason: SPXResultReason;

	readonly resultId: string;

	readonly text: string;
}

declare class SPXRecognizer extends NSObject {

	static alloc(): SPXRecognizer; // inherited from NSObject

	static new(): SPXRecognizer; // inherited from NSObject

	readonly properties: SPXPropertyCollection;

	addSessionStartedEventHandler(eventHandler: (p1: SPXRecognizer, p2: SPXSessionEventArgs) => void): void;

	addSessionStoppedEventHandler(eventHandler: (p1: SPXRecognizer, p2: SPXSessionEventArgs) => void): void;

	addSpeechEndDetectedEventHandler(eventHandler: (p1: SPXRecognizer, p2: SPXRecognitionEventArgs) => void): void;

	addSpeechStartDetectedEventHandler(eventHandler: (p1: SPXRecognizer, p2: SPXRecognitionEventArgs) => void): void;
}

declare const enum SPXResultReason {

	NoMatch = 0,

	Canceled = 1,

	RecognizingSpeech = 2,

	RecognizedSpeech = 3,

	RecognizingIntent = 4,

	RecognizedIntent = 5,

	TranslatingSpeech = 6,

	TranslatedSpeech = 7,

	SynthesizingAudio = 8,

	SynthesizingAudioCompleted = 9,

	SynthesizingAudioStarted = 12
}

declare const enum SPXServicePropertyChannel {

	UriQueryParameter = 0
}

declare class SPXSessionEventArgs extends NSObject {

	static alloc(): SPXSessionEventArgs; // inherited from NSObject

	static new(): SPXSessionEventArgs; // inherited from NSObject

	readonly sessionId: string;
}

declare const enum SPXSpeechConfigProfanityOption {

	ProfanityMasked = 0,

	ProfanityRemoved = 1,

	ProfanityRaw = 2
}

declare class SPXSpeechConfiguration extends NSObject {

	static alloc(): SPXSpeechConfiguration; // inherited from NSObject

	static new(): SPXSpeechConfiguration; // inherited from NSObject

	authorizationToken: string;

	endpointId: string;

	outputFormat: SPXOutputFormat;

	readonly region: string;

	speechRecognitionLanguage: string;

	speechSynthesisLanguage: string;

	readonly speechSynthesisOutputFormat: string;

	speechSynthesisVoiceName: string;

	readonly subscriptionKey: string;

	constructor(o: { authorizationToken: string; region: string; });

	constructor(o: { authorizationToken: string; region: string; });

	constructor(o: { endpoint: string; });

	constructor(o: { endpoint: string; });

	constructor(o: { endpoint: string; subscription: string; });

	constructor(o: { endpoint: string; subscription: string; });

	constructor(o: { host: string; });

	constructor(o: { host: string; });

	constructor(o: { host: string; subscription: string; });

	constructor(o: { host: string; subscription: string; });

	constructor(o: { subscription: string; region: string; });

	constructor(o: { subscription: string; region: string; });

	enableAudioLogging(): void;

	enableDictation(): void;

	getPropertyById(propertyId: SPXPropertyId): string;

	getPropertyByName(name: string): string;

	initWithAuthorizationTokenRegion(authToken: string, region: string): this;

	initWithAuthorizationTokenRegionError(authToken: string, region: string): this;

	initWithEndpoint(endpointUri: string): this;

	initWithEndpointError(endpointUri: string): this;

	initWithEndpointSubscription(endpointUri: string, subscriptionKey: string): this;

	initWithEndpointSubscriptionError(endpointUri: string, subscriptionKey: string): this;

	initWithHost(hostUri: string): this;

	initWithHostError(hostUri: string): this;

	initWithHostSubscription(hostUri: string, subscriptionKey: string): this;

	initWithHostSubscriptionError(hostUri: string, subscriptionKey: string): this;

	initWithSubscriptionRegion(subscriptionKey: string, region: string): this;

	initWithSubscriptionRegionError(subscriptionKey: string, region: string): this;

	requestWordLevelTimestamps(): void;

	setProfanityOptionTo(profanity: SPXSpeechConfigProfanityOption): void;

	setPropertyToById(value: string, propertyId: SPXPropertyId): void;

	setPropertyToByName(value: string, name: string): void;

	setProxyUsingHostPortUserNamePassword(proxyHostName: string, proxyPort: number, proxyUserName: string, proxyPassword: string): void;

	setProxyUsingHostPortUserNamePasswordError(proxyHostName: string, proxyPort: number, proxyUserName: string, proxyPassword: string): boolean;

	setServicePropertyToByNameUsingChannel(value: string, name: string, channel: SPXServicePropertyChannel): void;

	setSpeechSynthesisOutputFormat(formatId: SPXSpeechSynthesisOutputFormat): void;
}

declare class SPXSpeechRecognitionCanceledEventArgs extends SPXSpeechRecognitionEventArgs {

	static alloc(): SPXSpeechRecognitionCanceledEventArgs; // inherited from NSObject

	static new(): SPXSpeechRecognitionCanceledEventArgs; // inherited from NSObject

	readonly errorCode: SPXCancellationErrorCode;

	readonly errorDetails: string;

	readonly reason: SPXCancellationReason;
}

declare class SPXSpeechRecognitionEventArgs extends SPXRecognitionEventArgs {

	static alloc(): SPXSpeechRecognitionEventArgs; // inherited from NSObject

	static new(): SPXSpeechRecognitionEventArgs; // inherited from NSObject

	readonly result: SPXSpeechRecognitionResult;
}

declare class SPXSpeechRecognitionResult extends SPXRecognitionResult {

	static alloc(): SPXSpeechRecognitionResult; // inherited from NSObject

	static new(): SPXSpeechRecognitionResult; // inherited from NSObject
}

declare class SPXSpeechRecognizer extends SPXRecognizer {

	static alloc(): SPXSpeechRecognizer; // inherited from NSObject

	static new(): SPXSpeechRecognizer; // inherited from NSObject

	authorizationToken: string;

	readonly endpointId: string;

	constructor();

	constructor();

	constructor(o: { speechConfiguration: SPXSpeechConfiguration; audioConfiguration: SPXAudioConfiguration; });

	constructor(o: { speechConfiguration: SPXSpeechConfiguration; audioConfiguration: SPXAudioConfiguration; });

	addCanceledEventHandler(eventHandler: (p1: SPXSpeechRecognizer, p2: SPXSpeechRecognitionCanceledEventArgs) => void): void;

	addRecognizedEventHandler(eventHandler: (p1: SPXSpeechRecognizer, p2: SPXSpeechRecognitionEventArgs) => void): void;

	addRecognizingEventHandler(eventHandler: (p1: SPXSpeechRecognizer, p2: SPXSpeechRecognitionEventArgs) => void): void;

	init(speechConfiguration: SPXSpeechConfiguration): this;

	initError(speechConfiguration: SPXSpeechConfiguration): this;

	initWithSpeechConfigurationAudioConfiguration(speechConfiguration: SPXSpeechConfiguration, audioConfiguration: SPXAudioConfiguration): this;

	initWithSpeechConfigurationAudioConfigurationError(speechConfiguration: SPXSpeechConfiguration, audioConfiguration: SPXAudioConfiguration): this;

	recognizeOnce(): SPXSpeechRecognitionResult;

	recognizeOnceAsync(resultReceivedHandler: (p1: SPXSpeechRecognitionResult) => void): void;

	recognizeOnceAsyncError(resultReceivedHandler: (p1: SPXSpeechRecognitionResult) => void): boolean;

	startContinuousRecognition(): void;

	stopContinuousRecognition(): void;
}

declare class SPXSpeechSynthesisCancellationDetails extends NSObject {

	static alloc(): SPXSpeechSynthesisCancellationDetails; // inherited from NSObject

	static new(): SPXSpeechSynthesisCancellationDetails; // inherited from NSObject

	readonly errorCode: SPXCancellationErrorCode;

	readonly errorDetails: string;

	readonly reason: SPXCancellationReason;

	constructor(o: { fromCanceledAudioDataStream: SPXAudioDataStream; });

	constructor(o: { fromCanceledAudioDataStream: SPXAudioDataStream; });

	constructor(o: { fromCanceledSynthesisResult: SPXSpeechSynthesisResult; });

	constructor(o: { fromCanceledSynthesisResult: SPXSpeechSynthesisResult; });

	initFromCanceledAudioDataStream(stream: SPXAudioDataStream): this;

	initFromCanceledAudioDataStreamError(stream: SPXAudioDataStream): this;

	initFromCanceledSynthesisResult(synthesisResult: SPXSpeechSynthesisResult): this;

	initFromCanceledSynthesisResultError(synthesisResult: SPXSpeechSynthesisResult): this;
}

declare class SPXSpeechSynthesisEventArgs extends NSObject {

	static alloc(): SPXSpeechSynthesisEventArgs; // inherited from NSObject

	static new(): SPXSpeechSynthesisEventArgs; // inherited from NSObject

	readonly result: SPXSpeechSynthesisResult;
}

declare const enum SPXSpeechSynthesisOutputFormat {

	Raw8Khz8BitMonoMULaw = 1,

	Riff16Khz16KbpsMonoSiren = 2,

	Audio16Khz16KbpsMonoSiren = 3,

	Audio16Khz32KBitRateMonoMp3 = 4,

	Audio16Khz128KBitRateMonoMp3 = 5,

	Audio16Khz64KBitRateMonoMp3 = 6,

	Audio24Khz48KBitRateMonoMp3 = 7,

	Audio24Khz96KBitRateMonoMp3 = 8,

	Audio24Khz160KBitRateMonoMp3 = 9,

	Raw16Khz16BitMonoTrueSilk = 10,

	Riff16Khz16BitMonoPcm = 11,

	Riff8Khz16BitMonoPcm = 12,

	Riff24Khz16BitMonoPcm = 13,

	Riff8Khz8BitMonoMULaw = 14,

	Raw16Khz16BitMonoPcm = 15,

	Raw24Khz16BitMonoPcm = 16,

	Raw8Khz16BitMonoPcm = 17
}

declare class SPXSpeechSynthesisResult extends NSObject {

	static alloc(): SPXSpeechSynthesisResult; // inherited from NSObject

	static new(): SPXSpeechSynthesisResult; // inherited from NSObject

	readonly audioData: NSData;

	readonly properties: SPXPropertyCollection;

	readonly reason: SPXResultReason;

	readonly resultId: string;
}

declare class SPXSpeechSynthesisWordBoundaryEventArgs extends NSObject {

	static alloc(): SPXSpeechSynthesisWordBoundaryEventArgs; // inherited from NSObject

	static new(): SPXSpeechSynthesisWordBoundaryEventArgs; // inherited from NSObject

	readonly audioOffset: number;

	readonly textOffset: number;

	readonly wordLength: number;
}

declare class SPXSpeechSynthesizer extends NSObject {

	static alloc(): SPXSpeechSynthesizer; // inherited from NSObject

	static new(): SPXSpeechSynthesizer; // inherited from NSObject

	authorizationToken: string;

	readonly properties: SPXPropertyCollection;

	constructor();

	constructor();

	constructor(o: { speechConfiguration: SPXSpeechConfiguration; audioConfiguration: SPXAudioConfiguration; });

	constructor(o: { speechConfiguration: SPXSpeechConfiguration; audioConfiguration: SPXAudioConfiguration; });

	addSynthesisCanceledEventHandler(eventHandler: (p1: SPXSpeechSynthesizer, p2: SPXSpeechSynthesisEventArgs) => void): void;

	addSynthesisCompletedEventHandler(eventHandler: (p1: SPXSpeechSynthesizer, p2: SPXSpeechSynthesisEventArgs) => void): void;

	addSynthesisStartedEventHandler(eventHandler: (p1: SPXSpeechSynthesizer, p2: SPXSpeechSynthesisEventArgs) => void): void;

	addSynthesisWordBoundaryEventHandler(eventHandler: (p1: SPXSpeechSynthesizer, p2: SPXSpeechSynthesisWordBoundaryEventArgs) => void): void;

	addSynthesizingEventHandler(eventHandler: (p1: SPXSpeechSynthesizer, p2: SPXSpeechSynthesisEventArgs) => void): void;

	init(speechConfiguration: SPXSpeechConfiguration): this;

	initError(speechConfiguration: SPXSpeechConfiguration): this;

	initWithSpeechConfigurationAudioConfiguration(speechConfiguration: SPXSpeechConfiguration, audioConfiguration: SPXAudioConfiguration): this;

	initWithSpeechConfigurationAudioConfigurationError(speechConfiguration: SPXSpeechConfiguration, audioConfiguration: SPXAudioConfiguration): this;

	speakSsml(ssml: string): SPXSpeechSynthesisResult;

	speakSsmlError(ssml: string): SPXSpeechSynthesisResult;

	speakText(text: string): SPXSpeechSynthesisResult;

	speakTextError(text: string): SPXSpeechSynthesisResult;

	startSpeakingSsml(ssml: string): SPXSpeechSynthesisResult;

	startSpeakingSsmlError(ssml: string): SPXSpeechSynthesisResult;

	startSpeakingText(text: string): SPXSpeechSynthesisResult;

	startSpeakingTextError(text: string): SPXSpeechSynthesisResult;
}

declare class SPXSpeechTranslationConfiguration extends SPXSpeechConfiguration {

	static alloc(): SPXSpeechTranslationConfiguration; // inherited from NSObject

	static new(): SPXSpeechTranslationConfiguration; // inherited from NSObject

	readonly targetLanguages: NSArray<any>;

	voiceName: string;

	addTargetLanguage(lang: string): void;

	removeTargetLanguage(lang: string): void;
}

declare const enum SPXStreamStatus {

	Unknown = 0,

	NoData = 1,

	PartialData = 2,

	AllData = 3,

	Canceled = 4
}

declare class SPXTranslationRecognitionCanceledEventArgs extends SPXTranslationRecognitionEventArgs {

	static alloc(): SPXTranslationRecognitionCanceledEventArgs; // inherited from NSObject

	static new(): SPXTranslationRecognitionCanceledEventArgs; // inherited from NSObject

	readonly errorCode: SPXCancellationErrorCode;

	readonly errorDetails: string;

	readonly reason: SPXCancellationReason;
}

declare class SPXTranslationRecognitionEventArgs extends SPXRecognitionEventArgs {

	static alloc(): SPXTranslationRecognitionEventArgs; // inherited from NSObject

	static new(): SPXTranslationRecognitionEventArgs; // inherited from NSObject

	readonly result: SPXTranslationRecognitionResult;
}

declare class SPXTranslationRecognitionResult extends SPXRecognitionResult {

	static alloc(): SPXTranslationRecognitionResult; // inherited from NSObject

	static new(): SPXTranslationRecognitionResult; // inherited from NSObject

	readonly translations: NSDictionary<any, any>;
}

declare class SPXTranslationRecognizer extends SPXRecognizer {

	static alloc(): SPXTranslationRecognizer; // inherited from NSObject

	static new(): SPXTranslationRecognizer; // inherited from NSObject

	authorizationToken: string;

	readonly targetLanguages: NSArray<any>;

	constructor();

	constructor();

	constructor(o: { speechTranslationConfiguration: SPXSpeechTranslationConfiguration; audioConfiguration: SPXAudioConfiguration; });

	constructor(o: { speechTranslationConfiguration: SPXSpeechTranslationConfiguration; audioConfiguration: SPXAudioConfiguration; });

	addCanceledEventHandler(eventHandler: (p1: SPXTranslationRecognizer, p2: SPXTranslationRecognitionCanceledEventArgs) => void): void;

	addRecognizedEventHandler(eventHandler: (p1: SPXTranslationRecognizer, p2: SPXTranslationRecognitionEventArgs) => void): void;

	addRecognizingEventHandler(eventHandler: (p1: SPXTranslationRecognizer, p2: SPXTranslationRecognitionEventArgs) => void): void;

	addSynthesizingEventHandler(eventHandler: (p1: SPXTranslationRecognizer, p2: SPXTranslationSynthesisEventArgs) => void): void;

	addTargetLanguage(lang: string): void;

	init(translationConfiguration: SPXSpeechTranslationConfiguration): this;

	initError(translationConfiguration: SPXSpeechTranslationConfiguration): this;

	initWithSpeechTranslationConfigurationAudioConfiguration(translationConfiguration: SPXSpeechTranslationConfiguration, audioConfiguration: SPXAudioConfiguration): this;

	initWithSpeechTranslationConfigurationAudioConfigurationError(translationConfiguration: SPXSpeechTranslationConfiguration, audioConfiguration: SPXAudioConfiguration): this;

	recognizeOnce(): SPXTranslationRecognitionResult;

	recognizeOnceAsync(resultReceivedHandler: (p1: SPXTranslationRecognitionResult) => void): void;

	recognizeOnceAsyncError(resultReceivedHandler: (p1: SPXTranslationRecognitionResult) => void): boolean;

	removeTargetLanguage(lang: string): void;

	startContinuousRecognition(): void;

	stopContinuousRecognition(): void;
}

declare class SPXTranslationSynthesisEventArgs extends SPXSessionEventArgs {

	static alloc(): SPXTranslationSynthesisEventArgs; // inherited from NSObject

	static new(): SPXTranslationSynthesisEventArgs; // inherited from NSObject

	readonly result: SPXTranslationSynthesisResult;
}

declare class SPXTranslationSynthesisResult extends NSObject {

	static alloc(): SPXTranslationSynthesisResult; // inherited from NSObject

	static new(): SPXTranslationSynthesisResult; // inherited from NSObject

	readonly audio: NSData;

	readonly reason: SPXResultReason;
}
