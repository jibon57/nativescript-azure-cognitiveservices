/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class AudioDataStream {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.AudioDataStream>;
					public saveToWavFileAsync(param0: string): java.util.concurrent.Future<java.lang.Void>;
					public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
					public getStatus(): com.microsoft.cognitiveservices.speech.StreamStatus;
					public saveToWavFile(param0: string): void;
					public setPosition(param0: number): void;
					public canReadData(param0: number, param1: number): boolean;
					public getImpl(): com.microsoft.cognitiveservices.speech.internal.AudioDataStream;
					public canReadData(param0: number): boolean;
					public readData(param0: number, param1: native.Array<number>): number;
					public close(): void;
					public static fromResult(param0: com.microsoft.cognitiveservices.speech.SpeechSynthesisResult): com.microsoft.cognitiveservices.speech.AudioDataStream;
					public getPosition(): number;
					public readData(param0: native.Array<number>): number;
				}
				export module AudioDataStream {
					export class PrivatePropertyCollection extends com.microsoft.cognitiveservices.speech.PropertyCollection {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.AudioDataStream.PrivatePropertyCollection>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.AudioDataStream, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class AutoDetectSourceLanguageConfig {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.AutoDetectSourceLanguageConfig>;
					public getImpl(): com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageConfig;
					public close(): void;
					public static fromLanguages(param0: java.util.List<string>): com.microsoft.cognitiveservices.speech.AutoDetectSourceLanguageConfig;
					public static fromSourceLanguageConfigs(param0: java.util.List<com.microsoft.cognitiveservices.speech.SourceLanguageConfig>): com.microsoft.cognitiveservices.speech.AutoDetectSourceLanguageConfig;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class AutoDetectSourceLanguageResult {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.AutoDetectSourceLanguageResult>;
					public getLanguage(): string;
					public static fromResult(param0: com.microsoft.cognitiveservices.speech.SpeechRecognitionResult): com.microsoft.cognitiveservices.speech.AutoDetectSourceLanguageResult;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class CancellationDetails {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.CancellationDetails>;
					public static fromResult(param0: com.microsoft.cognitiveservices.speech.RecognitionResult): com.microsoft.cognitiveservices.speech.CancellationDetails;
					public toString(): string;
					public getReason(): com.microsoft.cognitiveservices.speech.CancellationReason;
					public getErrorDetails(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.CancellationDetails);
					public close(): void;
					public getErrorCode(): com.microsoft.cognitiveservices.speech.CancellationErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class CancellationErrorCode {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.CancellationErrorCode>;
					public static NoError: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public static AuthenticationFailure: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public static BadRequest: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public static TooManyRequests: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public static Forbidden: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public static ConnectionFailure: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public static ServiceTimeout: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public static ServiceError: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public static ServiceUnavailable: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public static RuntimeError: com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					public getValue(): com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.CancellationErrorCode>;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.CancellationErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class CancellationReason {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.CancellationReason>;
					public static Error: com.microsoft.cognitiveservices.speech.CancellationReason;
					public static EndOfStream: com.microsoft.cognitiveservices.speech.CancellationReason;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.CancellationReason;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.CancellationReason>;
					public getValue(): com.microsoft.cognitiveservices.speech.internal.CancellationReason;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class ClassLanguageModel extends com.microsoft.cognitiveservices.speech.Grammar {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.ClassLanguageModel>;
					public static fromStorageId(param0: string): com.microsoft.cognitiveservices.speech.Grammar;
					public assignClass(param0: string, param1: com.microsoft.cognitiveservices.speech.Grammar): void;
					public static fromStorageId(param0: string): com.microsoft.cognitiveservices.speech.ClassLanguageModel;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class Connection {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.Connection>;
					public connected: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.ConnectionEventArgs>;
					public disconnected: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.ConnectionEventArgs>;
					public static fromRecognizer(param0: com.microsoft.cognitiveservices.speech.Recognizer): com.microsoft.cognitiveservices.speech.Connection;
					public close(): void;
					public sendMessageAsync(param0: string, param1: string): java.util.concurrent.Future<java.lang.Void>;
					public closeConnection(): void;
					public dispose(param0: boolean): void;
					public setMessageProperty(param0: string, param1: string, param2: string): void;
					public openConnection(param0: boolean): void;
				}
				export module Connection {
					export class ConnectionEventHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.Connection.ConnectionEventHandlerImpl>;
						public constructor();
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventArgs): void;
						public constructor(param0: number, param1: boolean);
						public constructor(param0: com.microsoft.cognitiveservices.speech.Connection, param1: com.microsoft.cognitiveservices.speech.Connection, param2: java.lang.Boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class ConnectionEventArgs extends com.microsoft.cognitiveservices.speech.SessionEventArgs {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.ConnectionEventArgs>;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs);
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventArgs);
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class Grammar {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.Grammar>;
					public getGrammarImpl(): com.microsoft.cognitiveservices.speech.internal.Grammar;
					public static fromStorageId(param0: string): com.microsoft.cognitiveservices.speech.Grammar;
					public close(): void;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.Grammar);
					public dispose(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class GrammarList {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.GrammarList>;
					public close(): void;
					public static fromRecognizer(param0: com.microsoft.cognitiveservices.speech.Recognizer): com.microsoft.cognitiveservices.speech.GrammarList;
					public add(param0: com.microsoft.cognitiveservices.speech.Grammar): void;
					public dispose(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class KeywordRecognitionModel {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.KeywordRecognitionModel>;
					public static fromStream(param0: java.io.InputStream, param1: string, param2: boolean): com.microsoft.cognitiveservices.speech.KeywordRecognitionModel;
					public close(): void;
					public getModelImpl(): com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel;
					public static fromFile(param0: string): com.microsoft.cognitiveservices.speech.KeywordRecognitionModel;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class NoMatchDetails {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.NoMatchDetails>;
					public getReason(): com.microsoft.cognitiveservices.speech.NoMatchReason;
					public toString(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.NoMatchDetails);
					public close(): void;
					public static fromResult(param0: com.microsoft.cognitiveservices.speech.RecognitionResult): com.microsoft.cognitiveservices.speech.NoMatchDetails;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class NoMatchReason {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.NoMatchReason>;
					public static NotRecognized: com.microsoft.cognitiveservices.speech.NoMatchReason;
					public static InitialSilenceTimeout: com.microsoft.cognitiveservices.speech.NoMatchReason;
					public static InitialBabbleTimeout: com.microsoft.cognitiveservices.speech.NoMatchReason;
					public static KeywordNotRecognized: com.microsoft.cognitiveservices.speech.NoMatchReason;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.NoMatchReason>;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.NoMatchReason;
					public getValue(): com.microsoft.cognitiveservices.speech.internal.NoMatchReason;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class OutputFormat {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.OutputFormat>;
					public static Simple: com.microsoft.cognitiveservices.speech.OutputFormat;
					public static Detailed: com.microsoft.cognitiveservices.speech.OutputFormat;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.OutputFormat;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.OutputFormat>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class PhraseListGrammar {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.PhraseListGrammar>;
					public clear(): void;
					public close(): void;
					public addPhrase(param0: string): void;
					public static fromRecognizer(param0: com.microsoft.cognitiveservices.speech.Recognizer): com.microsoft.cognitiveservices.speech.PhraseListGrammar;
					public dispose(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class ProfanityOption {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.ProfanityOption>;
					public static Masked: com.microsoft.cognitiveservices.speech.ProfanityOption;
					public static Removed: com.microsoft.cognitiveservices.speech.ProfanityOption;
					public static Raw: com.microsoft.cognitiveservices.speech.ProfanityOption;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.ProfanityOption>;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.ProfanityOption;
					public getValue(): com.microsoft.cognitiveservices.speech.internal.ProfanityOption;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class PropertyCollection {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.PropertyCollection>;
					public getProperty(param0: com.microsoft.cognitiveservices.speech.PropertyId): string;
					public setProperty(param0: string, param1: string): void;
					public close(): void;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
					public getProperty(param0: string): string;
					public setProperty(param0: com.microsoft.cognitiveservices.speech.PropertyId, param1: string): void;
					public getProperty(param0: string, param1: string): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class PropertyId {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.PropertyId>;
					public static SpeechServiceConnection_Key: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_Endpoint: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_Region: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceAuthorization_Token: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceAuthorization_Type: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_EndpointId: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_Host: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_ProxyHostName: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_ProxyPort: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_ProxyUserName: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_ProxyPassword: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_Url: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_TranslationToLanguages: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_TranslationVoice: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_TranslationFeatures: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_IntentRegion: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_RecoMode: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_RecoLanguage: com.microsoft.cognitiveservices.speech.PropertyId;
					public static Speech_SessionId: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_SynthLanguage: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_SynthVoice: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_SynthOutputFormat: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_InitialSilenceTimeoutMs: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_EndSilenceTimeoutMs: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_EnableAudioLogging: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_RequestDetailedResultTrueFalse: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_RequestProfanityFilterTrueFalse: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_ProfanityOption: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_PostProcessingOption: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_RequestWordLevelTimestamps: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_StablePartialResultThreshold: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_OutputFormatOption: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_TranslationRequestStablePartialResult: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_JsonResult: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_JsonErrorDetails: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceResponse_RecognitionLatencyMs: com.microsoft.cognitiveservices.speech.PropertyId;
					public static CancellationDetails_Reason: com.microsoft.cognitiveservices.speech.PropertyId;
					public static CancellationDetails_ReasonText: com.microsoft.cognitiveservices.speech.PropertyId;
					public static CancellationDetails_ReasonDetailedText: com.microsoft.cognitiveservices.speech.PropertyId;
					public static LanguageUnderstandingServiceResponse_JsonResult: com.microsoft.cognitiveservices.speech.PropertyId;
					public static Speech_LogFilename: com.microsoft.cognitiveservices.speech.PropertyId;
					public static Conversation_ApplicationId: com.microsoft.cognitiveservices.speech.PropertyId;
					public static Conversation_DialogType: com.microsoft.cognitiveservices.speech.PropertyId;
					public static Conversation_Initial_Silence_Timeout: com.microsoft.cognitiveservices.speech.PropertyId;
					public static Conversation_From_Id: com.microsoft.cognitiveservices.speech.PropertyId;
					public static Conversation_Conversation_Id: com.microsoft.cognitiveservices.speech.PropertyId;
					public static Conversation_Custom_Voice_Deployment_Ids: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_AutoDetectSourceLanguages: com.microsoft.cognitiveservices.speech.PropertyId;
					public static SpeechServiceConnection_AutoDetectSourceLanguageResult: com.microsoft.cognitiveservices.speech.PropertyId;
					public static DataBuffer_UserId: com.microsoft.cognitiveservices.speech.PropertyId;
					public static DataBuffer_TimeStamp: com.microsoft.cognitiveservices.speech.PropertyId;
					public getValue(): com.microsoft.cognitiveservices.speech.internal.PropertyId;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.PropertyId;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.PropertyId>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class RecognitionEventArgs extends com.microsoft.cognitiveservices.speech.SessionEventArgs {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.RecognitionEventArgs>;
					public offset: java.math.BigInteger;
					public toString(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs);
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs);
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class RecognitionResult {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.RecognitionResult>;
					public getDuration(): java.math.BigInteger;
					public getReason(): com.microsoft.cognitiveservices.speech.ResultReason;
					public getText(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult);
					public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
					public close(): void;
					public getResultImpl(): com.microsoft.cognitiveservices.speech.internal.RecognitionResult;
					public getOffset(): java.math.BigInteger;
					public getResultId(): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class Recognizer {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.Recognizer>;
					public static s_executorService: java.util.concurrent.ExecutorService;
					public eventCounter: java.util.concurrent.atomic.AtomicInteger;
					public backgroundAttempts: java.lang.Integer;
					public sessionStarted: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SessionEventArgs>;
					public sessionStopped: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SessionEventArgs>;
					public speechStartDetected: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.RecognitionEventArgs>;
					public speechEndDetected: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.RecognitionEventArgs>;
					public internalRecognizerImpl: com.microsoft.cognitiveservices.speech.internal.Recognizer;
					public sessionStartedHandler: com.microsoft.cognitiveservices.speech.Recognizer.SessionEventHandlerImpl;
					public sessionStoppedHandler: com.microsoft.cognitiveservices.speech.Recognizer.SessionEventHandlerImpl;
					public speechStartDetectedHandler: com.microsoft.cognitiveservices.speech.Recognizer.RecognitionEventHandlerImpl;
					public speechEndDetectedHandler: com.microsoft.cognitiveservices.speech.Recognizer.RecognitionEventHandlerImpl;
					public close(): void;
					public doAsyncRecognitionAction(param0: java.lang.Runnable): void;
					public constructor(param0: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
					public dispose(param0: boolean): void;
					public getRecognizerImpl(): com.microsoft.cognitiveservices.speech.internal.Recognizer;
				}
				export module Recognizer {
					export class RecognitionEventHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.Recognizer.RecognitionEventHandlerImpl>;
						public constructor();
						public constructor(param0: com.microsoft.cognitiveservices.speech.Recognizer, param1: com.microsoft.cognitiveservices.speech.Recognizer, param2: java.lang.Boolean);
						public constructor(param0: number, param1: boolean);
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): void;
					}
					export class SessionEventHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.SessionEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.Recognizer.SessionEventHandlerImpl>;
						public constructor();
						public constructor(param0: com.microsoft.cognitiveservices.speech.Recognizer, param1: com.microsoft.cognitiveservices.speech.Recognizer, param2: java.lang.Boolean);
						public constructor(param0: number, param1: boolean);
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class ResultReason {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.ResultReason>;
					public static NoMatch: com.microsoft.cognitiveservices.speech.ResultReason;
					public static Canceled: com.microsoft.cognitiveservices.speech.ResultReason;
					public static RecognizingSpeech: com.microsoft.cognitiveservices.speech.ResultReason;
					public static RecognizedSpeech: com.microsoft.cognitiveservices.speech.ResultReason;
					public static RecognizingIntent: com.microsoft.cognitiveservices.speech.ResultReason;
					public static RecognizedIntent: com.microsoft.cognitiveservices.speech.ResultReason;
					public static TranslatingSpeech: com.microsoft.cognitiveservices.speech.ResultReason;
					public static TranslatedSpeech: com.microsoft.cognitiveservices.speech.ResultReason;
					public static SynthesizingAudio: com.microsoft.cognitiveservices.speech.ResultReason;
					public static SynthesizingAudioCompleted: com.microsoft.cognitiveservices.speech.ResultReason;
					public static RecognizingKeyword: com.microsoft.cognitiveservices.speech.ResultReason;
					public static RecognizedKeyword: com.microsoft.cognitiveservices.speech.ResultReason;
					public static SynthesizingAudioStarted: com.microsoft.cognitiveservices.speech.ResultReason;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.ResultReason;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.ResultReason>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class ServicePropertyChannel {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.ServicePropertyChannel>;
					public static UriQueryParameter: com.microsoft.cognitiveservices.speech.ServicePropertyChannel;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.ServicePropertyChannel;
					public getValue(): com.microsoft.cognitiveservices.speech.internal.ServicePropertyChannel;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.ServicePropertyChannel>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SessionEventArgs {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SessionEventArgs>;
					public toString(): string;
					public getSessionId(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs);
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SourceLanguageConfig {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SourceLanguageConfig>;
					public static fromLanguage(param0: string, param1: string): com.microsoft.cognitiveservices.speech.SourceLanguageConfig;
					public static fromLanguage(param0: string): com.microsoft.cognitiveservices.speech.SourceLanguageConfig;
					public close(): void;
					public getImpl(): com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechConfig {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechConfig>;
					public static fromSubscription(param0: string, param1: string): com.microsoft.cognitiveservices.speech.SpeechConfig;
					public getSpeechSynthesisVoiceName(): string;
					public setServiceProperty(param0: string, param1: string, param2: com.microsoft.cognitiveservices.speech.ServicePropertyChannel): void;
					public static fromEndpoint(param0: java.net.URI): com.microsoft.cognitiveservices.speech.SpeechConfig;
					public setProperty(param0: com.microsoft.cognitiveservices.speech.PropertyId, param1: string): void;
					public static fromEndpoint(param0: java.net.URI, param1: string): com.microsoft.cognitiveservices.speech.SpeechConfig;
					public setSpeechSynthesisVoiceName(param0: string): void;
					public static fromAuthorizationToken(param0: string, param1: string): com.microsoft.cognitiveservices.speech.SpeechConfig;
					public setAuthorizationToken(param0: string): void;
					public setProxy(param0: string, param1: number, param2: string, param3: string): void;
					public setSpeechSynthesisLanguage(param0: string): void;
					public close(): void;
					public getSpeechRecognitionLanguage(): string;
					public static fromHost(param0: java.net.URI, param1: string): com.microsoft.cognitiveservices.speech.SpeechConfig;
					public setOutputFormat(param0: com.microsoft.cognitiveservices.speech.OutputFormat): void;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig);
					public getEndpointId(): string;
					public setProperty(param0: string, param1: string): void;
					public enableDictation(): void;
					public static fromHost(param0: java.net.URI): com.microsoft.cognitiveservices.speech.SpeechConfig;
					public getSpeechSynthesisLanguage(): string;
					public getImpl(): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
					public enableAudioLogging(): void;
					public requestWordLevelTimestamps(): void;
					public setEndpointId(param0: string): void;
					public getProperty(param0: com.microsoft.cognitiveservices.speech.PropertyId): string;
					public getOutputFormat(): com.microsoft.cognitiveservices.speech.OutputFormat;
					public setSpeechRecognitionLanguage(param0: string): void;
					public setProfanity(param0: com.microsoft.cognitiveservices.speech.ProfanityOption): void;
					public setSpeechSynthesisOutputFormat(param0: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat): void;
					public getProperty(param0: string): string;
					public getAuthorizationToken(): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechRecognitionCanceledEventArgs extends com.microsoft.cognitiveservices.speech.SpeechRecognitionEventArgs {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechRecognitionCanceledEventArgs>;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs);
					public toString(): string;
					public getReason(): com.microsoft.cognitiveservices.speech.CancellationReason;
					public getErrorDetails(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs);
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventArgs);
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs);
					public getErrorCode(): com.microsoft.cognitiveservices.speech.CancellationErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechRecognitionEventArgs extends com.microsoft.cognitiveservices.speech.RecognitionEventArgs {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechRecognitionEventArgs>;
					public getResult(): com.microsoft.cognitiveservices.speech.SpeechRecognitionResult;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs);
					public toString(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs);
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs);
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechRecognitionResult extends com.microsoft.cognitiveservices.speech.RecognitionResult {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechRecognitionResult>;
					public toString(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult);
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechRecognizer extends com.microsoft.cognitiveservices.speech.Recognizer {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechRecognizer>;
					public recognizing: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechRecognitionEventArgs>;
					public recognized: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechRecognitionEventArgs>;
					public canceled: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechRecognitionCanceledEventArgs>;
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: string);
					public startContinuousRecognitionAsync(): java.util.concurrent.Future<java.lang.Void>;
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.SourceLanguageConfig, param2: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
					public getEndpointId(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: string, param2: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
					public getRecoImpl(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer;
					public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig);
					public recognizeOnceAsync(): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.SpeechRecognitionResult>;
					public startKeywordRecognitionAsync(param0: com.microsoft.cognitiveservices.speech.KeywordRecognitionModel): java.util.concurrent.Future<java.lang.Void>;
					public constructor(param0: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.SourceLanguageConfig);
					public dispose(param0: boolean): void;
					public stopKeywordRecognitionAsync(): java.util.concurrent.Future<java.lang.Void>;
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.AutoDetectSourceLanguageConfig);
					public setAuthorizationToken(param0: string): void;
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
					public getOutputFormat(): com.microsoft.cognitiveservices.speech.OutputFormat;
					public stopContinuousRecognitionAsync(): java.util.concurrent.Future<java.lang.Void>;
					public getSpeechRecognitionLanguage(): string;
					public getAuthorizationToken(): string;
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.AutoDetectSourceLanguageConfig, param2: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
				}
				export module SpeechRecognizer {
					export class CanceledHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechRecognizer.CanceledHandlerImpl>;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventArgs): void;
					}
					export class PrivatePropertyCollection extends com.microsoft.cognitiveservices.speech.PropertyCollection {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechRecognizer.PrivatePropertyCollection>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechRecognizer, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
					}
					export class ResultHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechRecognizer.ResultHandlerImpl>;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechSynthesisCancellationDetails {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechSynthesisCancellationDetails>;
					public toString(): string;
					public getReason(): com.microsoft.cognitiveservices.speech.CancellationReason;
					public getErrorDetails(): string;
					public static fromResult(param0: com.microsoft.cognitiveservices.speech.SpeechSynthesisResult): com.microsoft.cognitiveservices.speech.SpeechSynthesisCancellationDetails;
					public close(): void;
					public static fromStream(param0: com.microsoft.cognitiveservices.speech.AudioDataStream): com.microsoft.cognitiveservices.speech.SpeechSynthesisCancellationDetails;
					public getErrorCode(): com.microsoft.cognitiveservices.speech.CancellationErrorCode;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechSynthesisEventArgs {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechSynthesisEventArgs>;
					public getResult(): com.microsoft.cognitiveservices.speech.SpeechSynthesisResult;
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechSynthesisOutputFormat {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat>;
					public static Raw8Khz8BitMonoMULaw: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Riff16Khz16KbpsMonoSiren: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Audio16Khz16KbpsMonoSiren: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Audio16Khz32KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Audio16Khz128KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Audio16Khz64KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Audio24Khz48KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Audio24Khz96KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Audio24Khz160KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Raw16Khz16BitMonoTrueSilk: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Riff16Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Riff8Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Riff24Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Riff8Khz8BitMonoMULaw: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Raw16Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Raw24Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static Raw8Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat>;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.SpeechSynthesisOutputFormat;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechSynthesisResult {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechSynthesisResult>;
					public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult);
					public getReason(): com.microsoft.cognitiveservices.speech.ResultReason;
					public getResultImpl(): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult;
					public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
					public close(): void;
					public getAudioLength(): number;
					public getAudioData(): native.Array<number>;
					public getResultId(): string;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechSynthesisWordBoundaryEventArgs {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechSynthesisWordBoundaryEventArgs>;
					public getWordLength(): number;
					public getTextOffset(): number;
					public getAudioOffset(): number;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class SpeechSynthesizer {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechSynthesizer>;
					public SynthesisStarted: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechSynthesisEventArgs>;
					public Synthesizing: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechSynthesisEventArgs>;
					public SynthesisCompleted: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechSynthesisEventArgs>;
					public SynthesisCanceled: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechSynthesisEventArgs>;
					public WordBoundary: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechSynthesisWordBoundaryEventArgs>;
					public StartSpeakingSsml(param0: string): com.microsoft.cognitiveservices.speech.SpeechSynthesisResult;
					public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig);
					public SpeakSsml(param0: string): com.microsoft.cognitiveservices.speech.SpeechSynthesisResult;
					public SpeakSsmlAsync(param0: string): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.SpeechSynthesisResult>;
					public StartSpeakingText(param0: string): com.microsoft.cognitiveservices.speech.SpeechSynthesisResult;
					public StartSpeakingSsmlAsync(param0: string): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.SpeechSynthesisResult>;
					public setAuthorizationToken(param0: string): void;
					public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
					public close(): void;
					public SpeakText(param0: string): com.microsoft.cognitiveservices.speech.SpeechSynthesisResult;
					public SpeakTextAsync(param0: string): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.SpeechSynthesisResult>;
					public getAuthorizationToken(): string;
					public StartSpeakingTextAsync(param0: string): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.SpeechSynthesisResult>;
				}
				export module SpeechSynthesizer {
					export class PrivatePropertyCollection extends com.microsoft.cognitiveservices.speech.PropertyCollection {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechSynthesizer.PrivatePropertyCollection>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechSynthesizer, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
					}
					export class ResultHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechSynthesizer.ResultHandlerImpl>;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventArgs): void;
					}
					export class WordBoundaryHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.SpeechSynthesizer.WordBoundaryHandlerImpl>;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export class StreamStatus {
					public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.StreamStatus>;
					public static Unknown: com.microsoft.cognitiveservices.speech.StreamStatus;
					public static NoData: com.microsoft.cognitiveservices.speech.StreamStatus;
					public static PartialData: com.microsoft.cognitiveservices.speech.StreamStatus;
					public static AllData: com.microsoft.cognitiveservices.speech.StreamStatus;
					public static Canceled: com.microsoft.cognitiveservices.speech.StreamStatus;
					public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.StreamStatus;
					public static values(): native.Array<com.microsoft.cognitiveservices.speech.StreamStatus>;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export class AudioConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.AudioConfig>;
						public static fromStreamInput(param0: com.microsoft.cognitiveservices.speech.audio.PullAudioInputStreamCallback): com.microsoft.cognitiveservices.speech.audio.AudioConfig;
						public close(): void;
						public static fromMicrophoneInput(param0: string): com.microsoft.cognitiveservices.speech.audio.AudioConfig;
						public static fromDefaultSpeakerOutput(): com.microsoft.cognitiveservices.speech.audio.AudioConfig;
						public static fromStreamOutput(param0: com.microsoft.cognitiveservices.speech.audio.AudioOutputStream): com.microsoft.cognitiveservices.speech.audio.AudioConfig;
						public static fromWavFileOutput(param0: string): com.microsoft.cognitiveservices.speech.audio.AudioConfig;
						public static fromDefaultMicrophoneInput(): com.microsoft.cognitiveservices.speech.audio.AudioConfig;
						public static fromStreamInput(param0: com.microsoft.cognitiveservices.speech.audio.AudioInputStream): com.microsoft.cognitiveservices.speech.audio.AudioConfig;
						public getConfigImpl(): com.microsoft.cognitiveservices.speech.internal.AudioConfig;
						public static fromWavFileInput(param0: string): com.microsoft.cognitiveservices.speech.audio.AudioConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export class AudioInputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.AudioInputStream>;
						public _streamImpl: com.microsoft.cognitiveservices.speech.internal.AudioInputStream;
						public static createPullStream(param0: com.microsoft.cognitiveservices.speech.audio.PullAudioInputStreamCallback, param1: com.microsoft.cognitiveservices.speech.audio.AudioStreamFormat): com.microsoft.cognitiveservices.speech.audio.PullAudioInputStream;
						public getStreamImpl(): com.microsoft.cognitiveservices.speech.internal.AudioInputStream;
						public static createPushStream(): com.microsoft.cognitiveservices.speech.audio.PushAudioInputStream;
						public close(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.AudioInputStream);
						public static createPushStream(param0: com.microsoft.cognitiveservices.speech.audio.AudioStreamFormat): com.microsoft.cognitiveservices.speech.audio.PushAudioInputStream;
						public static createPullStream(param0: com.microsoft.cognitiveservices.speech.audio.PullAudioInputStreamCallback): com.microsoft.cognitiveservices.speech.audio.PullAudioInputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export class AudioOutputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.AudioOutputStream>;
						public _streamImpl: com.microsoft.cognitiveservices.speech.internal.AudioOutputStream;
						public static createPullStream(): com.microsoft.cognitiveservices.speech.audio.PullAudioOutputStream;
						public close(): void;
						public static createPushStream(param0: com.microsoft.cognitiveservices.speech.audio.PushAudioOutputStreamCallback): com.microsoft.cognitiveservices.speech.audio.PushAudioOutputStream;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.AudioOutputStream);
						public getStreamImpl(): com.microsoft.cognitiveservices.speech.internal.AudioOutputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export class AudioStreamContainerFormat {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat>;
						public static OGG_OPUS: com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat;
						public static MP3: com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat;
						public static FLAC: com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat;
						public static ALAW: com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat;
						public static MULAW: com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat;
						public static AMRNB: com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat;
						public static AMRWB: com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat;
						public static values(): native.Array<com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat>;
						public getValue(): com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat;
						public static valueOf(param0: string): com.microsoft.cognitiveservices.speech.audio.AudioStreamContainerFormat;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export class AudioStreamFormat {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.AudioStreamFormat>;
						public static getWaveFormatPCM(param0: number, param1: number, param2: number): com.microsoft.cognitiveservices.speech.audio.AudioStreamFormat;
						public static getCompressedFormat(param0: com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat): com.microsoft.cognitiveservices.speech.audio.AudioStreamFormat;
						public close(): void;
						public static getDefaultInputFormat(): com.microsoft.cognitiveservices.speech.audio.AudioStreamFormat;
						public getFormatImpl(): com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export class PullAudioInputStream extends com.microsoft.cognitiveservices.speech.audio.AudioInputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.PullAudioInputStream>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStream, param1: com.microsoft.cognitiveservices.speech.audio.PullAudioInputStreamCallback);
						public close(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.AudioInputStream);
						public static create(param0: com.microsoft.cognitiveservices.speech.audio.PullAudioInputStreamCallback): com.microsoft.cognitiveservices.speech.audio.PullAudioInputStream;
						public static create(param0: com.microsoft.cognitiveservices.speech.audio.PullAudioInputStreamCallback, param1: com.microsoft.cognitiveservices.speech.audio.AudioStreamFormat): com.microsoft.cognitiveservices.speech.audio.PullAudioInputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export abstract class PullAudioInputStreamCallback {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.PullAudioInputStreamCallback>;
						public constructor();
						public read(param0: native.Array<number>): number;
						public close(): void;
						public getProperty(param0: com.microsoft.cognitiveservices.speech.PropertyId): string;
						public getAdapter(): com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback;
					}
					export module PullAudioInputStreamCallback {
						export class PullAudioInputStreamCallbackAdapter extends com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.PullAudioInputStreamCallback.PullAudioInputStreamCallbackAdapter>;
							public Read(param0: native.Array<number>): number;
							public GetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId): string;
							public Close(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export class PullAudioOutputStream extends com.microsoft.cognitiveservices.speech.audio.AudioOutputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.PullAudioOutputStream>;
						public read(param0: native.Array<number>): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioOutputStream);
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.AudioOutputStream);
						public static create(): com.microsoft.cognitiveservices.speech.audio.PullAudioOutputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export class PushAudioInputStream extends com.microsoft.cognitiveservices.speech.audio.AudioInputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.PushAudioInputStream>;
						public static create(): com.microsoft.cognitiveservices.speech.audio.PushAudioInputStream;
						public close(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.AudioInputStream);
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream);
						public write(param0: native.Array<number>): void;
						public static create(param0: com.microsoft.cognitiveservices.speech.audio.AudioStreamFormat): com.microsoft.cognitiveservices.speech.audio.PushAudioInputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export class PushAudioOutputStream extends com.microsoft.cognitiveservices.speech.audio.AudioOutputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.PushAudioOutputStream>;
						public static create(param0: com.microsoft.cognitiveservices.speech.audio.PushAudioOutputStreamCallback): com.microsoft.cognitiveservices.speech.audio.PushAudioOutputStream;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStream, param1: com.microsoft.cognitiveservices.speech.audio.PushAudioOutputStreamCallback);
						public close(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.AudioOutputStream);
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module audio {
					export abstract class PushAudioOutputStreamCallback {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.PushAudioOutputStreamCallback>;
						public write(param0: native.Array<number>): number;
						public constructor();
						public close(): void;
						public getAdapter(): com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback;
					}
					export module PushAudioOutputStreamCallback {
						export class PushAudioOutputStreamCallbackAdapter extends com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.audio.PushAudioOutputStreamCallback.PushAudioOutputStreamCallbackAdapter>;
							public Write(param0: native.Array<number>): number;
							public Close(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module dialog {
					export class ActivityReceivedEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.ActivityReceivedEventArgs>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventArgs);
						public hasAudio(): boolean;
						public getAudio(): com.microsoft.cognitiveservices.speech.audio.PullAudioOutputStream;
						public getActivity(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module dialog {
					export class BotFrameworkConfig extends com.microsoft.cognitiveservices.speech.dialog.DialogServiceConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.BotFrameworkConfig>;
						public static fromSubscription(param0: string, param1: string): com.microsoft.cognitiveservices.speech.dialog.BotFrameworkConfig;
						public static fromAuthorizationToken(param0: string, param1: string): com.microsoft.cognitiveservices.speech.dialog.BotFrameworkConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module dialog {
					export class CustomCommandsConfig extends com.microsoft.cognitiveservices.speech.dialog.DialogServiceConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.CustomCommandsConfig>;
						public getApplicationId(): string;
						public static fromSubscription(param0: string, param1: string, param2: string): com.microsoft.cognitiveservices.speech.dialog.CustomCommandsConfig;
						public static fromAuthorizationToken(param0: string, param1: string, param2: string): com.microsoft.cognitiveservices.speech.dialog.CustomCommandsConfig;
						public setApplicationId(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module dialog {
					export abstract class DialogServiceConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.DialogServiceConfig>;
						public setServiceProperty(param0: string, param1: string, param2: com.microsoft.cognitiveservices.speech.ServicePropertyChannel): void;
						public setLanguage(param0: string): void;
						public getConfigImpl(): com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig;
						public close(): void;
						public getProperty(param0: com.microsoft.cognitiveservices.speech.PropertyId): string;
						public setProperty(param0: com.microsoft.cognitiveservices.speech.PropertyId, param1: string): void;
						public setProxy(param0: string, param1: number, param2: string, param3: string): void;
						public setProperty(param0: string, param1: string): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig);
						public getProperty(param0: string): string;
						public getLanguage(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module dialog {
					export class DialogServiceConnector {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.DialogServiceConnector>;
						public backgroundAttempts: java.lang.Integer;
						public recognizing: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechRecognitionEventArgs>;
						public recognized: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechRecognitionEventArgs>;
						public sessionStarted: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SessionEventArgs>;
						public sessionStopped: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SessionEventArgs>;
						public canceled: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.SpeechRecognitionCanceledEventArgs>;
						public activityReceived: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.dialog.ActivityReceivedEventArgs>;
						public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
						public connectAsync(): java.util.concurrent.Future<java.lang.Void>;
						public close(): void;
						public setAuthorizationToken(param0: string): void;
						public getAuthorizationToken(): string;
						public sendActivityAsync(param0: string): java.util.concurrent.Future<string>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.dialog.DialogServiceConfig, param1: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
						public dispose(param0: boolean): void;
						public stopKeywordRecognitionAsync(): java.util.concurrent.Future<java.lang.Void>;
						public disconnectAsync(): java.util.concurrent.Future<java.lang.Void>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.dialog.DialogServiceConfig);
						public startKeywordRecognitionAsync(param0: com.microsoft.cognitiveservices.speech.KeywordRecognitionModel): java.util.concurrent.Future<java.lang.Void>;
						public listenOnceAsync(): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.SpeechRecognitionResult>;
					}
					export module DialogServiceConnector {
						export class ActivityReceivedEventHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.DialogServiceConnector.ActivityReceivedEventHandlerImpl>;
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventArgs): void;
						}
						export class CanceledEventHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.DialogServiceConnector.CanceledEventHandlerImpl>;
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventArgs): void;
						}
						export class DialogSpeechRecognitionResult extends com.microsoft.cognitiveservices.speech.SpeechRecognitionResult {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.DialogServiceConnector.DialogSpeechRecognitionResult>;
						}
						export class PrivatePropertyCollection extends com.microsoft.cognitiveservices.speech.PropertyCollection {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.DialogServiceConnector.PrivatePropertyCollection>;
							public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
							public constructor(param0: com.microsoft.cognitiveservices.speech.dialog.DialogServiceConnector, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
						}
						export class RecoEventHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.DialogServiceConnector.RecoEventHandlerImpl>;
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs): void;
						}
						export class SessionEventHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.SessionEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.dialog.DialogServiceConnector.SessionEventHandlerImpl>;
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module intent {
					export class IntentRecognitionCanceledEventArgs extends com.microsoft.cognitiveservices.speech.intent.IntentRecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.intent.IntentRecognitionCanceledEventArgs>;
						public getReason(): com.microsoft.cognitiveservices.speech.CancellationReason;
						public getErrorDetails(): string;
						public toString(): string;
						public getErrorCode(): com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module intent {
					export class IntentRecognitionEventArgs extends com.microsoft.cognitiveservices.speech.RecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.intent.IntentRecognitionEventArgs>;
						public getResult(): com.microsoft.cognitiveservices.speech.intent.IntentRecognitionResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module intent {
					export class IntentRecognitionResult extends com.microsoft.cognitiveservices.speech.SpeechRecognitionResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.intent.IntentRecognitionResult>;
						public close(): void;
						public getIntentId(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module intent {
					export class IntentRecognizer extends com.microsoft.cognitiveservices.speech.Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.intent.IntentRecognizer>;
						public recognizing: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.intent.IntentRecognitionEventArgs>;
						public recognized: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.intent.IntentRecognitionEventArgs>;
						public canceled: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.intent.IntentRecognitionCanceledEventArgs>;
						public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
						public getRecoImpl(): com.microsoft.cognitiveservices.speech.internal.IntentRecognizer;
						public addIntent(param0: string, param1: string): void;
						public setAuthorizationToken(param0: string): void;
						public recognizeOnceAsync(): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.intent.IntentRecognitionResult>;
						public addIntent(param0: com.microsoft.cognitiveservices.speech.intent.LanguageUnderstandingModel, param1: string): void;
						public getAuthorizationToken(): string;
						public dispose(param0: boolean): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig);
						public stopKeywordRecognitionAsync(): java.util.concurrent.Future<java.lang.Void>;
						public addIntent(param0: com.microsoft.cognitiveservices.speech.intent.LanguageUnderstandingModel, param1: string, param2: string): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
						public addAllIntents(param0: com.microsoft.cognitiveservices.speech.intent.LanguageUnderstandingModel): void;
						public getSpeechRecognitionLanguage(): string;
						public constructor(param0: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
						public addIntent(param0: string): void;
						public stopContinuousRecognitionAsync(): java.util.concurrent.Future<java.lang.Void>;
						public addAllIntents(param0: com.microsoft.cognitiveservices.speech.intent.LanguageUnderstandingModel, param1: string): void;
						public startKeywordRecognitionAsync(param0: com.microsoft.cognitiveservices.speech.KeywordRecognitionModel): java.util.concurrent.Future<java.lang.Void>;
						public startContinuousRecognitionAsync(): java.util.concurrent.Future<java.lang.Void>;
					}
					export module IntentRecognizer {
						export class CanceledHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.intent.IntentRecognizer.CanceledHandlerImpl>;
							public constructor();
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionCanceledEventArgs): void;
							public constructor(param0: number, param1: boolean);
							public constructor(param0: com.microsoft.cognitiveservices.speech.intent.IntentRecognizer, param1: com.microsoft.cognitiveservices.speech.intent.IntentRecognizer);
						}
						export class IntentHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.IntentEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.intent.IntentRecognizer.IntentHandlerImpl>;
							public constructor();
							public constructor(param0: number, param1: boolean);
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionEventArgs): void;
							public constructor(param0: com.microsoft.cognitiveservices.speech.intent.IntentRecognizer, param1: com.microsoft.cognitiveservices.speech.intent.IntentRecognizer, param2: boolean);
						}
						export class PrivatePropertyCollection extends com.microsoft.cognitiveservices.speech.PropertyCollection {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.intent.IntentRecognizer.PrivatePropertyCollection>;
							public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
							public constructor(param0: com.microsoft.cognitiveservices.speech.intent.IntentRecognizer, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module intent {
					export class LanguageUnderstandingModel {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.intent.LanguageUnderstandingModel>;
						public static fromSubscription(param0: string, param1: string, param2: string): com.microsoft.cognitiveservices.speech.intent.LanguageUnderstandingModel;
						public static fromAppId(param0: string): com.microsoft.cognitiveservices.speech.intent.LanguageUnderstandingModel;
						public getModelImpl(): com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel;
						public static fromEndpoint(param0: string): com.microsoft.cognitiveservices.speech.intent.LanguageUnderstandingModel;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ActivityReceivedEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventArgs>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public HasAudio(): boolean;
						public GetActivity(): string;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventArgs): number;
						public finalize(): void;
						public GetAudio(): com.microsoft.cognitiveservices.speech.internal.PullAudioOutputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ActivityReceivedEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventArgs): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener): number;
						public swigTakeOwnership(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ActivityReceivedEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventSignal): number;
						public delete(): void;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener): void;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class AudioConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.AudioConfig>;
						public GetProperty(param0: string): string;
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public finalize(): void;
						public GetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId): string;
						public static FromWavFileOutput(param0: string): com.microsoft.cognitiveservices.speech.internal.AudioConfig;
						public SetProperty(param0: string, param1: string): void;
						public constructor(param0: number, param1: boolean);
						public static FromDefaultMicrophoneInput(): com.microsoft.cognitiveservices.speech.internal.AudioConfig;
						public static FromStreamOutput(param0: com.microsoft.cognitiveservices.speech.internal.AudioOutputStream): com.microsoft.cognitiveservices.speech.internal.AudioConfig;
						public static FromStreamInput(param0: com.microsoft.cognitiveservices.speech.internal.AudioInputStream): com.microsoft.cognitiveservices.speech.internal.AudioConfig;
						public static FromWavFileInput(param0: string): com.microsoft.cognitiveservices.speech.internal.AudioConfig;
						public static FromMicrophoneInput(param0: string): com.microsoft.cognitiveservices.speech.internal.AudioConfig;
						public SetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId, param1: string): void;
						public static FromDefaultSpeakerOutput(): com.microsoft.cognitiveservices.speech.internal.AudioConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class AudioDataStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.AudioDataStream>;
						public ReadData(param0: number, param1: native.Array<number>): number;
						public SaveToWavFile(param0: string): void;
						public delete(): void;
						public ReadData(param0: native.Array<number>): number;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public GetPosition(): number;
						public finalize(): void;
						public SetPosition(param0: number): void;
						public constructor(param0: number, param1: boolean);
						public CanReadData(param0: number): boolean;
						public static FromResult(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): com.microsoft.cognitiveservices.speech.internal.AudioDataStream;
						public CanReadData(param0: number, param1: number): boolean;
						public GetStatus(): com.microsoft.cognitiveservices.speech.internal.StreamStatus;
						public SaveToWavFileAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AudioDataStream): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class AudioInputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.AudioInputStream>;
						public static CreatePullStream(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): com.microsoft.cognitiveservices.speech.internal.PullAudioInputStream;
						public static CreatePushStream(param0: com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat): com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static CreatePushStream(): com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream;
						public static CreatePullStream(param0: com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat, param1: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): com.microsoft.cognitiveservices.speech.internal.PullAudioInputStream;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AudioInputStream): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class AudioOutputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.AudioOutputStream>;
						public static CreatePushStream(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback): com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStream;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static CreatePullStream(): com.microsoft.cognitiveservices.speech.internal.PullAudioOutputStream;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AudioOutputStream): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class AudioStreamContainerFormat {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat>;
						public static OGG_OPUS: com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat;
						public static MP3: com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat;
						public static FLAC: com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat;
						public static ALAW: com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat;
						public static MULAW: com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat;
						public static AMRNB: com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat;
						public static AMRWB: com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat;
						public swigValue(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class AudioStreamFormat {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat>;
						public static GetWaveFormatPCM(param0: number, param1: number, param2: number): com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat): number;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static GetCompressedFormat(param0: com.microsoft.cognitiveservices.speech.internal.AudioStreamContainerFormat): com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat;
						public static GetWaveFormatPCM(param0: number, param1: number): com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat;
						public static GetDefaultOutputFormat(): com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat;
						public static GetWaveFormatPCM(param0: number): com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat;
						public finalize(): void;
						public static GetDefaultInputFormat(): com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class AutoDetectSourceLanguageConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageConfig>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageConfig): number;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static FromSourceLanguageConfigs(param0: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector): com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageConfig;
						public static FromLanguages(param0: com.microsoft.cognitiveservices.speech.internal.StringVector): com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageConfig;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class AutoDetectSourceLanguageResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageResult>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageResult): number;
						public static FromResult(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResult): com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageResult;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getLanguage(): string;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class BaseAsyncRecognizer extends com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.BaseAsyncRecognizer>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.BaseAsyncRecognizer): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class BaseRecognizerBase extends com.microsoft.cognitiveservices.speech.internal.Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase>;
						public getSessionStopped(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public getSpeechEndDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getSessionStarted(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public getRecognizing(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase): number;
						public getSpeechStartDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public getCanceled(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public getRecognized(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class BotFrameworkConfig extends com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.BotFrameworkConfig>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static FromSubscription(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.BotFrameworkConfig;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.BotFrameworkConfig): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig): number;
						public static FromAuthorizationToken(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.BotFrameworkConfig;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class CancellationDetails {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.CancellationDetails>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.CancellationDetails): number;
						public getReason(): com.microsoft.cognitiveservices.speech.internal.CancellationReason;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getErrorDetails(): string;
						public static FromResult(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): com.microsoft.cognitiveservices.speech.internal.CancellationDetails;
						public getErrorCode(): com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class CancellationErrorCode {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode>;
						public static NoError: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static AuthenticationFailure: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static BadRequest: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static TooManyRequests: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static Forbidden: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static ConnectionFailure: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static ServiceTimeout: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static ServiceError: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static ServiceUnavailable: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static RuntimeError: com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public swigValue(): number;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class CancellationReason {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.CancellationReason>;
						public static Error: com.microsoft.cognitiveservices.speech.internal.CancellationReason;
						public static EndOfStream: com.microsoft.cognitiveservices.speech.internal.CancellationReason;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.CancellationReason;
						public swigValue(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ClassLanguageModel extends com.microsoft.cognitiveservices.speech.internal.Grammar {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ClassLanguageModel>;
						public static FromStorageId(param0: string): com.microsoft.cognitiveservices.speech.internal.ClassLanguageModel;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Grammar): number;
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXGRAMMARHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ClassLanguageModel): number;
						public static FromStorageId(param0: string): com.microsoft.cognitiveservices.speech.internal.Grammar;
						public AssignClass(param0: string, param1: com.microsoft.cognitiveservices.speech.internal.Grammar): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class Connection {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.Connection>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public SetMessageProperty(param0: string, param1: string, param2: string): void;
						public getConnected(): com.microsoft.cognitiveservices.speech.internal.ConnectionEventSignal;
						public static FromRecognizer(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): com.microsoft.cognitiveservices.speech.internal.Connection;
						public SendMessageAsync(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXCONNECTIONHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Connection): number;
						public Close(): void;
						public finalize(): void;
						public Open(param0: boolean): void;
						public getDisconnected(): com.microsoft.cognitiveservices.speech.internal.ConnectionEventSignal;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConnectionEventArgs extends com.microsoft.cognitiveservices.speech.internal.SessionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConnectionEventArgs>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventArgs): number;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConnectionEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener): number;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventArgs): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConnectionEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConnectionEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener): void;
						public IsConnected(): boolean;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventSignal): number;
						public DisconnectAll(): void;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class Conversation {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.Conversation>;
						public static MAX_CONVERSATION_ID_LEN: number;
						public GetAuthorizationToken(): string;
						public UnmuteAllParticipantsAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXCONVERSATIONHANDLE);
						public UnlockConversationAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public EndConversationAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public RemoveParticipantAsync(param0: com.microsoft.cognitiveservices.speech.internal.Participant): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public GetConversationId(): string;
						public finalize(): void;
						public constructor(param0: number, param1: boolean);
						public SetAuthorizationToken(param0: string): void;
						public StartConversationAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public static CreateConversationAsync(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: string): com.microsoft.cognitiveservices.speech.internal.ConversationPtrFuture;
						public AddParticipantAsync(param0: com.microsoft.cognitiveservices.speech.internal.Participant): com.microsoft.cognitiveservices.speech.internal.ParticipantPtrFuture;
						public RemoveParticipantAsync(param0: com.microsoft.cognitiveservices.speech.internal.User): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public DeleteConversationAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public AddParticipantAsync(param0: com.microsoft.cognitiveservices.speech.internal.User): com.microsoft.cognitiveservices.speech.internal.UserPtrFuture;
						public RemoveParticipantAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public MuteParticipantAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public AddParticipantAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.ParticipantPtrFuture;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public LockConversationAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public UnmuteParticipantAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public MuteAllParticipantsAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationPtrFuture {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationPtrFuture>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public Get(): com.microsoft.cognitiveservices.speech.internal.Conversation;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationPtrFuture): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationTranscriber extends com.microsoft.cognitiveservices.speech.internal.Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber>;
						public getSessionStopped(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public GetAuthorizationToken(): string;
						public getSpeechEndDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public StartTranscribingAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public delete(): void;
						public StopTranscribingAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public static FromConfig(): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public JoinConversationAsync(param0: com.microsoft.cognitiveservices.speech.internal.Conversation): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public getCanceled(): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public finalize(): void;
						public getTranscribed(): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal;
						public constructor(param0: number, param1: boolean);
						public getSessionStarted(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public SetAuthorizationToken(param0: string): void;
						public LeaveConversationAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public getSpeechStartDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.AudioConfig): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRECOHANDLE);
						public getTranscribing(): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationTranscriberCanceledEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionCanceledEventArgs): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener): number;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationTranscriberCanceledEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventSignal>;
						public swigCMemOwn: boolean;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener): void;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener): void;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventSignal): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationTranscriberEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener): number;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionEventArgs): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationTranscriberEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener): void;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal): number;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationTranscriberRecognizerBase extends com.microsoft.cognitiveservices.speech.internal.Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberRecognizerBase>;
						public getSessionStopped(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public getSpeechEndDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getSessionStarted(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public getSpeechStartDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public getRecognizing(): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal;
						public getRecognized(): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal;
						public getCanceled(): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberRecognizerBase): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationTranscriptionCanceledEventArgs extends com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionCanceledEventArgs>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionEventArgs): number;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public GetCancellationDetails(): com.microsoft.cognitiveservices.speech.internal.CancellationDetails;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionCanceledEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationTranscriptionEventArgs extends com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionEventArgs>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionEventArgs): number;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public GetResult(): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionResult;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ConversationTranscriptionResult extends com.microsoft.cognitiveservices.speech.internal.RecognitionResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionResult>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionResult): number;
						public getUserId(): string;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRESULTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class CustomCommandsConfig extends com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.CustomCommandsConfig>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.CustomCommandsConfig): number;
						public GetApplicationId(): string;
						public static FromAuthorizationToken(param0: string, param1: string, param2: string): com.microsoft.cognitiveservices.speech.internal.CustomCommandsConfig;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig): number;
						public SetApplicationId(param0: string): void;
						public static FromSubscription(param0: string, param1: string, param2: string): com.microsoft.cognitiveservices.speech.internal.CustomCommandsConfig;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class DialogServiceConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig>;
						public GetProperty(param0: string): string;
						public delete(): void;
						public SetProxy(param0: string, param1: number): void;
						public SetProxy(param0: string, param1: number, param2: string, param3: string): void;
						public finalize(): void;
						public GetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId): string;
						public SetProperty(param0: string, param1: string): void;
						public constructor(param0: number, param1: boolean);
						public GetLanguage(): string;
						public SetServiceProperty(param0: string, param1: string, param2: com.microsoft.cognitiveservices.speech.internal.ServicePropertyChannel): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig): number;
						public SetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId, param1: string): void;
						public SetLanguage(param0: string): void;
						public SetProxy(param0: string, param1: number, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class DialogServiceConnector {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector>;
						public GetAuthorizationToken(): string;
						public getSessionStopped(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public delete(): void;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig): com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public ConnectAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public getRecognized(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal;
						public StopKeywordRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public finalize(): void;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig): com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector;
						public constructor(param0: number, param1: boolean);
						public SetAuthorizationToken(param0: string): void;
						public getSessionStarted(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public getActivityReceived(): com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventSignal;
						public ListenOnceAsync(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResultPtrFuture;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public SendActivityAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.StringFuture;
						public DisconnectAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public getRecognizing(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal;
						public StartKeywordRecognitionAsync(param0: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public getCanceled(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventSignal;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class EventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.EventArgs>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class Grammar {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.Grammar>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Grammar): number;
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXGRAMMARHANDLE);
						public static FromStorageId(param0: string): com.microsoft.cognitiveservices.speech.internal.Grammar;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class GrammarList extends com.microsoft.cognitiveservices.speech.internal.Grammar {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.GrammarList>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Grammar): number;
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXGRAMMARHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.GrammarList): number;
						public static FromRecognizer(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): com.microsoft.cognitiveservices.speech.internal.GrammarList;
						public Add(param0: com.microsoft.cognitiveservices.speech.internal.Grammar): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentCanceledEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionCanceledEventArgs): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentCanceledEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventSignal>;
						public swigCMemOwn: boolean;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener): void;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener): void;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventSignal): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentEventListener>;
						public swigCMemOwn: boolean;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentEventListener): number;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionEventArgs): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.IntentEventListener): void;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.IntentEventListener): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentEventSignal): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentRecognitionCanceledEventArgs extends com.microsoft.cognitiveservices.speech.internal.IntentRecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentRecognitionCanceledEventArgs>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public GetCancellationDetails(): com.microsoft.cognitiveservices.speech.internal.CancellationDetails;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionCanceledEventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentRecognitionEventArgs extends com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentRecognitionEventArgs>;
						public GetResult(): com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResult;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentRecognitionResult extends com.microsoft.cognitiveservices.speech.internal.RecognitionResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResult>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRESULTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResult): number;
						public getIntentId(): string;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentRecognitionResultPtrFuture {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResultPtrFuture>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public Get(): com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResult;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResultPtrFuture): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentRecognizer extends com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentRecognizer>;
						public GetAuthorizationToken(): string;
						public RecognizeOnceAsync(): com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResultPtrFuture;
						public delete(): void;
						public StopContinuousRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public AddIntent(param0: string): void;
						public Recognize(): com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResult;
						public finalize(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): number;
						public StartKeywordRecognition(param0: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): void;
						public constructor(param0: number, param1: boolean);
						public SetAuthorizationToken(param0: string): void;
						public AddAllIntents(param0: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel): void;
						public StartContinuousRecognition(): void;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): com.microsoft.cognitiveservices.speech.internal.IntentRecognizer;
						public AddIntent(param0: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel, param1: string): void;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase): number;
						public StopKeywordRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public AddIntent(param0: com.microsoft.cognitiveservices.speech.internal.IntentTrigger, param1: string): void;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig): com.microsoft.cognitiveservices.speech.internal.IntentRecognizer;
						public AddIntent(param0: string, param1: string): void;
						public AddIntent(param0: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel, param1: string, param2: string): void;
						public AddAllIntents(param0: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel, param1: string): void;
						public StartContinuousRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public StopKeywordRecognition(): void;
						public StartKeywordRecognitionAsync(param0: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRECOHANDLE);
						public StopContinuousRecognition(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentRecognizerBase extends com.microsoft.cognitiveservices.speech.internal.Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase>;
						public getSessionStopped(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public getSpeechEndDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getSessionStarted(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase): number;
						public getRecognizing(): com.microsoft.cognitiveservices.speech.internal.IntentEventSignal;
						public getCanceled(): com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventSignal;
						public getSpeechStartDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public getRecognized(): com.microsoft.cognitiveservices.speech.internal.IntentEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class IntentTrigger {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.IntentTrigger>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXTRIGGERHANDLE);
						public static From(param0: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel): com.microsoft.cognitiveservices.speech.internal.IntentTrigger;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.IntentTrigger): number;
						public static From(param0: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel, param1: string): com.microsoft.cognitiveservices.speech.internal.IntentTrigger;
						public static From(param0: string): com.microsoft.cognitiveservices.speech.internal.IntentTrigger;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class KeywordRecognitionModel {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel>;
						public static FromFile(param0: string): com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXKEYWORDHANDLE);
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class LanguageUnderstandingModel {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel>;
						public static FromEndpoint(param0: string): com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static FromAppId(param0: string): com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel;
						public static FromSubscription(param0: string, param1: string, param2: string): com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXLUMODELHANDLE);
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class NoMatchDetails {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.NoMatchDetails>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static FromResult(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): com.microsoft.cognitiveservices.speech.internal.NoMatchDetails;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.NoMatchDetails): number;
						public finalize(): void;
						public getReason(): com.microsoft.cognitiveservices.speech.internal.NoMatchReason;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class NoMatchReason {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.NoMatchReason>;
						public static NotRecognized: com.microsoft.cognitiveservices.speech.internal.NoMatchReason;
						public static InitialSilenceTimeout: com.microsoft.cognitiveservices.speech.internal.NoMatchReason;
						public static InitialBabbleTimeout: com.microsoft.cognitiveservices.speech.internal.NoMatchReason;
						public static KeywordNotRecognized: com.microsoft.cognitiveservices.speech.internal.NoMatchReason;
						public swigValue(): number;
						public toString(): string;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.NoMatchReason;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class OutputFormat {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.OutputFormat>;
						public static Simple: com.microsoft.cognitiveservices.speech.internal.OutputFormat;
						public static Detailed: com.microsoft.cognitiveservices.speech.internal.OutputFormat;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.OutputFormat;
						public swigValue(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class Participant {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.Participant>;
						public constructor();
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Participant): number;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public getIsMuted(): boolean;
						public getIsHost(): boolean;
						public static From(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.Participant;
						public SetPreferredLanguage(param0: string): void;
						public finalize(): void;
						public static From(param0: string, param1: string, param2: string): com.microsoft.cognitiveservices.speech.internal.Participant;
						public getDisplayName(): string;
						public constructor(param0: number, param1: boolean);
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXPARTICIPANTHANDLE);
						public getAvatar(): string;
						public static From(param0: string): com.microsoft.cognitiveservices.speech.internal.Participant;
						public getId(): string;
						public getIsUsingTts(): boolean;
						public SetVoiceSignature(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ParticipantPtrFuture {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ParticipantPtrFuture>;
						public swigCMemOwn: boolean;
						public Get(): com.microsoft.cognitiveservices.speech.internal.Participant;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.ParticipantPtrFuture): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class PhraseListGrammar extends com.microsoft.cognitiveservices.speech.internal.Grammar {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.PhraseListGrammar>;
						public AddPhrase(param0: string): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Grammar): number;
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXGRAMMARHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.PhraseListGrammar): number;
						public static FromRecognizer(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): com.microsoft.cognitiveservices.speech.internal.PhraseListGrammar;
						public Clear(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ProfanityOption {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ProfanityOption>;
						public static Masked: com.microsoft.cognitiveservices.speech.internal.ProfanityOption;
						public static Removed: com.microsoft.cognitiveservices.speech.internal.ProfanityOption;
						public static Raw: com.microsoft.cognitiveservices.speech.internal.ProfanityOption;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.ProfanityOption;
						public swigValue(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class PropertyCollection {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.PropertyCollection>;
						public GetProperty(param0: string, param1: string): string;
						public SetProperty(param0: string, param1: string): void;
						public GetProperty(param0: string): string;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public GetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId, param1: string): string;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection): number;
						public SetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId, param1: string): void;
						public finalize(): void;
						public GetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class PropertyId {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.PropertyId>;
						public static SpeechServiceConnection_Key: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_Endpoint: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_Region: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceAuthorization_Token: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceAuthorization_Type: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_EndpointId: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_Host: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_ProxyHostName: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_ProxyPort: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_ProxyUserName: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_ProxyPassword: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_Url: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_TranslationToLanguages: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_TranslationVoice: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_TranslationFeatures: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_IntentRegion: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_RecoMode: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_RecoLanguage: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static Speech_SessionId: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_UserDefinedQueryParameters: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_SynthLanguage: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_SynthVoice: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_SynthOutputFormat: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_InitialSilenceTimeoutMs: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_EndSilenceTimeoutMs: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_EnableAudioLogging: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_AutoDetectSourceLanguages: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceConnection_AutoDetectSourceLanguageResult: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_RequestDetailedResultTrueFalse: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_RequestProfanityFilterTrueFalse: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_ProfanityOption: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_PostProcessingOption: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_RequestWordLevelTimestamps: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_StablePartialResultThreshold: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_OutputFormatOption: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_TranslationRequestStablePartialResult: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_JsonResult: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_JsonErrorDetails: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static SpeechServiceResponse_RecognitionLatencyMs: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static CancellationDetails_Reason: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static CancellationDetails_ReasonText: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static CancellationDetails_ReasonDetailedText: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static LanguageUnderstandingServiceResponse_JsonResult: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static AudioConfig_DeviceNameForCapture: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static AudioConfig_NumberOfChannelsForCapture: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static AudioConfig_SampleRateForCapture: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static AudioConfig_BitsPerSampleForCapture: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static AudioConfig_AudioSource: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static Speech_LogFilename: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static Conversation_ApplicationId: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static Conversation_DialogType: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static Conversation_Initial_Silence_Timeout: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static Conversation_From_Id: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static Conversation_Conversation_Id: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static Conversation_Custom_Voice_Deployment_Ids: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static DataBuffer_TimeStamp: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public static DataBuffer_UserId: com.microsoft.cognitiveservices.speech.internal.PropertyId;
						public swigValue(): number;
						public toString(): string;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.PropertyId;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class PullAudioInputStream extends com.microsoft.cognitiveservices.speech.internal.AudioInputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.PullAudioInputStream>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static Create(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): com.microsoft.cognitiveservices.speech.internal.PullAudioInputStream;
						public static Create(param0: com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat, param1: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): com.microsoft.cognitiveservices.speech.internal.PullAudioInputStream;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStream): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AudioInputStream): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class PullAudioInputStreamCallback {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback>;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public Read(param0: native.Array<number>): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): number;
						public Close(): void;
						public finalize(): void;
						public GetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class PullAudioOutputStream extends com.microsoft.cognitiveservices.speech.internal.AudioOutputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.PullAudioOutputStream>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static Create(): com.microsoft.cognitiveservices.speech.internal.PullAudioOutputStream;
						public Read(param0: native.Array<number>): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AudioOutputStream): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioOutputStream): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class PushAudioInputStream extends com.microsoft.cognitiveservices.speech.internal.AudioInputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream): number;
						public static Create(): com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream;
						public SetProperty(param0: string, param1: string): void;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static Create(param0: com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat): com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream;
						public Write(param0: native.Array<number>): void;
						public SetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId, param1: string): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AudioInputStream): number;
						public Close(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class PushAudioOutputStream extends com.microsoft.cognitiveservices.speech.internal.AudioOutputStream {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStream>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStream): number;
						public static Create(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback): com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStream;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.AudioOutputStream): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class PushAudioOutputStreamCallback {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback>;
						public swigReleaseOwnership(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback): number;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public Write(param0: native.Array<number>): number;
						public Close(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class RecognitionEventArgs extends com.microsoft.cognitiveservices.speech.internal.SessionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public getOffset(): java.math.BigInteger;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class RecognitionEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener): number;
						public swigTakeOwnership(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class RecognitionEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal): number;
						public IsConnected(): boolean;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener): void;
						public DisconnectAll(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class RecognitionResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.RecognitionResult>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public Offset(): java.math.BigInteger;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public getResultId(): string;
						public Duration(): java.math.BigInteger;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): number;
						public getReason(): com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public getText(): string;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.Recognizer>;
						public IsEnabled(): boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public Disable(): void;
						public Enable(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ResourceHandling {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ResourceHandling>;
						public static DestroyResources: com.microsoft.cognitiveservices.speech.internal.ResourceHandling;
						public static KeepResources: com.microsoft.cognitiveservices.speech.internal.ResourceHandling;
						public swigValue(): number;
						public toString(): string;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.ResourceHandling;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ResultReason {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ResultReason>;
						public static NoMatch: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static Canceled: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static RecognizingSpeech: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static RecognizedSpeech: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static RecognizingIntent: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static RecognizedIntent: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static TranslatingSpeech: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static TranslatedSpeech: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static SynthesizingAudio: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static SynthesizingAudioCompleted: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static RecognizingKeyword: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static RecognizedKeyword: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static SynthesizingAudioStarted: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static TranslatingParticipantSpeech: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static TranslatedParticipantSpeech: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static TranslatedInstantMessage: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static TranslatedParticipantInstantMessage: com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public swigValue(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXCONNECTIONHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXCONNECTIONHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXCONNECTIONHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXCONVERSATIONHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXCONVERSATIONHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXCONVERSATIONHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXEVENTHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXGRAMMARHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXGRAMMARHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXGRAMMARHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXKEYWORDHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXKEYWORDHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXKEYWORDHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXLUMODELHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXLUMODELHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXLUMODELHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXPARTICIPANTHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXPARTICIPANTHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXPARTICIPANTHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXRECOHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRECOHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRECOHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXRESULTHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRESULTHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRESULTHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXSESSIONHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXSESSIONHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXSESSIONHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXTRIGGERHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXTRIGGERHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXTRIGGERHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SWIGTYPE_p_SPXUSERHANDLE {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXUSERHANDLE>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXUSERHANDLE): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class ServicePropertyChannel {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.ServicePropertyChannel>;
						public static UriQueryParameter: com.microsoft.cognitiveservices.speech.internal.ServicePropertyChannel;
						public swigValue(): number;
						public toString(): string;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.ServicePropertyChannel;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class Session {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.Session>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Session): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXSESSIONHANDLE);
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SessionEventArgs extends com.microsoft.cognitiveservices.speech.internal.EventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SessionEventArgs>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getSessionId(): string;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SessionEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SessionEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): void;
						public swigTakeOwnership(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventListener): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SessionEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SessionEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventListener): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventSignal): number;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventListener): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SourceLanguageConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig>;
						public static FromLanguage(param0: string): com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig): number;
						public static FromLanguage(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SourceLanguageConfigPtrVector {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector>;
						public swigCMemOwn: boolean;
						public constructor();
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector): number;
						public add(param0: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig): void;
						public set(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig): void;
						public finalize(): void;
						public constructor(param0: number, param1: boolean);
						public reserve(param0: number): void;
						public capacity(): number;
						public constructor(param0: number);
						public isEmpty(): boolean;
						public get(param0: number): com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig;
						public clear(): void;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechConfig>;
						public GetAuthorizationToken(): string;
						public static FromHost(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public RequestWordLevelTimestamps(): void;
						public GetProperty(param0: string): string;
						public delete(): void;
						public SetProxy(param0: string, param1: number): void;
						public SetSpeechRecognitionLanguage(param0: string): void;
						public SetOutputFormat(param0: com.microsoft.cognitiveservices.speech.internal.OutputFormat): void;
						public static FromEndpoint(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): number;
						public static FromEndpoint(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public finalize(): void;
						public GetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId): string;
						public static FromSubscription(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public static FromHost(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public GetSpeechSynthesisLanguage(): string;
						public GetSubscriptionKey(): string;
						public EnableDictation(): void;
						public GetSpeechSynthesisOutputFormat(): string;
						public SetProperty(param0: string, param1: string): void;
						public constructor(param0: number, param1: boolean);
						public SetAuthorizationToken(param0: string): void;
						public GetSpeechRecognitionLanguage(): string;
						public SetServiceProperty(param0: string, param1: string, param2: com.microsoft.cognitiveservices.speech.internal.ServicePropertyChannel): void;
						public GetSpeechSynthesisVoiceName(): string;
						public SetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PropertyId, param1: string): void;
						public SetSpeechSynthesisOutputFormat(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat): void;
						public SetProxy(param0: string, param1: number, param2: string, param3: string): void;
						public SetSpeechSynthesisVoiceName(param0: string): void;
						public GetEndpointId(): string;
						public EnableAudioLogging(): void;
						public SetEndpointId(param0: string): void;
						public GetRegion(): string;
						public GetOutputFormat(): com.microsoft.cognitiveservices.speech.internal.OutputFormat;
						public SetProfanity(param0: com.microsoft.cognitiveservices.speech.internal.ProfanityOption): void;
						public SetSpeechSynthesisLanguage(param0: string): void;
						public static FromAuthorizationToken(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public SetProxy(param0: string, param1: number, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognitionCanceledEventArgs extends com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventArgs>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventArgs): number;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public GetCancellationDetails(): com.microsoft.cognitiveservices.speech.internal.CancellationDetails;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognitionCanceledEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventArgs): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognitionCanceledEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public IsConnected(): boolean;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener): void;
						public DisconnectAll(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventSignal): number;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognitionEventArgs extends com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs): number;
						public finalize(): void;
						public GetResult(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognitionEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs): void;
						public swigTakeOwnership(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognitionEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener): void;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal): number;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognitionResult extends com.microsoft.cognitiveservices.speech.internal.RecognitionResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResult>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResult): number;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRESULTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognitionResultPtrFuture {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResultPtrFuture>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResultPtrFuture): number;
						public Get(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResult;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognizer extends com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer>;
						public GetAuthorizationToken(): string;
						public delete(): void;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig): com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer;
						public StopContinuousRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public finalize(): void;
						public StartKeywordRecognition(param0: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): void;
						public constructor(param0: number, param1: boolean);
						public SetAuthorizationToken(param0: string): void;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageConfig, param2: com.microsoft.cognitiveservices.speech.internal.AudioConfig): com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageConfig): com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig, param2: com.microsoft.cognitiveservices.speech.internal.AudioConfig): com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig): com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer;
						public StartContinuousRecognition(): void;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase): number;
						public GetEndpointId(): string;
						public StopKeywordRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: string, param2: com.microsoft.cognitiveservices.speech.internal.AudioConfig): com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer;
						public RecognizeOnceAsync(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResultPtrFuture;
						public StartContinuousRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public StopKeywordRecognition(): void;
						public StartKeywordRecognitionAsync(param0: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRECOHANDLE);
						public Recognize(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResult;
						public StopContinuousRecognition(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechRecognizerBase extends com.microsoft.cognitiveservices.speech.internal.Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase>;
						public getSessionStopped(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public getSpeechEndDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getSessionStarted(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase): number;
						public getSpeechStartDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public getRecognized(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal;
						public getRecognizing(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public finalize(): void;
						public getCanceled(): com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventSignal;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisCancellationDetails {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisCancellationDetails>;
						public getReason(): com.microsoft.cognitiveservices.speech.internal.CancellationReason;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static FromResult(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisCancellationDetails;
						public static FromStream(param0: com.microsoft.cognitiveservices.speech.internal.AudioDataStream): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisCancellationDetails;
						public getErrorDetails(): string;
						public getErrorCode(): com.microsoft.cognitiveservices.speech.internal.CancellationErrorCode;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisCancellationDetails): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisEventArgs extends com.microsoft.cognitiveservices.speech.internal.EventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventArgs>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getResult(): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public setResult(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventArgs): void;
						public swigTakeOwnership(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal): number;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisOutputFormat {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat>;
						public static Raw8Khz8BitMonoMULaw: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Riff16Khz16KbpsMonoSiren: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Audio16Khz16KbpsMonoSiren: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Audio16Khz32KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Audio16Khz128KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Audio16Khz64KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Audio24Khz48KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Audio24Khz96KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Audio24Khz160KBitRateMonoMp3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Raw16Khz16BitMonoTrueSilk: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Riff16Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Riff8Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Riff24Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Riff8Khz8BitMonoMULaw: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Raw16Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Raw24Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static Raw8Khz16BitMonoPcm: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisOutputFormat;
						public swigValue(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult>;
						public GetAudioData(): com.microsoft.cognitiveservices.speech.internal.UInt8Vector;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public GetAudioLength(): number;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRESULTHANDLE);
						public getResultId(): string;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): number;
						public getReason(): com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisResultPtrFuture {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResultPtrFuture>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public Get(): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResultPtrFuture): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisWordBoundaryEventArgs extends com.microsoft.cognitiveservices.speech.internal.EventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs>;
						public getTextOffset(): number;
						public getWordLength(): number;
						public setAudioOffset(param0: java.math.BigInteger): void;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public setWordLength(param0: number): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs): number;
						public setTextOffset(param0: number): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public getAudioOffset(): java.math.BigInteger;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisWordBoundaryEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesisWordBoundaryEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventSignal): number;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechSynthesizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer>;
						public StartSpeakingText(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult;
						public GetAuthorizationToken(): string;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer): number;
						public StartSpeakingSsmlAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResultPtrFuture;
						public delete(): void;
						public StartSpeakingSsml(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult;
						public getSynthesisCanceled(): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public SpeakText(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult;
						public SpeakSsml(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult;
						public finalize(): void;
						public getSynthesisCompleted(): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal;
						public constructor(param0: number, param1: boolean);
						public SetAuthorizationToken(param0: string): void;
						public getSynthesizing(): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal;
						public SpeakTextAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResultPtrFuture;
						public getSynthesisStarted(): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal;
						public getWordBoundary(): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventSignal;
						public StartSpeakingTextAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResultPtrFuture;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer;
						public SpeakSsmlAsync(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResultPtrFuture;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class SpeechTranslationConfig extends com.microsoft.cognitiveservices.speech.internal.SpeechConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig>;
						public static FromSubscription(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig;
						public static FromHost(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public delete(): void;
						public static FromEndpoint(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig;
						public static FromHost(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig;
						public static FromEndpoint(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public static FromHost(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig): number;
						public static FromEndpoint(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public static FromEndpoint(param0: string): com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig;
						public finalize(): void;
						public static FromSubscription(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public static FromHost(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public SetVoiceName(param0: string): void;
						public constructor(param0: number, param1: boolean);
						public RemoveTargetLanguage(param0: string): void;
						public GetTargetLanguages(): com.microsoft.cognitiveservices.speech.internal.StringVector;
						public AddTargetLanguage(param0: string): void;
						public static FromAuthorizationToken(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public static FromAuthorizationToken(param0: string, param1: string): com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig;
						public GetVoiceName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class StdMapStringString extends java.lang.Iterable<string> {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.StdMapStringString>;
						public swigCMemOwn: boolean;
						public empty(): boolean;
						public constructor();
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.StdMapStringString);
						public delete(): void;
						public finalize(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.StdMapStringString): number;
						public constructor(param0: number, param1: boolean);
						public get(param0: string): string;
						public has_key(param0: string): boolean;
						public iterator(): com.microsoft.cognitiveservices.speech.internal.StdMapStringStringMapIterator;
						public clear(): void;
						public size(): number;
						public set(param0: string, param1: string): void;
						public del(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class StdMapStringStringMapIterator extends java.util.Iterator<string> {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.StdMapStringStringMapIterator>;
						public swigCMemOwn: boolean;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.StdMapStringString);
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.StdMapStringStringMapIterator): number;
						public hasNext(): boolean;
						public next(): string;
						public finalize(): void;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class StreamStatus {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.StreamStatus>;
						public static Unknown: com.microsoft.cognitiveservices.speech.internal.StreamStatus;
						public static NoData: com.microsoft.cognitiveservices.speech.internal.StreamStatus;
						public static PartialData: com.microsoft.cognitiveservices.speech.internal.StreamStatus;
						public static AllData: com.microsoft.cognitiveservices.speech.internal.StreamStatus;
						public static Canceled: com.microsoft.cognitiveservices.speech.internal.StreamStatus;
						public static swigToEnum(param0: number): com.microsoft.cognitiveservices.speech.internal.StreamStatus;
						public swigValue(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class StringFuture {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.StringFuture>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.StringFuture): number;
						public Get(): string;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class StringVector {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.StringVector>;
						public swigCMemOwn: boolean;
						public set(param0: number, param1: string): void;
						public constructor();
						public delete(): void;
						public get(param0: number): string;
						public finalize(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.StringVector): number;
						public constructor(param0: number, param1: boolean);
						public reserve(param0: number): void;
						public capacity(): number;
						public constructor(param0: number);
						public isEmpty(): boolean;
						public clear(): void;
						public size(): number;
						public add(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationRecognitionCanceledEventArgs extends com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionCanceledEventArgs>;
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionEventArgs): number;
						public delete(): void;
						public GetCancellationDetails(): com.microsoft.cognitiveservices.speech.internal.CancellationDetails;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionCanceledEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationRecognitionEventArgs extends com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionEventArgs>;
						public constructor(param0: number, param1: boolean);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionEventArgs): number;
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public GetResult(): com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResult;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationRecognitionResult extends com.microsoft.cognitiveservices.speech.internal.RecognitionResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResult>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResult): number;
						public getTranslations(): com.microsoft.cognitiveservices.speech.internal.StdMapStringString;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRESULTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationRecognitionResultPtrFuture {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResultPtrFuture>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResultPtrFuture): number;
						public finalize(): void;
						public Get(): com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationRecognizer extends com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer>;
						public GetAuthorizationToken(): string;
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): number;
						public StopContinuousRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public finalize(): void;
						public getSynthesizing(): com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventSignal;
						public StartKeywordRecognition(param0: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): void;
						public constructor(param0: number, param1: boolean);
						public SetAuthorizationToken(param0: string): void;
						public Recognize(): com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResult;
						public RemoveTargetLanguage(param0: string): void;
						public RecognizeOnceAsync(): com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResultPtrFuture;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig): com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer;
						public StartContinuousRecognition(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase): number;
						public getProperties(): com.microsoft.cognitiveservices.speech.internal.PropertyCollection;
						public static FromConfig(param0: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig): com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer;
						public StopKeywordRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public GetTargetLanguages(): com.microsoft.cognitiveservices.speech.internal.StringVector;
						public AddTargetLanguage(param0: string): void;
						public StartContinuousRecognitionAsync(): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public StopKeywordRecognition(): void;
						public StartKeywordRecognitionAsync(param0: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): com.microsoft.cognitiveservices.speech.internal.VoidFuture;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRECOHANDLE);
						public StopContinuousRecognition(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationRecognizerBase extends com.microsoft.cognitiveservices.speech.internal.Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase>;
						public getSessionStopped(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public getRecognizing(): com.microsoft.cognitiveservices.speech.internal.TranslationTextEventSignal;
						public getSpeechEndDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public getSessionStarted(): com.microsoft.cognitiveservices.speech.internal.SessionEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase): number;
						public getCanceled(): com.microsoft.cognitiveservices.speech.internal.TranslationTextCanceledEventSignal;
						public getSpeechStartDetected(): com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public finalize(): void;
						public getRecognized(): com.microsoft.cognitiveservices.speech.internal.TranslationTextEventSignal;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationSynthesisEventArgs extends com.microsoft.cognitiveservices.speech.internal.SessionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventArgs>;
						public GetResult(): com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisResult;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): number;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXEVENTHANDLE);
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.EventArgs): number;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventArgs): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationSynthesisEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener>;
						public swigCMemOwn: boolean;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener): number;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public finalize(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventArgs): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationSynthesisEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventSignal): number;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationSynthesisResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisResult>;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXRESULTHANDLE);
						public getAudio(): com.microsoft.cognitiveservices.speech.internal.UInt8Vector;
						public getReason(): com.microsoft.cognitiveservices.speech.internal.ResultReason;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisResult): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationTexCanceledEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionCanceledEventArgs): void;
						public swigDirectorDisconnect(): void;
						public swigTakeOwnership(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationTexEventListener {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener>;
						public swigCMemOwn: boolean;
						public swigReleaseOwnership(): void;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public swigDirectorDisconnect(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener): number;
						public swigTakeOwnership(): void;
						public Execute(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionEventArgs): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationTextCanceledEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationTextCanceledEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTextCanceledEventSignal): number;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener): void;
						public IsConnected(): boolean;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener): void;
						public DisconnectAll(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class TranslationTextEventSignal {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.TranslationTextEventSignal>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public AddEventListener(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener): void;
						public RemoveEventListener(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTextEventSignal): number;
						public IsConnected(): boolean;
						public DisconnectAll(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class UInt8Vector {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.UInt8Vector>;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.UInt8Vector): number;
						public constructor();
						public delete(): void;
						public add(param0: number): void;
						public set(param0: number, param1: number): void;
						public finalize(): void;
						public constructor(param0: number, param1: boolean);
						public reserve(param0: number): void;
						public capacity(): number;
						public constructor(param0: number);
						public isEmpty(): boolean;
						public get(param0: number): number;
						public clear(): void;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class User {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.User>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.User): number;
						public GetId(): string;
						public finalize(): void;
						public static FromUserId(param0: string): com.microsoft.cognitiveservices.speech.internal.User;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.SWIGTYPE_p_SPXUSERHANDLE);
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class UserPtrFuture {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.UserPtrFuture>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public Get(): com.microsoft.cognitiveservices.speech.internal.User;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.UserPtrFuture): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class VoidFuture {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.VoidFuture>;
						public swigCMemOwn: boolean;
						public constructor(param0: number, param1: boolean);
						public delete(): void;
						public static getCPtr(param0: com.microsoft.cognitiveservices.speech.internal.VoidFuture): number;
						public Get(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class carbon_java extends com.microsoft.cognitiveservices.speech.internal.carbon_javaConstants {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.carbon_java>;
						public constructor();
						public static CopyAndFreePropertyString(param0: string): string;
						public static getFalseString(): string;
						public static SetTempDirectory(param0: string): void;
						public static getMAX_USER_ID_LEN(): number;
						public static getTrueString(): string;
						public static getCommaDelim(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class carbon_javaConstants {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.carbon_javaConstants>;
						/**
						 * Constructs a new instance of the com.microsoft.cognitiveservices.speech.internal.carbon_javaConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							<clinit>(): void;
						});
						public constructor();
						public static AUDIO_OUTPUT_BUFFER_SIZE: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module internal {
					export class carbon_javaJNI {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.internal.carbon_javaJNI>;
						public static SpeechConfig_SetServiceProperty(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string, param3: string, param4: number): void;
						public static SwigDirector_IntentEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.IntentEventListener, param1: number): void;
						public static AudioConfig_FromWavFileOutput(param0: string): number;
						public static SpeechTranslationConfig_FromEndpoint__SWIG_0(param0: string, param1: string): number;
						public static CustomCommandsConfig_FromAuthorizationToken(param0: string, param1: string, param2: string): number;
						public static ConversationTranscriberEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener): void;
						public static SpeechRecognitionEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener): void;
						public static delete_SpeechRecognitionEventArgs(param0: number): void;
						public static PropertyId_SpeechServiceConnection_EndpointId_get(): number;
						public static SpeechConfig_GetProperty__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number): string;
						public static PropertyId_SpeechServiceAuthorization_Token_get(): number;
						public static SpeechTranslationConfig_RemoveTargetLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig, param2: string): void;
						public static SpeechSynthesizer_SynthesisCompleted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer): number;
						public static ActivityReceivedEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener): void;
						public static NoMatchDetails_FromResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): number;
						public static PropertyId_SpeechServiceConnection_Host_get(): number;
						public static ConversationTranscriberRecognizerBase_Canceled_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberRecognizerBase): number;
						public static IntentRecognizer_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): number;
						public static SpeechRecognizer_GetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): string;
						public static TranslationRecognizer_FromConfig__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig): number;
						public static TranslationSynthesisResult_Audio_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisResult): number;
						public static IntentRecognizer_StartKeywordRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): number;
						public static DialogServiceConnector_FromConfig__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig): number;
						public static IntentCanceledEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionCanceledEventArgs): void;
						public static ConversationTranscriberRecognizerBase_SWIGSmartPtrUpcast(param0: number): number;
						public static delete_TranslationTextCanceledEventSignal(param0: number): void;
						public static SpeechSynthesisWordBoundaryEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener): void;
						public static new_ClassLanguageModel__SWIG_1(): number;
						public static SpeechRecognizerBase_Recognized_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase): number;
						public static new_SpeechSynthesisEventArgs(param0: number): number;
						public static IntentCanceledEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener): void;
						public static SpeechRecognitionEventArgs_SWIGUpcast(param0: number): number;
						public static SpeechConfig_SetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string): void;
						public static ActivityJSONType_Array_get(): number;
						public static SpeechRecognitionCanceledEventArgs_GetCancellationDetails(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventArgs): number;
						public static delete_BotFrameworkConfig(param0: number): void;
						public static ConversationTranscriber_FromConfig__SWIG_1(): number;
						public static AudioDataStream_SaveToWavFileAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream, param2: string): number;
						public static SpeechRecognitionCanceledEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener): void;
						public static new_Connection(param0: number): number;
						public static TranslationRecognizer_FromConfig__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public static TranslationSynthesisEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener): void;
						public static new_IntentEventListener(): number;
						public static PropertyId_AudioConfig_BitsPerSampleForCapture_get(): number;
						public static new_ConversationTranscriptionResult(param0: number): number;
						public static TranslationRecognizer_StopContinuousRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): number;
						public static SpeechTranslationConfig_FromHost__SWIG_0(param0: string, param1: string): number;
						public static PushAudioInputStream_Close(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream): void;
						public static IntentRecognizerBase_SWIGSmartPtrUpcast(param0: number): number;
						public static SpeechRecognizer_StopContinuousRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): void;
						public static delete_PullAudioOutputStream(param0: number): void;
						public static StringVector_clear(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringVector): void;
						public static SwigDirector_TranslationTexEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener, param1: number): void;
						public static AutoDetectSourceLanguageConfig_FromLanguages(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringVector): number;
						public static delete_SessionEventListener(param0: number): void;
						public static SpeechConfig_EnableDictation(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): void;
						public static ConversationTranscriberCanceledEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionCanceledEventArgs): void;
						public static SpeechConfig_RequestWordLevelTimestamps(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): void;
						public static DialogServiceConfig_SetProperty__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: number, param3: string): void;
						public static delete_AutoDetectSourceLanguageConfig(param0: number): void;
						public static SpeechRecognizer_StartContinuousRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): void;
						public static IntentRecognizerBase_SpeechStartDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase): number;
						public static Participant_Avatar_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Participant): string;
						public static Conversation_RemoveParticipantAsync__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.User): number;
						public static SpeechSynthesisOutputFormat_Riff16Khz16KbpsMonoSiren_get(): number;
						public static delete_TranslationRecognizerBase(param0: number): void;
						public static IntentRecognizer_FromConfig__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): number;
						public static Connection_SendMessageAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Connection, param2: string, param3: string): number;
						public static LanguageUnderstandingModel_FromSubscription(param0: string, param1: string, param2: string): number;
						public static ConnectionEventArgs_SWIGUpcast(param0: number): number;
						public static AudioStreamContainerFormat_FLAC_get(): number;
						public static IntentRecognizer_AddAllIntents__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel, param4: string): void;
						public static AudioStreamContainerFormat_AMRNB_get(): number;
						public static SpeechRecognizer_FromConfig__SWIG_7(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string): number;
						public static SpeechSynthesisWordBoundaryEventArgs_SWIGUpcast(param0: number): number;
						public static ConversationTranscriberRecognizerBase_SpeechStartDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberRecognizerBase): number;
						public static SpeechConfig_SetSpeechSynthesisVoiceName(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string): void;
						public static TranslationRecognizerBase_SessionStarted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase): number;
						public static Conversation_SetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation, param2: string): void;
						public static SpeechRecognizer_Recognize(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): number;
						public static IntentCanceledEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventSignal): void;
						public static AudioStreamContainerFormat_MP3_get(): number;
						public static SessionEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static AudioConfig_GetProperty__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig, param2: string): string;
						public static DialogServiceConfig_SetProxy__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: string, param3: number, param4: string): void;
						public static SpeechRecognizer_StopKeywordRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): void;
						public static ConversationTranscriberEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal): void;
						public static new_IntentTrigger(param0: number): number;
						public static TranslationRecognizer_SetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer, param2: string): void;
						public static delete_User(param0: number): void;
						public static DialogServiceConnector_DisconnectAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static PropertyId_SpeechServiceResponse_PostProcessingOption_get(): number;
						public static DialogServiceConfig_GetProperty__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: number): string;
						public static SpeechSynthesisOutputFormat_Raw8Khz8BitMonoMULaw_get(): number;
						public static IntentRecognizer_StopKeywordRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): number;
						public static delete_ConversationTranscriberEventSignal(param0: number): void;
						public static TranslationRecognitionResult_SWIGSmartPtrUpcast(param0: number): number;
						public static Recognizer_IsEnabled(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Recognizer): boolean;
						public static BaseRecognizerBase_SWIGSmartPtrUpcast(param0: number): number;
						public static ConversationTranscriberRecognizerBase_Recognized_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberRecognizerBase): number;
						public static ConversationTranscriber_SpeechEndDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static new_TranslationTexEventListener(): number;
						public static SpeechRecognitionEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener): void;
						public static ClassLanguageModel_FromStorageId(param0: string): number;
						public static StdMapStringString_has_key(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString, param2: string): boolean;
						public static PropertyId_Conversation_From_Id_get(): number;
						public static PhraseListGrammar_Clear(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PhraseListGrammar): void;
						public static AudioConfig_SetProperty__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig, param2: number, param3: string): void;
						public static CancellationErrorCode_Forbidden_get(): number;
						public static SpeechSynthesisWordBoundaryEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventSignal): void;
						public static AudioStreamContainerFormat_AMRWB_get(): number;
						public static new_TranslationSynthesisResult(param0: number): number;
						public static TranslationTextEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTextEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener): void;
						public static delete_TranslationRecognitionResultPtrFuture(param0: number): void;
						public static new_TranslationSynthesisEventArgs(param0: number): number;
						public static AudioConfig_FromStreamOutput(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioOutputStream): number;
						public static ResultReason_TranslatedInstantMessage_get(): number;
						public static SwigDirector_PullAudioInputStreamCallback_GetProperty(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback, param1: number): string;
						public static PropertyId_SpeechServiceConnection_Url_get(): number;
						public static StdMapStringString_iterator(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString): number;
						public static PropertyId_SpeechServiceConnection_EndSilenceTimeoutMs_get(): number;
						public static ActivityJSONType_Null_get(): number;
						public static RecognitionResult_Offset(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): java.math.BigInteger;
						public static TranslationTextEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTextEventSignal): void;
						public static StdMapStringString_clear(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString): void;
						public static AudioConfig_FromMicrophoneInput(param0: string): number;
						public static TranslationRecognizer_SWIGSmartPtrUpcast(param0: number): number;
						public static CancellationErrorCode_RuntimeError_get(): number;
						public static new_SpeechRecognizer(param0: number): number;
						public constructor();
						public static new_ConversationTranscriptionCanceledEventArgs(param0: number): number;
						public static DialogServiceConnector_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static TranslationRecognizer_StopContinuousRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): void;
						public static PropertyId_Conversation_Initial_Silence_Timeout_get(): number;
						public static SpeechRecognizer_FromConfig__SWIG_5(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig): number;
						public static IntentRecognizerBase_Canceled_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase): number;
						public static PropertyId_Conversation_Custom_Voice_Deployment_Ids_get(): number;
						public static delete_Grammar(param0: number): void;
						public static SpeechRecognizer_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): number;
						public static SwigDirector_PushAudioOutputStreamCallback_Close(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback): void;
						public static SpeechConfig_FromEndpoint__SWIG_1(param0: string): number;
						public static SpeechSynthesisOutputFormat_Raw24Khz16BitMonoPcm_get(): number;
						public static PushAudioOutputStreamCallback_Close(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback): void;
						public static SpeechSynthesisEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener): void;
						public static delete_StringFuture(param0: number): void;
						public static delete_PushAudioInputStream(param0: number): void;
						public static new_SpeechRecognitionEventListener(): number;
						public static IntentRecognizer_StartContinuousRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): number;
						public static delete_AudioOutputStream(param0: number): void;
						public static PropertyId_SpeechServiceResponse_TranslationRequestStablePartialResult_get(): number;
						public static IntentRecognizerBase_SpeechEndDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase): number;
						public static new_TranslationTexCanceledEventListener(): number;
						public static SpeechSynthesisWordBoundaryEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener): void;
						public static new_RecognitionEventArgs(param0: number): number;
						public static SpeechSynthesisOutputFormat_Riff8Khz8BitMonoMULaw_get(): number;
						public static StreamStatus_PartialData_get(): number;
						public static SpeechSynthesisOutputFormat_Riff16Khz16BitMonoPcm_get(): number;
						public static AutoDetectSourceLanguageConfig_FromSourceLanguageConfigs(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector): number;
						public static ResultReason_TranslatingParticipantSpeech_get(): number;
						public static delete_RecognitionEventListener(param0: number): void;
						public static SpeechSynthesisResultPtrFuture_Get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResultPtrFuture): number;
						public static TranslationTexCanceledEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionCanceledEventArgs): void;
						public static Connection_FromRecognizer(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public static PropertyId_CancellationDetails_ReasonText_get(): number;
						public static TranslationRecognizer_GetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): string;
						public static BotFrameworkConfig_FromAuthorizationToken(param0: string, param1: string): number;
						public static SpeechRecognizer_GetEndpointId(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): string;
						public static IntentRecognizer_SWIGSmartPtrUpcast(param0: number): number;
						public static ConversationTranscriber_LeaveConversationAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static SpeechRecognitionCanceledEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventSignal): void;
						public static new_TranslationRecognizer(param0: number): number;
						public static Recognizer_Enable(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Recognizer): void;
						public static ConversationTranscriberRecognizerBase_Recognizing_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberRecognizerBase): number;
						public static SwigDirector_SessionEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventListener, param1: number): void;
						public static AudioDataStream_GetPosition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream): number;
						public static SpeechSynthesisWordBoundaryEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventSignal): boolean;
						public static SpeechSynthesisOutputFormat_Raw8Khz16BitMonoPcm_get(): number;
						public static AudioDataStream_CanReadData__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream, param2: number): boolean;
						public static delete_ConversationTranscriptionCanceledEventArgs(param0: number): void;
						public static PropertyCollection_GetProperty__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection, param2: number, param3: string): string;
						public static DialogServiceConfig_SetProxy__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: string, param3: number, param4: string, param5: string): void;
						public static SourceLanguageConfigPtrVector_reserve(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector, param2: number): void;
						public static SpeechSynthesisWordBoundaryEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs): void;
						public static SpeechSynthesizer_SpeakSsmlAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer, param2: string): number;
						public static ConversationTranscriber_FromConfig__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public static new_StdMapStringString__SWIG_0(): number;
						public static SpeechTranslationConfig_SetVoiceName(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig, param2: string): void;
						public static SetTempDirectory(param0: string): void;
						public static new_Participant__SWIG_0(param0: number): number;
						public static TranslationSynthesisResult_Reason_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisResult): number;
						public static ConversationTranscriptionCanceledEventArgs_SWIGUpcast(param0: number): number;
						public static SpeechRecognitionCanceledEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventArgs): void;
						public static SpeechSynthesizer_SynthesisStarted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer): number;
						public static IntentEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentEventSignal): boolean;
						public static PullAudioInputStreamCallback_Close(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): void;
						public static PropertyId_SpeechServiceConnection_SynthVoice_get(): number;
						public static SpeechSynthesisWordBoundaryEventArgs_WordLength_set(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs, param2: number): void;
						public static AudioInputStream_CreatePullStream__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): number;
						public static KeywordRecognitionModel_FromFile(param0: string): number;
						public static SourceLanguageConfig_FromLanguage__SWIG_1(param0: string, param1: string): number;
						public static SwigDirector_ConnectionEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener, param1: number): void;
						public static TranslationSynthesisEventArgs_GetResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventArgs): number;
						public static new_PhraseListGrammar__SWIG_0(param0: number): number;
						public static SourceLanguageConfigPtrVector_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector, param2: number): number;
						public static PropertyId_SpeechServiceResponse_RequestDetailedResultTrueFalse_get(): number;
						public static User_FromUserId(param0: string): number;
						public static IntentRecognizerBase_SessionStopped_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase): number;
						public static SessionEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SessionEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): void;
						public static SpeechConfig_GetSpeechSynthesisOutputFormat(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): string;
						public static SpeechSynthesisWordBoundaryEventArgs_WordLength_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs): number;
						public static SpeechRecognizerBase_SessionStarted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase): number;
						public static delete_SessionEventSignal(param0: number): void;
						public static SpeechRecognizer_SetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer, param2: string): void;
						public static PullAudioInputStreamCallback_GetProperty(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback, param2: number): string;
						public static SpeechSynthesisEventArgs_Result_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventArgs): number;
						public static DialogServiceConfig_SetProperty__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: string, param3: string): void;
						public static Connection_SetMessageProperty(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Connection, param2: string, param3: string, param4: string): void;
						public static SpeechSynthesisCancellationDetails_Reason_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisCancellationDetails): number;
						public static ConversationTranscriber_StopTranscribingAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static StringVector_isEmpty(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringVector): boolean;
						public static new_ConnectionEventArgs(param0: number): number;
						public static delete_IntentRecognitionEventArgs(param0: number): void;
						public static new_ConversationTranscriber(param0: number): number;
						public static CustomCommandsConfig_SetApplicationId(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.CustomCommandsConfig, param2: string): void;
						public static IntentRecognizer_AddAllIntents__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel): void;
						public static Conversation_RemoveParticipantAsync__SWIG_2(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation, param2: string): number;
						public static RecognitionResult_Text_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): string;
						public static SpeechConfig_FromHost__SWIG_0(param0: string, param1: string): number;
						public static SpeechConfig_GetEndpointId(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): string;
						public static TranslationRecognizer_Synthesizing_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): number;
						public static PushAudioOutputStream_Create(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback): number;
						public static PullAudioOutputStream_Create(): number;
						public static ConversationTranscriber_JoinConversationAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public static OutputFormat_Simple_get(): number;
						public static new_ConversationTranscriptionEventArgs(param0: number): number;
						public static SourceLanguageConfigPtrVector_set(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector, param2: number, param3: number, param4: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig): void;
						public static Participant_From__SWIG_1(param0: string, param1: string): number;
						public static delete_AudioConfig(param0: number): void;
						public static delete_TranslationTexCanceledEventListener(param0: number): void;
						public static delete_StringVector(param0: number): void;
						public static delete_IntentRecognizerBase(param0: number): void;
						public static delete_SpeechTranslationConfig(param0: number): void;
						public static ResultReason_RecognizingKeyword_get(): number;
						public static DialogServiceConnector_SendActivityAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector, param2: string): number;
						public static AudioStreamFormat_GetDefaultInputFormat(): number;
						public static TranslationRecognizer_StartKeywordRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): void;
						public static PushAudioOutputStreamCallback_Write(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback, param2: native.Array<number>): number;
						public static delete_ConnectionEventSignal(param0: number): void;
						public static StdMapStringString_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString, param2: string): string;
						public static StringVector_size(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringVector): number;
						public static CancellationErrorCode_TooManyRequests_get(): number;
						public static PropertyId_SpeechServiceConnection_Key_get(): number;
						public static ActivityJSONType_Boolean_get(): number;
						public static ConversationTranscriberCanceledEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventSignal): boolean;
						public static delete_ActivityReceivedEventListener(param0: number): void;
						public static IntentCanceledEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener): void;
						public static SpeechRecognitionResult_SWIGSmartPtrUpcast(param0: number): number;
						public static SpeechSynthesisEventArgs_SWIGUpcast(param0: number): number;
						public static delete_Conversation(param0: number): void;
						public static new_UInt8Vector__SWIG_1(param0: number): number;
						public static SwigDirector_IntentCanceledEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener, param1: number): void;
						public static PropertyId_SpeechServiceConnection_AutoDetectSourceLanguageResult_get(): number;
						public static SpeechRecognizer_FromConfig__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): number;
						public static delete_Session(param0: number): void;
						public static new_StdMapStringStringMapIterator(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString): number;
						public static SpeechSynthesizer_SpeakSsml(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer, param2: string): number;
						public static SpeechTranslationConfig_GetVoiceName(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig): string;
						public static delete_PropertyCollection(param0: number): void;
						public static ClassLanguageModel_SWIGSmartPtrUpcast(param0: number): number;
						public static delete_ConversationTranscriberEventListener(param0: number): void;
						public static IntentRecognizer_StartKeywordRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): void;
						public static delete_TranslationSynthesisEventListener(param0: number): void;
						public static BaseRecognizerBase_SpeechEndDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase): number;
						public static delete_SpeechSynthesizer(param0: number): void;
						public static GrammarList_FromRecognizer(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public static PropertyId_SpeechServiceResponse_JsonErrorDetails_get(): number;
						public static PropertyCollection_GetProperty__SWIG_3(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection, param2: string): string;
						public static delete_LanguageUnderstandingModel(param0: number): void;
						public static new_SpeechSynthesisWordBoundaryEventListener(): number;
						public static PropertyId_SpeechServiceConnection_SynthOutputFormat_get(): number;
						public static PhraseListGrammar_AddPhrase(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PhraseListGrammar, param2: string): void;
						public static IntentRecognizer_AddIntent__SWIG_2(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel, param4: string): void;
						public static SpeechSynthesisWordBoundaryEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static ConversationPtrFuture_Get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationPtrFuture): number;
						public static PushAudioInputStream_Create__SWIG_0(): number;
						public static ParticipantPtrFuture_Get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ParticipantPtrFuture): number;
						public static SpeechRecognitionEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs): void;
						public static PullAudioInputStream_SWIGSmartPtrUpcast(param0: number): number;
						public static SpeechRecognizerBase_Canceled_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase): number;
						public static ProfanityOption_Masked_get(): number;
						public static ConversationTranscriptionCanceledEventArgs_GetCancellationDetails(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionCanceledEventArgs): number;
						public static TranslationRecognizer_StopKeywordRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): number;
						public static TranslationTexCanceledEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener, param1: number, param2: boolean): void;
						public static delete_ActivityReceivedEventSignal(param0: number): void;
						public static new_StringVector__SWIG_1(param0: number): number;
						public static TranslationTextCanceledEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTextCanceledEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener): void;
						public static PropertyCollection_GetProperty__SWIG_2(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection, param2: string, param3: string): string;
						public static SpeechConfig_FromHost__SWIG_1(param0: string): number;
						public static AudioConfig_GetProperty__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig, param2: number): string;
						public static SpeechSynthesisOutputFormat_Audio24Khz96KBitRateMonoMp3_get(): number;
						public static delete_RecognitionEventSignal(param0: number): void;
						public static Participant_Id_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Participant): string;
						public static IntentEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.IntentEventListener): void;
						public static AudioInputStream_CreatePushStream__SWIG_0(): number;
						public static SpeechSynthesizer_FromConfig__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): number;
						public static ResultReason_RecognizedSpeech_get(): number;
						public static SpeechSynthesisResult_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): number;
						public static delete_PushAudioOutputStream(param0: number): void;
						public static new_LanguageUnderstandingModel__SWIG_1(): number;
						public static new_UInt8Vector__SWIG_0(): number;
						public static FalseString_get(): string;
						public static delete_SpeechRecognitionEventSignal(param0: number): void;
						public static StringVector_set(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringVector, param2: number, param3: string): void;
						public static TranslationRecognitionCanceledEventArgs_GetCancellationDetails(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionCanceledEventArgs): number;
						public static SessionEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.SessionEventListener, param1: number, param2: boolean): void;
						public static PropertyId_Conversation_DialogType_get(): number;
						public static delete_AudioStreamFormat(param0: number): void;
						public static delete_IntentEventSignal(param0: number): void;
						public static ActivityJSONType_Double_get(): number;
						public static Conversation_AddParticipantAsync__SWIG_2(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.Participant): number;
						public static IntentRecognizer_GetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): string;
						public static ResultReason_RecognizedKeyword_get(): number;
						public static TranslationTextCanceledEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTextCanceledEventSignal): boolean;
						public static AudioOutputStream_CreatePushStream(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback): number;
						public static delete_CancellationDetails(param0: number): void;
						public static delete_StdMapStringStringMapIterator(param0: number): void;
						public static delete_SpeechRecognitionResult(param0: number): void;
						public static delete_VoidFuture(param0: number): void;
						public static new_LanguageUnderstandingModel__SWIG_0(param0: number): number;
						public static SpeechConfig_SetProfanity(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number): void;
						public static delete_BaseRecognizerBase(param0: number): void;
						public static SpeechSynthesizer_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer): number;
						public static StreamStatus_NoData_get(): number;
						public static IntentRecognizer_StopContinuousRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): void;
						public static AudioDataStream_CanReadData__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream, param2: number, param3: number): boolean;
						public static StdMapStringString_empty(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString): boolean;
						public static SessionEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SessionEventSignal): void;
						public static PhraseListGrammar_FromRecognizer(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Recognizer): number;
						public static RecognitionEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static ConnectionEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConnectionEventSignal): void;
						public static delete_TranslationTextEventSignal(param0: number): void;
						public static Conversation_RemoveParticipantAsync__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.Participant): number;
						public static delete_SpeechSynthesisWordBoundaryEventSignal(param0: number): void;
						public static SpeechConfig_SetProxy__SWIG_2(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string, param3: number): void;
						public static new_SpeechRecognitionCanceledEventArgs(param0: number): number;
						public static StdMapStringString_size(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString): number;
						public static delete_SpeechRecognitionEventListener(param0: number): void;
						public static DialogServiceConnector_StopKeywordRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static IntentRecognitionResultPtrFuture_Get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResultPtrFuture): number;
						public static ActivityJSONType_Object_get(): number;
						public static new_StdMapStringString__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString): number;
						public static TranslationSynthesisEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener): void;
						public static ConversationTranscriptionEventArgs_SWIGUpcast(param0: number): number;
						public static SpeechSynthesisOutputFormat_Audio24Khz48KBitRateMonoMp3_get(): number;
						public static SpeechConfig_GetSubscriptionKey(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): string;
						public static ConversationTranscriptionEventArgs_GetResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionEventArgs): number;
						public static ActivityReceivedEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventArgs): void;
						public static CancellationErrorCode_NoError_get(): number;
						public static SwigDirector_SpeechSynthesisWordBoundaryEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener, param1: number): void;
						public static UserPtrFuture_Get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.UserPtrFuture): number;
						public static ConversationTranscriberRecognizerBase_SessionStarted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberRecognizerBase): number;
						public static TranslationTexEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionEventArgs): void;
						public static Connection_Close(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Connection): void;
						public static PropertyId_SpeechServiceConnection_Endpoint_get(): number;
						public static LanguageUnderstandingModel_FromEndpoint(param0: string): number;
						public static delete_ConversationPtrFuture(param0: number): void;
						public static SessionEventArgs_SessionId_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SessionEventArgs): string;
						public static SpeechSynthesisWordBoundaryEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventListener, param1: number, param2: boolean): void;
						public static PullAudioOutputStream_SWIGSmartPtrUpcast(param0: number): number;
						public static Conversation_MuteParticipantAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation, param2: string): number;
						public static TranslationRecognitionResultPtrFuture_Get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResultPtrFuture): number;
						public static DialogServiceConnector_GetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): string;
						public static new_IntentRecognizer(param0: number): number;
						public static SpeechSynthesisEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static PropertyId_AudioConfig_NumberOfChannelsForCapture_get(): number;
						public static AudioStreamFormat_GetWaveFormatPCM__SWIG_1(param0: number, param1: number): number;
						public static StringVector_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringVector, param2: number): string;
						public static Participant_IsHost_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Participant): boolean;
						public static ConversationTranscriber_StartTranscribingAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static TranslationRecognizer_GetTargetLanguages(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): number;
						public static delete_SourceLanguageConfigPtrVector(param0: number): void;
						public static IntentRecognizer_StopContinuousRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): number;
						public static delete_AudioDataStream(param0: number): void;
						public static delete_IntentRecognizer(param0: number): void;
						public static IntentRecognizer_StopKeywordRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): void;
						public static ConversationTranscriber_Canceled_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static DialogServiceConnector_SessionStarted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static TrueString_get(): string;
						public static delete_ConnectionEventArgs(param0: number): void;
						public static new_StringVector__SWIG_0(): number;
						public static SessionEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SessionEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SessionEventListener): void;
						public static AudioStreamFormat_GetCompressedFormat(param0: number): number;
						public static TranslationTexEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener, param1: number, param2: boolean): void;
						public static SpeechRecognitionEventArgs_GetResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventArgs): number;
						public static delete_RecognitionEventArgs(param0: number): void;
						public static ActivityReceivedEventArgs_GetActivity(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventArgs): string;
						public static ResultReason_RecognizedIntent_get(): number;
						public static SpeechRecognizer_RecognizeOnceAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): number;
						public static RecognitionEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener, param1: number, param2: boolean): void;
						public static BaseRecognizerBase_SessionStarted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase): number;
						public static SwigDirector_PushAudioOutputStreamCallback_Write(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback, param1: native.Array<number>): number;
						public static PullAudioInputStreamCallback_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback, param1: number, param2: boolean): void;
						public static ActivityReceivedEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static SpeechConfig_GetProperty__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string): string;
						public static NoMatchReason_InitialBabbleTimeout_get(): number;
						public static ConversationTranscriber_GetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): string;
						public static delete_ClassLanguageModel(param0: number): void;
						public static delete_SpeechSynthesisResultPtrFuture(param0: number): void;
						public static new_Session(param0: number): number;
						public static SessionEventArgs_SWIGUpcast(param0: number): number;
						public static SpeechRecognitionCanceledEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static UInt8Vector_set(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.UInt8Vector, param2: number, param3: number): void;
						public static ResultReason_TranslatingSpeech_get(): number;
						public static new_GrammarList__SWIG_1(): number;
						public static Connection_Connected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Connection): number;
						public static SpeechConfig_SetProperty__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string, param3: string): void;
						public static ConversationTranscriber_Transcribed_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static PropertyId_SpeechServiceConnection_ProxyPassword_get(): number;
						public static delete_TranslationTexEventListener(param0: number): void;
						public static RecognitionResult_Reason_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): number;
						public static AUDIO_OUTPUT_BUFFER_SIZE_get(): number;
						public static delete_TranslationRecognitionEventArgs(param0: number): void;
						public static Conversation_StartConversationAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public static new_SourceLanguageConfigPtrVector__SWIG_1(param0: number): number;
						public static Participant_From__SWIG_2(param0: string): number;
						public static PropertyCollection_GetProperty__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection, param2: number): string;
						public static delete_IntentRecognitionCanceledEventArgs(param0: number): void;
						public static StdMapStringString_del(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString, param2: string): void;
						public static ResultReason_TranslatedParticipantSpeech_get(): number;
						public static PropertyId_AudioConfig_AudioSource_get(): number;
						public static AudioDataStream_SaveToWavFile(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream, param2: string): void;
						public static AudioConfig_FromDefaultMicrophoneInput(): number;
						public static IntentCanceledEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventSignal): boolean;
						public static new_SourceLanguageConfigPtrVector__SWIG_0(): number;
						public static Participant_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Participant): number;
						public static ResultReason_TranslatedParticipantInstantMessage_get(): number;
						public static SourceLanguageConfigPtrVector_isEmpty(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector): boolean;
						public static IntentRecognizer_StartContinuousRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): void;
						public static ConversationTranscriber_SessionStarted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static NoMatchReason_NotRecognized_get(): number;
						public static SpeechConfig_FromEndpoint__SWIG_0(param0: string, param1: string): number;
						public static new_SpeechSynthesisWordBoundaryEventArgs(param0: number): number;
						public static RecognitionEventArgs_Offset_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): java.math.BigInteger;
						public static PropertyId_SpeechServiceConnection_IntentRegion_get(): number;
						public static ActivityReceivedEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener): void;
						public static SpeechRecognizer_FromConfig__SWIG_4(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig, param4: number, param5: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public static SpeechRecognizerBase_SWIGSmartPtrUpcast(param0: number): number;
						public static Conversation_UnmuteAllParticipantsAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public static new_TranslationRecognitionResult(param0: number): number;
						public static SpeechSynthesisCancellationDetails_ErrorCode_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisCancellationDetails): number;
						public static PropertyCollection_SetProperty__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection, param2: string, param3: string): void;
						public static SwigDirector_SpeechSynthesisEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener, param1: number): void;
						public static new_IntentRecognitionResult(param0: number): number;
						public static SwigDirector_ConversationTranscriberCanceledEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener, param1: number): void;
						public static SpeechRecognizer_FromConfig__SWIG_3(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageConfig): number;
						public static PropertyId_SpeechServiceConnection_InitialSilenceTimeoutMs_get(): number;
						public static new_Grammar__SWIG_0(param0: number): number;
						public static ProfanityOption_Removed_get(): number;
						public static SpeechSynthesizer_SynthesisCanceled_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer): number;
						public static Conversation_GetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): string;
						public static PhraseListGrammar_SWIGSmartPtrUpcast(param0: number): number;
						public static AudioStreamFormat_GetWaveFormatPCM__SWIG_0(param0: number, param1: number, param2: number): number;
						public static SwigDirector_TranslationTexCanceledEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener, param1: number): void;
						public static PushAudioInputStream_Write(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream, param2: native.Array<number>): void;
						public static StreamStatus_AllData_get(): number;
						public static SpeechRecognizer_StartContinuousRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): number;
						public static ConversationTranscriber_SetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber, param2: string): void;
						public static delete_TranslationSynthesisEventSignal(param0: number): void;
						public static DialogServiceConnector_Canceled_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static IntentRecognitionResult_IntentId_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionResult): string;
						public static SwigDirector_SpeechRecognitionEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener, param1: number): void;
						public static Connection_Open(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Connection, param2: boolean): void;
						public static SpeechTranslationConfig_FromHost__SWIG_1(param0: string): number;
						public static SpeechSynthesizer_SpeakText(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer, param2: string): number;
						public static new_ConversationTranscriberEventListener(): number;
						public static ActivityReceivedEventArgs_GetAudio(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventArgs): number;
						public static SpeechSynthesisCancellationDetails_FromResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): number;
						public static PropertyId_Speech_LogFilename_get(): number;
						public static new_KeywordRecognitionModel__SWIG_1(): number;
						public static StringVector_reserve(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringVector, param2: number): void;
						public static ConversationTranscriberEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener, param1: number, param2: boolean): void;
						public static Conversation_AddParticipantAsync__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation, param2: string): number;
						public static TranslationRecognizer_StartContinuousRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): void;
						public static IntentRecognitionResult_SWIGSmartPtrUpcast(param0: number): number;
						public static User_GetId(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.User): string;
						public static SessionEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SessionEventSignal): boolean;
						public static TranslationRecognizer_RecognizeOnceAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): number;
						public static StringFuture_Get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringFuture): string;
						public static TranslationRecognizerBase_SWIGSmartPtrUpcast(param0: number): number;
						public static PropertyId_SpeechServiceConnection_UserDefinedQueryParameters_get(): number;
						public static TranslationTexEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static PropertyId_DataBuffer_TimeStamp_get(): number;
						public static PropertyId_SpeechServiceConnection_AutoDetectSourceLanguages_get(): number;
						public static StreamStatus_Canceled_get(): number;
						public static delete_SpeechSynthesisWordBoundaryEventArgs(param0: number): void;
						public static SpeechConfig_FromSubscription(param0: string, param1: string): number;
						public static ConversationTranscriber_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static IntentRecognizer_AddIntent__SWIG_3(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel, param4: string, param5: string): void;
						public static delete_PhraseListGrammar(param0: number): void;
						public static SpeechSynthesizer_StartSpeakingTextAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer, param2: string): number;
						public static BaseRecognizerBase_SpeechStartDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase): number;
						public static IntentRecognizerBase_SessionStarted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase): number;
						public static PropertyId_SpeechServiceConnection_SynthLanguage_get(): number;
						public static new_SpeechSynthesisResult(param0: number): number;
						public static PullAudioOutputStream_Read(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PullAudioOutputStream, param2: native.Array<number>): number;
						public static delete_SpeechRecognitionCanceledEventArgs(param0: number): void;
						public static Conversation_MAX_CONVERSATION_ID_LEN_get(): number;
						public static ActivityReceivedEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventSignal): boolean;
						public static new_SessionEventArgs(param0: number): number;
						public static SpeechSynthesisOutputFormat_Audio24Khz160KBitRateMonoMp3_get(): number;
						public static LanguageUnderstandingModel_FromAppId(param0: string): number;
						public static IntentRecognitionEventArgs_SWIGUpcast(param0: number): number;
						public static ResultReason_SynthesizingAudio_get(): number;
						public static SpeechRecognitionCanceledEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener): void;
						public static DialogServiceConnector_Recognized_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static PropertyId_SpeechServiceResponse_StablePartialResultThreshold_get(): number;
						public static AudioOutputStream_CreatePullStream(): number;
						public static PropertyId_SpeechServiceResponse_OutputFormatOption_get(): number;
						public static SpeechSynthesisResult_GetAudioLength(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): number;
						public static PropertyId_Conversation_Conversation_Id_get(): number;
						public static ActivityJSONType_UInt_get(): number;
						public static SpeechRecognizer_StopKeywordRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): number;
						public static PropertyId_SpeechServiceConnection_Region_get(): number;
						public static UInt8Vector_isEmpty(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.UInt8Vector): boolean;
						public static DialogServiceConnector_SetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector, param2: string): void;
						public static SpeechConfig_SetProxy__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string, param3: number, param4: string, param5: string): void;
						public static SpeechRecognizer_StopContinuousRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer): number;
						public static Conversation_DeleteConversationAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public static PropertyId_Speech_SessionId_get(): number;
						public static SwigDirector_RecognitionEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener, param1: number): void;
						public static RecognitionEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal): boolean;
						public static delete_UserPtrFuture(param0: number): void;
						public static PropertyId_SpeechServiceConnection_EnableAudioLogging_get(): number;
						public static delete_TranslationSynthesisEventArgs(param0: number): void;
						public static SpeechTranslationConfig_FromEndpoint__SWIG_1(param0: string): number;
						public static delete_IntentCanceledEventSignal(param0: number): void;
						public static RecognitionResult_Duration(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): java.math.BigInteger;
						public static TranslationSynthesisEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventSignal): void;
						public static delete_ParticipantPtrFuture(param0: number): void;
						public static ConversationTranscriberEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal): boolean;
						public static DialogServiceConfig_SetLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: string): void;
						public static AudioDataStream_FromResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): number;
						public static IntentTrigger_From__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel): number;
						public static SpeechRecognizer_FromConfig__SWIG_2(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageConfig, param4: number, param5: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public static AutoDetectSourceLanguageResult_FromResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResult): number;
						public static delete_IntentTrigger(param0: number): void;
						public static delete_ConversationTranscriberCanceledEventListener(param0: number): void;
						public static DialogServiceConnector_Recognizing_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static TranslationRecognitionEventArgs_GetResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionEventArgs): number;
						public static delete_SpeechSynthesisWordBoundaryEventListener(param0: number): void;
						public static PropertyId_AudioConfig_DeviceNameForCapture_get(): number;
						public static TranslationRecognitionEventArgs_SWIGUpcast(param0: number): number;
						public static SpeechSynthesisOutputFormat_Audio16Khz128KBitRateMonoMp3_get(): number;
						public static SourceLanguageConfigPtrVector_capacity(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector): number;
						public static ResourceHandling_KeepResources_get(): number;
						public static SpeechConfig_GetSpeechSynthesisLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): string;
						public static UInt8Vector_capacity(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.UInt8Vector): number;
						public static ClassLanguageModel_AssignClass(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ClassLanguageModel, param2: string, param3: number, param4: com.microsoft.cognitiveservices.speech.internal.Grammar): void;
						public static ConversationTranscriptionResult_UserId_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionResult): string;
						public static delete_SpeechSynthesisResult(param0: number): void;
						public static SpeechSynthesisEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal): void;
						public static delete_BaseAsyncRecognizer(param0: number): void;
						public static AudioConfig_FromStreamInput(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioInputStream): number;
						public static SpeechRecognizer_StartKeywordRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): void;
						public static SpeechSynthesizer_FromConfig__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public static new_SpeechRecognitionEventArgs(param0: number): number;
						public static delete_SpeechRecognitionResultPtrFuture(param0: number): void;
						public static new_SpeechRecognitionCanceledEventListener(): number;
						public static IntentCanceledEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static PushAudioInputStream_Create__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat): number;
						public static TranslationRecognizerBase_Canceled_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase): number;
						public static delete_IntentEventListener(param0: number): void;
						public static RecognitionEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener): void;
						public static SpeechRecognizerBase_SessionStopped_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase): number;
						public static ServicePropertyChannel_UriQueryParameter_get(): number;
						public static IntentRecognizer_RecognizeOnceAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): number;
						public static Connection_Disconnected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Connection): number;
						public static TranslationSynthesisEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static AudioInputStream_CreatePushStream__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat): number;
						public static ConnectionEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConnectionEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener): void;
						public static SpeechConfig_SetSpeechSynthesisLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string): void;
						public static PropertyId_CancellationDetails_Reason_get(): number;
						public static delete_SessionEventArgs(param0: number): void;
						public static TranslationRecognizer_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): number;
						public static Grammar_FromStorageId(param0: string): number;
						public static RecognitionEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.RecognitionEventArgs): void;
						public static ActivityReceivedEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener, param1: number, param2: boolean): void;
						public static new_GrammarList__SWIG_0(param0: number): number;
						public static SpeechConfig_SetProxy__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string, param3: number, param4: string): void;
						public static SpeechSynthesisCancellationDetails_ErrorDetails_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisCancellationDetails): string;
						public static OutputFormat_Detailed_get(): number;
						public static CancellationReason_Error_get(): number;
						public static PropertyId_SpeechServiceConnection_ProxyUserName_get(): number;
						public static PropertyId_SpeechServiceConnection_ProxyHostName_get(): number;
						public static SpeechConfig_FromAuthorizationToken(param0: string, param1: string): number;
						public static IntentEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.IntentEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static CancellationDetails_ErrorDetails_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.CancellationDetails): string;
						public static delete_StdMapStringString(param0: number): void;
						public static delete_IntentRecognitionResult(param0: number): void;
						public static DialogServiceConnector_ActivityReceived_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static SpeechSynthesisResult_GetAudioData(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): number;
						public static new_SpeechSynthesisEventListener(): number;
						public static SpeechTranslationConfig_SWIGSmartPtrUpcast(param0: number): number;
						public static DialogServiceConfig_SetServiceProperty(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: string, param3: string, param4: number): void;
						public static DialogServiceConfig_GetLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig): string;
						public static ConnectionEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ConnectionEventArgs): void;
						public static Conversation_AddParticipantAsync__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.User): number;
						public static SpeechTranslationConfig_GetTargetLanguages(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig): number;
						public static TranslationRecognizer_StartContinuousRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): number;
						public static RecognitionResult_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): number;
						public static new_User__SWIG_0(param0: number): number;
						public static TranslationSynthesisEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventArgs): void;
						public static BaseAsyncRecognizer_SWIGSmartPtrUpcast(param0: number): number;
						public static PushAudioOutputStream_SWIGSmartPtrUpcast(param0: number): number;
						public static CancellationErrorCode_BadRequest_get(): number;
						public static SpeechRecognizerBase_SpeechEndDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase): number;
						public static AudioDataStream_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream): number;
						public static AutoDetectSourceLanguageResult_Language_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AutoDetectSourceLanguageResult): string;
						public static TranslationTextEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTextEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener): void;
						public static AudioDataStream_GetStatus(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream): number;
						public static RecognitionResult_ResultId_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): string;
						public static StdMapStringString_set(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringString, param2: string, param3: string): void;
						public static ConversationTranscriberCanceledEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener): void;
						public static SpeechConfig_SetOutputFormat(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number): void;
						public static SpeechSynthesizer_StartSpeakingText(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer, param2: string): number;
						public static new_PhraseListGrammar__SWIG_1(): number;
						public static ConversationTranscriberCanceledEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static DialogServiceConnector_StartKeywordRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): number;
						public static TranslationRecognizerBase_SessionStopped_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase): number;
						public static PropertyId_CancellationDetails_ReasonDetailedText_get(): number;
						public static ConnectionEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConnectionEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener): void;
						public static SpeechRecognitionEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener, param1: number, param2: boolean): void;
						public static CustomCommandsConfig_SWIGSmartPtrUpcast(param0: number): number;
						public static SpeechRecognitionCanceledEventArgs_SWIGUpcast(param0: number): number;
						public static delete_TranslationRecognitionResult(param0: number): void;
						public static SpeechConfig_GetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): string;
						public static ConversationTranscriptionResult_SWIGSmartPtrUpcast(param0: number): number;
						public static VoidFuture_Get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.VoidFuture): void;
						public static DialogServiceConnector_SessionStopped_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static TranslationRecognizerBase_Recognized_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase): number;
						public static new_Grammar__SWIG_1(): number;
						public static SpeechConfig_GetSpeechRecognitionLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): string;
						public static TranslationRecognizerBase_Recognizing_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase): number;
						public static ConversationTranscriberRecognizerBase_SessionStopped_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberRecognizerBase): number;
						public static CustomCommandsConfig_FromSubscription(param0: string, param1: string, param2: string): number;
						public static AudioStreamFormat_GetWaveFormatPCM__SWIG_2(param0: number): number;
						public static TranslationSynthesisEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventSignal): boolean;
						public static new_User__SWIG_1(): number;
						public static DialogServiceConnector_FromConfig__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public static delete_ConversationTranscriber(param0: number): void;
						public static IntentCanceledEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.IntentCanceledEventListener, param1: number, param2: boolean): void;
						public static ResultReason_TranslatedSpeech_get(): number;
						public static PropertyId_SpeechServiceResponse_JsonResult_get(): number;
						public static PropertyId_SpeechServiceResponse_RecognitionLatencyMs_get(): number;
						public static StringVector_capacity(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringVector): number;
						public static SpeechSynthesisWordBoundaryEventArgs_TextOffset_set(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs, param2: number): void;
						public static TranslationSynthesisEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener, param1: number, param2: boolean): void;
						public static BaseRecognizerBase_Recognized_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase): number;
						public static SpeechSynthesisOutputFormat_Audio16Khz64KBitRateMonoMp3_get(): number;
						public static new_TranslationRecognitionEventArgs(param0: number): number;
						public static SpeechRecognizer_FromConfig__SWIG_6(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string, param3: number, param4: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public static PropertyId_SpeechServiceConnection_TranslationFeatures_get(): number;
						public static PropertyId_LanguageUnderstandingServiceResponse_JsonResult_get(): number;
						public static Participant_SetVoiceSignature(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Participant, param2: string): void;
						public static ConnectionEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConnectionEventSignal): boolean;
						public static IntentRecognizerBase_Recognizing_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase): number;
						public static AudioStreamFormat_GetDefaultOutputFormat(): number;
						public static AudioConfig_FromWavFileInput(param0: string): number;
						public static SpeechSynthesizer_Synthesizing_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer): number;
						public static new_IntentCanceledEventListener(): number;
						public static IntentRecognizer_FromConfig__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public static SwigDirector_SpeechRecognitionCanceledEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener, param1: number): void;
						public static delete_SpeechConfig(param0: number): void;
						public static delete_KeywordRecognitionModel(param0: number): void;
						public static UInt8Vector_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.UInt8Vector, param2: number): number;
						public static PropertyId_Conversation_ApplicationId_get(): number;
						public static IntentRecognitionCanceledEventArgs_GetCancellationDetails(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionCanceledEventArgs): number;
						public static SpeechSynthesizer_SpeakTextAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer, param2: string): number;
						public static new_TranslationRecognitionCanceledEventArgs(param0: number): number;
						public static CopyAndFreePropertyString(param0: string): string;
						public static delete_Recognizer(param0: number): void;
						public static ActivityReceivedEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventSignal): void;
						public static new_ActivityReceivedEventListener(): number;
						public static TranslationRecognizer_RemoveTargetLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer, param2: string): void;
						public static delete_SpeechRecognitionCanceledEventListener(param0: number): void;
						public static ResultReason_NoMatch_get(): number;
						public static ConversationTranscriberEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionEventArgs): void;
						public static IntentEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.IntentEventListener, param1: number, param2: boolean): void;
						public static new_ConnectionEventListener(): number;
						public static new_ConversationTranscriberCanceledEventListener(): number;
						public static Participant_SetPreferredLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Participant, param2: string): void;
						public static ConversationTranscriber_SpeechStartDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static Conversation_EndConversationAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public static SpeechSynthesisResult_Reason_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): number;
						public static BotFrameworkConfig_SWIGSmartPtrUpcast(param0: number): number;
						public static new_RecognitionEventListener(): number;
						public static delete_SpeechRecognizer(param0: number): void;
						public static SpeechSynthesisWordBoundaryEventArgs_TextOffset_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs): number;
						public static delete_SpeechSynthesisCancellationDetails(param0: number): void;
						public static TranslationRecognitionResult_Translations_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionResult): number;
						public static SourceLanguageConfigPtrVector_size(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector): number;
						public static TranslationRecognizer_Recognize(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): number;
						public static TranslationRecognizer_AddTargetLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer, param2: string): void;
						public static PropertyId_SpeechServiceConnection_ProxyPort_get(): number;
						public static ResultReason_SynthesizingAudioStarted_get(): number;
						public static MAX_USER_ID_LEN_get(): number;
						public static GrammarList_SWIGSmartPtrUpcast(param0: number): number;
						public static delete_SpeechRecognitionCanceledEventSignal(param0: number): void;
						public static TranslationTexCanceledEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static AudioStreamContainerFormat_OGG_OPUS_get(): number;
						public static PropertyId_SpeechServiceConnection_TranslationToLanguages_get(): number;
						public static new_Participant__SWIG_1(): number;
						public static PushAudioInputStream_SetProperty__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream, param2: number, param3: string): void;
						public static delete_Participant(param0: number): void;
						public static PushAudioInputStream_SWIGSmartPtrUpcast(param0: number): number;
						public static SwigDirector_ActivityReceivedEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventListener, param1: number): void;
						public static SpeechRecognitionEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal): void;
						public static ActivityReceivedEventArgs_HasAudio(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ActivityReceivedEventArgs): boolean;
						public static AudioStreamContainerFormat_MULAW_get(): number;
						public static StdMapStringStringMapIterator_hasNext(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringStringMapIterator): boolean;
						public static PropertyCollection_SetProperty__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection, param2: number, param3: string): void;
						public static ProfanityOption_Raw_get(): number;
						public static new_PullAudioInputStreamCallback(): number;
						public static SpeechRecognizer_SWIGSmartPtrUpcast(param0: number): number;
						public static CancellationErrorCode_ConnectionFailure_get(): number;
						public static IntentRecognizer_SetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: string): void;
						public static SpeechRecognitionCanceledEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventListener, param1: number, param2: boolean): void;
						public static SpeechConfig_SetSpeechRecognitionLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string): void;
						public static NoMatchReason_KeywordNotRecognized_get(): number;
						public static new_SessionEventListener(): number;
						public static Conversation_CreateConversationAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string): number;
						public static SpeechSynthesisResult_ResultId_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): string;
						public static SpeechRecognizer_StartKeywordRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): number;
						public static Conversation_UnlockConversationAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public static PullAudioInputStreamCallback_GetPropertySwigExplicitPullAudioInputStreamCallback(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback, param2: number): string;
						public static Participant_IsUsingTts_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Participant): boolean;
						public static SpeechSynthesisEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener): void;
						public static SpeechTranslationConfig_AddTargetLanguage(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig, param2: string): void;
						public static ConnectionEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static SpeechRecognitionCanceledEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionCanceledEventSignal): boolean;
						public static CancellationErrorCode_ServiceError_get(): number;
						public static IntentRecognizer_AddIntent__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: string): void;
						public static PropertyId_DataBuffer_UserId_get(): number;
						public static delete_SpeechRecognizerBase(param0: number): void;
						public static Conversation_UnmuteParticipantAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation, param2: string): number;
						public static CancellationErrorCode_ServiceTimeout_get(): number;
						public static CancellationDetails_ErrorCode_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.CancellationDetails): number;
						public static SpeechConfig_SetEndpointId(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: string): void;
						public static SpeechTranslationConfig_FromSubscription(param0: string, param1: string): number;
						public static delete_CustomCommandsConfig(param0: number): void;
						public static TranslationRecognitionCanceledEventArgs_SWIGUpcast(param0: number): number;
						public static SourceLanguageConfigPtrVector_clear(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector): void;
						public static delete_AutoDetectSourceLanguageResult(param0: number): void;
						public static DialogServiceConnector_ListenOnceAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static ActivityJSONType_Int_get(): number;
						public static ConversationTranscriberCanceledEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventSignal): void;
						public static DialogServiceConfig_GetProperty__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: string): string;
						public static CancellationDetails_FromResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionResult): number;
						public static CancellationErrorCode_ServiceUnavailable_get(): number;
						public static PullAudioInputStreamCallback_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback, param1: number, param2: boolean, param3: boolean): void;
						public static AudioConfig_FromDefaultSpeakerOutput(): number;
						public static ConversationTranscriber_SWIGSmartPtrUpcast(param0: number): number;
						public static CommaDelim_get(): string;
						public static AudioDataStream_ReadData__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream, param2: number, param3: native.Array<number>): number;
						public static PushAudioOutputStreamCallback_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback, param1: number, param2: boolean): void;
						public static ResourceHandling_DestroyResources_get(): number;
						public static delete_TranslationRecognitionCanceledEventArgs(param0: number): void;
						public static ConversationTranscriberRecognizerBase_SpeechEndDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberRecognizerBase): number;
						public static SpeechSynthesisWordBoundaryEventArgs_AudioOffset_set(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs, param2: java.math.BigInteger): void;
						public static delete_ConversationTranscriberCanceledEventSignal(param0: number): void;
						public static SpeechConfig_GetSpeechSynthesisVoiceName(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): string;
						public static delete_RecognitionResult(param0: number): void;
						public static PropertyId_SpeechServiceResponse_ProfanityOption_get(): number;
						public static PropertyId_AudioConfig_SampleRateForCapture_get(): number;
						public static new_ClassLanguageModel__SWIG_0(param0: number): number;
						public static delete_ConversationTranscriptionEventArgs(param0: number): void;
						public static Conversation_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public static ResultReason_RecognizingIntent_get(): number;
						public static SpeechSynthesisOutputFormat_Riff24Khz16BitMonoPcm_get(): number;
						public static Recognizer_Disable(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Recognizer): void;
						public static delete_ActivityReceivedEventArgs(param0: number): void;
						public static SpeechConfig_SetSpeechSynthesisOutputFormat(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number): void;
						public static new_IntentRecognitionCanceledEventArgs(param0: number): number;
						public static Conversation_GetConversationId(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): string;
						public static delete_SpeechSynthesisEventListener(param0: number): void;
						public static SpeechSynthesisEventArgs_Result_set(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventArgs, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisResult): void;
						public static PropertyId_SpeechServiceConnection_TranslationVoice_get(): number;
						public static TranslationRecognizerBase_SpeechStartDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase): number;
						public static TranslationRecognizerBase_SpeechEndDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizerBase): number;
						public static StdMapStringStringMapIterator_nextImpl(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StdMapStringStringMapIterator): string;
						public static delete_DialogServiceConfig(param0: number): void;
						public static SpeechRecognizerBase_Recognizing_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase): number;
						public static Conversation_LockConversationAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public static new_PushAudioOutputStreamCallback(): number;
						public static delete_UInt8Vector(param0: number): void;
						public static IntentEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.IntentEventListener): void;
						public static SessionEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SessionEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SessionEventListener): void;
						public static SpeechRecognitionEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static SpeechRecognitionEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionEventSignal): boolean;
						public static SpeechSynthesisOutputFormat_Raw16Khz16BitMonoTrueSilk_get(): number;
						public static IntentEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentEventSignal): void;
						public static ConversationTranscriberCanceledEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener, param1: number, param2: boolean): void;
						public static AudioDataStream_SetPosition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream, param2: number): void;
						public static PropertyId_SpeechServiceAuthorization_Type_get(): number;
						public static delete_PullAudioInputStreamCallback(param0: number): void;
						public static SpeechConfig_EnableAudioLogging(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): void;
						public static delete_IntentCanceledEventListener(param0: number): void;
						public static SpeechConfig_GetRegion(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): string;
						public static delete_SourceLanguageConfig(param0: number): void;
						public static TranslationRecognizer_StopKeywordRecognition(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer): void;
						public static NoMatchReason_InitialSilenceTimeout_get(): number;
						public static SpeechRecognitionResultPtrFuture_Get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognitionResultPtrFuture): number;
						public static SpeechSynthesizer_StartSpeakingSsmlAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer, param2: string): number;
						public static AudioStreamContainerFormat_ALAW_get(): number;
						public static delete_TranslationRecognizer(param0: number): void;
						public static SpeechSynthesisEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventSignal): boolean;
						public static ConversationTranscriberEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener): void;
						public static IntentRecognizer_AddIntent__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: string, param3: string): void;
						public static delete_NoMatchDetails(param0: number): void;
						public static delete_ConversationTranscriberRecognizerBase(param0: number): void;
						public static AudioConfig_SetProperty__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioConfig, param2: string, param3: string): void;
						public static Conversation_MuteAllParticipantsAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Conversation): number;
						public static TranslationTextEventSignal_IsConnected(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTextEventSignal): boolean;
						public static ResultReason_RecognizingSpeech_get(): number;
						public static delete_GrammarList(param0: number): void;
						public static UInt8Vector_clear(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.UInt8Vector): void;
						public static CancellationReason_EndOfStream_get(): number;
						public static SourceLanguageConfig_FromLanguage__SWIG_0(param0: string): number;
						public static IntentRecognizer_AddIntent__SWIG_4(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.IntentTrigger, param4: string): void;
						public static SwigDirector_PullAudioInputStreamCallback_Read(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback, param1: native.Array<number>): number;
						public static SpeechConfig_SetProperty__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number, param3: string): void;
						public static SwigDirector_PullAudioInputStreamCallback_Close(param0: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): void;
						public static new_KeywordRecognitionModel__SWIG_0(param0: number): number;
						public static PropertyId_SpeechServiceResponse_RequestProfanityFilterTrueFalse_get(): number;
						public static SpeechRecognizer_FromConfig__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.AudioConfig): number;
						public static DialogServiceConfig_SetProxy__SWIG_2(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConfig, param2: string, param3: number): void;
						public static SwigDirector_TranslationSynthesisEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener, param1: number): void;
						public static IntentTrigger_From__SWIG_0(param0: string): number;
						public static delete_SpeechSynthesisEventSignal(param0: number): void;
						public static SpeechSynthesisCancellationDetails_FromStream(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream): number;
						public static new_Conversation(param0: number): number;
						public static delete_IntentRecognitionResultPtrFuture(param0: number): void;
						public static delete_Connection(param0: number): void;
						public static PullAudioInputStream_Create__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): number;
						public static BaseRecognizerBase_SessionStopped_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase): number;
						public static delete_ConversationTranscriptionResult(param0: number): void;
						public static UInt8Vector_add(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.UInt8Vector, param2: number): void;
						public static SpeechConfig_GetOutputFormat(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechConfig): number;
						public static BaseRecognizerBase_Recognizing_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase): number;
						public static new_SpeechRecognitionResult(param0: number): number;
						public static RecognitionEventSignal_RemoveEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.RecognitionEventListener): void;
						public static new_IntentRecognitionEventArgs(param0: number): number;
						public static TranslationTextCanceledEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTextCanceledEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener): void;
						public static CancellationDetails_Reason_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.CancellationDetails): number;
						public static delete_EventArgs(param0: number): void;
						public static Participant_From__SWIG_0(param0: string, param1: string, param2: string): number;
						public static SpeechSynthesizer_StartSpeakingSsml(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer, param2: string): number;
						public static ConversationTranscriberCanceledEventSignal_AddEventListener(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventSignal, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener): void;
						public static SpeechSynthesisOutputFormat_Audio16Khz32KBitRateMonoMp3_get(): number;
						public static delete_TranslationSynthesisResult(param0: number): void;
						public static Session_Properties_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Session): number;
						public static CustomCommandsConfig_GetApplicationId(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.CustomCommandsConfig): string;
						public static SpeechTranslationConfig_FromAuthorizationToken(param0: string, param1: string): number;
						public static RecognitionEventArgs_SWIGUpcast(param0: number): number;
						public static PullAudioInputStream_Create__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): number;
						public static ResultReason_SynthesizingAudioCompleted_get(): number;
						public static SpeechSynthesisOutputFormat_Audio16Khz16KbpsMonoSiren_get(): number;
						public static SpeechSynthesisWordBoundaryEventArgs_AudioOffset_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisWordBoundaryEventArgs): java.math.BigInteger;
						public static ActivityJSONType_String_get(): number;
						public static ResultReason_Canceled_get(): number;
						public static IntentTrigger_From__SWIG_2(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.LanguageUnderstandingModel, param2: string): number;
						public static SpeechSynthesisEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener, param1: number, param2: boolean): void;
						public static IntentRecognizer_Recognize(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizer): number;
						public static BotFrameworkConfig_FromSubscription(param0: string, param1: string): number;
						public static SwigDirector_ConversationTranscriberEventListener_Execute(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener, param1: number): void;
						public static UInt8Vector_size(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.UInt8Vector): number;
						public static delete_PushAudioOutputStreamCallback(param0: number): void;
						public static IntentEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionEventArgs): void;
						public static delete_ConnectionEventListener(param0: number): void;
						public static delete_DialogServiceConnector(param0: number): void;
						public static PropertyId_SpeechServiceConnection_RecoMode_get(): number;
						public static IntentRecognitionEventArgs_GetResult(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognitionEventArgs): number;
						public static SpeechSynthesizer_WordBoundary_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer): number;
						public static CancellationErrorCode_AuthenticationFailure_get(): number;
						public static Participant_IsMuted_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Participant): boolean;
						public static DialogServiceConnector_ConnectAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.DialogServiceConnector): number;
						public static TranslationTextCanceledEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationTextCanceledEventSignal): void;
						public static BaseRecognizerBase_Canceled_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.BaseRecognizerBase): number;
						public static SourceLanguageConfigPtrVector_add(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfigPtrVector, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SourceLanguageConfig): void;
						public static ConversationTranscriberEventListener_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener, param1: number, param2: boolean, param3: boolean): void;
						public static PropertyId_SpeechServiceConnection_RecoLanguage_get(): number;
						public static StreamStatus_Unknown_get(): number;
						public static NoMatchDetails_Reason_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.NoMatchDetails): number;
						public static UInt8Vector_reserve(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.UInt8Vector, param2: number): void;
						public static delete_AudioInputStream(param0: number): void;
						public static SpeechSynthesisEventListener_Execute(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventListener, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesisEventArgs): void;
						public static TranslationSynthesisEventArgs_SWIGUpcast(param0: number): number;
						public static ConnectionEventListener_change_ownership(param0: com.microsoft.cognitiveservices.speech.internal.ConnectionEventListener, param1: number, param2: boolean): void;
						public static SpeechSynthesizer_GetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer): string;
						public static PushAudioOutputStreamCallback_director_connect(param0: com.microsoft.cognitiveservices.speech.internal.PushAudioOutputStreamCallback, param1: number, param2: boolean, param3: boolean): void;
						public static GrammarList_Add(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.GrammarList, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.Grammar): void;
						public static RecognitionEventSignal_DisconnectAll(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.RecognitionEventSignal): void;
						public static IntentRecognitionCanceledEventArgs_SWIGUpcast(param0: number): number;
						public static SpeechRecognizerBase_SpeechStartDetected_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechRecognizerBase): number;
						public static PushAudioInputStream_SetProperty__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PushAudioInputStream, param2: string, param3: string): void;
						public static delete_PullAudioInputStream(param0: number): void;
						public static SpeechSynthesizer_SetAuthorizationToken(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.SpeechSynthesizer, param2: string): void;
						public static AudioDataStream_ReadData__SWIG_0(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioDataStream, param2: native.Array<number>): number;
						public static Participant_DisplayName_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.Participant): string;
						public static TranslationRecognizer_StartKeywordRecognitionAsync(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.KeywordRecognitionModel): number;
						public static PullAudioInputStreamCallback_Read(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback, param2: native.Array<number>): number;
						public static SpeechSynthesisOutputFormat_Riff8Khz16BitMonoPcm_get(): number;
						public static StringVector_add(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.StringVector, param2: string): void;
						public static IntentRecognizerBase_Recognized_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.IntentRecognizerBase): number;
						public static new_TranslationSynthesisEventListener(): number;
						public static AudioInputStream_CreatePullStream__SWIG_1(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.AudioStreamFormat, param2: number, param3: com.microsoft.cognitiveservices.speech.internal.PullAudioInputStreamCallback): number;
						public static PropertyId_SpeechServiceResponse_RequestWordLevelTimestamps_get(): number;
						public static delete_SpeechSynthesisEventArgs(param0: number): void;
						public static ConversationTranscriber_SessionStopped_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
						public static SpeechSynthesisOutputFormat_Raw16Khz16BitMonoPcm_get(): number;
						public static ConversationTranscriber_Transcribing_get(param0: number, param1: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module transcription {
					export class Conversation {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.Conversation>;
						public endConversationAsync(): java.util.concurrent.Future<java.lang.Void>;
						public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
						public close(): void;
						public setAuthorizationToken(param0: string): void;
						public addParticipantAsync(param0: com.microsoft.cognitiveservices.speech.transcription.Participant): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.transcription.Participant>;
						public addParticipantAsync(param0: string): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.transcription.Participant>;
						public getConversationId(): string;
						public getAuthorizationToken(): string;
						public dispose(param0: boolean): void;
						public addParticipantAsync(param0: com.microsoft.cognitiveservices.speech.transcription.User): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.transcription.User>;
						public removeParticipantAsync(param0: com.microsoft.cognitiveservices.speech.transcription.User): java.util.concurrent.Future<java.lang.Void>;
						public getConversationImpl(): com.microsoft.cognitiveservices.speech.internal.Conversation;
						public removeParticipantAsync(param0: string): java.util.concurrent.Future<java.lang.Void>;
						public removeParticipantAsync(param0: com.microsoft.cognitiveservices.speech.transcription.Participant): java.util.concurrent.Future<java.lang.Void>;
						public static createConversationAsync(param0: com.microsoft.cognitiveservices.speech.SpeechConfig, param1: string): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.transcription.Conversation>;
						public static createConversationAsync(param0: com.microsoft.cognitiveservices.speech.SpeechConfig): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.transcription.Conversation>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.Conversation);
					}
					export module Conversation {
						export class PrivatePropertyCollection extends com.microsoft.cognitiveservices.speech.PropertyCollection {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.Conversation.PrivatePropertyCollection>;
							public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
							public constructor(param0: com.microsoft.cognitiveservices.speech.transcription.Conversation, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module transcription {
					export class ConversationTranscriber extends com.microsoft.cognitiveservices.speech.Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriber>;
						public transcribing: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriptionEventArgs>;
						public transcribed: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriptionEventArgs>;
						public canceled: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriptionCanceledEventArgs>;
						public leaveConversationAsync(): java.util.concurrent.Future<java.lang.Void>;
						public startTranscribingAsync(): java.util.concurrent.Future<java.lang.Void>;
						public constructor();
						public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
						public getSpeechRecognitionLanguage(): string;
						public constructor(param0: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
						public getOutputFormat(): com.microsoft.cognitiveservices.speech.OutputFormat;
						public stopTranscribingAsync(): java.util.concurrent.Future<java.lang.Void>;
						public joinConversationAsync(param0: com.microsoft.cognitiveservices.speech.transcription.Conversation): java.util.concurrent.Future<java.lang.Void>;
						public dispose(param0: boolean): void;
						public getTranscriberImpl(): com.microsoft.cognitiveservices.speech.internal.ConversationTranscriber;
					}
					export module ConversationTranscriber {
						export class CanceledHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberCanceledEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriber.CanceledHandlerImpl>;
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionCanceledEventArgs): void;
						}
						export class PrivatePropertyCollection extends com.microsoft.cognitiveservices.speech.PropertyCollection {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriber.PrivatePropertyCollection>;
							public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
							public constructor(param0: com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriber, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
						}
						export class ResultHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.ConversationTranscriberEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriber.ResultHandlerImpl>;
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionEventArgs): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module transcription {
					export class ConversationTranscriptionCanceledEventArgs extends com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriptionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriptionCanceledEventArgs>;
						public getReason(): com.microsoft.cognitiveservices.speech.CancellationReason;
						public getErrorDetails(): string;
						public toString(): string;
						public getErrorCode(): com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module transcription {
					export class ConversationTranscriptionEventArgs extends com.microsoft.cognitiveservices.speech.RecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriptionEventArgs>;
						public getResult(): com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriptionResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module transcription {
					export class ConversationTranscriptionResult extends com.microsoft.cognitiveservices.speech.SpeechRecognitionResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.ConversationTranscriptionResult>;
						public getUserId(): string;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.RecognitionResult);
						public close(): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.internal.ConversationTranscriptionResult);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module transcription {
					export class Participant {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.Participant>;
						public static from(param0: string, param1: string, param2: string): com.microsoft.cognitiveservices.speech.transcription.Participant;
						public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
						public close(): void;
						public setVoiceSignature(param0: string): void;
						public setPreferredLanguage(param0: string): void;
						public getParticipantImpl(): com.microsoft.cognitiveservices.speech.internal.Participant;
						public static from(param0: string, param1: string): com.microsoft.cognitiveservices.speech.transcription.Participant;
						public static from(param0: string): com.microsoft.cognitiveservices.speech.transcription.Participant;
					}
					export module Participant {
						export class PrivatePropertyCollection extends com.microsoft.cognitiveservices.speech.PropertyCollection {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.Participant.PrivatePropertyCollection>;
							public constructor(param0: com.microsoft.cognitiveservices.speech.transcription.Participant, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
							public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module transcription {
					export class User {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.transcription.User>;
						public close(): void;
						public getId(): string;
						public static fromUserId(param0: string): com.microsoft.cognitiveservices.speech.transcription.User;
						public getUserImpl(): com.microsoft.cognitiveservices.speech.internal.User;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module translation {
					export class SpeechTranslationConfig extends com.microsoft.cognitiveservices.speech.SpeechConfig {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.SpeechTranslationConfig>;
						public static fromEndpoint(param0: java.net.URI): com.microsoft.cognitiveservices.speech.translation.SpeechTranslationConfig;
						public static fromHost(param0: java.net.URI): com.microsoft.cognitiveservices.speech.translation.SpeechTranslationConfig;
						public close(): void;
						public static fromEndpoint(param0: java.net.URI, param1: string): com.microsoft.cognitiveservices.speech.translation.SpeechTranslationConfig;
						public getVoiceName(): string;
						public static fromAuthorizationToken(param0: string, param1: string): com.microsoft.cognitiveservices.speech.translation.SpeechTranslationConfig;
						public getTargetLanguages(): java.util.ArrayList<string>;
						public static fromEndpoint(param0: java.net.URI, param1: string): com.microsoft.cognitiveservices.speech.SpeechConfig;
						public static fromSubscription(param0: string, param1: string): com.microsoft.cognitiveservices.speech.SpeechConfig;
						public getImpl(): com.microsoft.cognitiveservices.speech.internal.SpeechTranslationConfig;
						public static fromHost(param0: java.net.URI, param1: string): com.microsoft.cognitiveservices.speech.SpeechConfig;
						public getImpl(): com.microsoft.cognitiveservices.speech.internal.SpeechConfig;
						public static fromEndpoint(param0: java.net.URI): com.microsoft.cognitiveservices.speech.SpeechConfig;
						public static fromHost(param0: java.net.URI, param1: string): com.microsoft.cognitiveservices.speech.translation.SpeechTranslationConfig;
						public static fromHost(param0: java.net.URI): com.microsoft.cognitiveservices.speech.SpeechConfig;
						public removeTargetLanguage(param0: string): void;
						public setVoiceName(param0: string): void;
						public static fromSubscription(param0: string, param1: string): com.microsoft.cognitiveservices.speech.translation.SpeechTranslationConfig;
						public addTargetLanguage(param0: string): void;
						public static fromAuthorizationToken(param0: string, param1: string): com.microsoft.cognitiveservices.speech.SpeechConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module translation {
					export class TranslationRecognitionCanceledEventArgs extends com.microsoft.cognitiveservices.speech.translation.TranslationRecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationRecognitionCanceledEventArgs>;
						public getReason(): com.microsoft.cognitiveservices.speech.CancellationReason;
						public getErrorDetails(): string;
						public toString(): string;
						public getErrorCode(): com.microsoft.cognitiveservices.speech.CancellationErrorCode;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module translation {
					export class TranslationRecognitionEventArgs extends com.microsoft.cognitiveservices.speech.RecognitionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationRecognitionEventArgs>;
						public getResult(): com.microsoft.cognitiveservices.speech.translation.TranslationRecognitionResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module translation {
					export class TranslationRecognitionResult extends com.microsoft.cognitiveservices.speech.RecognitionResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationRecognitionResult>;
						public getTranslations(): java.util.Map<string,string>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module translation {
					export class TranslationRecognizer extends com.microsoft.cognitiveservices.speech.Recognizer {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer>;
						public recognizing: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.translation.TranslationRecognitionEventArgs>;
						public recognized: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.translation.TranslationRecognitionEventArgs>;
						public canceled: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.translation.TranslationRecognitionCanceledEventArgs>;
						public synthesizing: com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<com.microsoft.cognitiveservices.speech.translation.TranslationSynthesisEventArgs>;
						public constructor(param0: com.microsoft.cognitiveservices.speech.translation.SpeechTranslationConfig);
						public getProperties(): com.microsoft.cognitiveservices.speech.PropertyCollection;
						public setAuthorizationToken(param0: string): void;
						public getVoiceName(): string;
						public getAuthorizationToken(): string;
						public getTargetLanguages(): java.util.ArrayList<string>;
						public dispose(param0: boolean): void;
						public recognizeOnceAsync(): java.util.concurrent.Future<com.microsoft.cognitiveservices.speech.translation.TranslationRecognitionResult>;
						public getRecoImpl(): com.microsoft.cognitiveservices.speech.internal.TranslationRecognizer;
						public getSpeechRecognitionLanguage(): string;
						public constructor(param0: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
						public removeTargetLanguage(param0: string): void;
						public constructor(param0: com.microsoft.cognitiveservices.speech.translation.SpeechTranslationConfig, param1: com.microsoft.cognitiveservices.speech.audio.AudioConfig);
						public addTargetLanguage(param0: string): void;
						public stopContinuousRecognitionAsync(): java.util.concurrent.Future<java.lang.Void>;
						public startContinuousRecognitionAsync(): java.util.concurrent.Future<java.lang.Void>;
					}
					export module TranslationRecognizer {
						export class CanceledHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.TranslationTexCanceledEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer.CanceledHandlerImpl>;
							public constructor();
							public constructor(param0: number, param1: boolean);
							public constructor(param0: com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer, param1: com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer);
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionCanceledEventArgs): void;
						}
						export class PrivatePropertyCollection extends com.microsoft.cognitiveservices.speech.PropertyCollection {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer.PrivatePropertyCollection>;
							public constructor(param0: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
							public constructor(param0: com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer, param1: com.microsoft.cognitiveservices.speech.internal.PropertyCollection);
						}
						export class ResultHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.TranslationTexEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer.ResultHandlerImpl>;
							public constructor();
							public constructor(param0: com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer, param1: com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer, param2: boolean);
							public constructor(param0: number, param1: boolean);
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.TranslationRecognitionEventArgs): void;
						}
						export class SynthesisHandlerImpl extends com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventListener {
							public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer.SynthesisHandlerImpl>;
							public constructor();
							public constructor(param0: number, param1: boolean);
							public Execute(param0: com.microsoft.cognitiveservices.speech.internal.TranslationSynthesisEventArgs): void;
							public constructor(param0: com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer, param1: com.microsoft.cognitiveservices.speech.translation.TranslationRecognizer);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module translation {
					export class TranslationSynthesisEventArgs extends com.microsoft.cognitiveservices.speech.SessionEventArgs {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationSynthesisEventArgs>;
						public getResult(): com.microsoft.cognitiveservices.speech.translation.TranslationSynthesisResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module translation {
					export class TranslationSynthesisResult {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.translation.TranslationSynthesisResult>;
						public close(): void;
						public getReason(): com.microsoft.cognitiveservices.speech.ResultReason;
						public toString(): string;
						public getAudio(): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module util {
					export class CloseGuard {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.util.CloseGuard>;
						public constructor();
						public closeObject(): void;
						public enterUseObject(): void;
						public exitUseObject(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module util {
					export class Contracts {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.util.Contracts>;
						public constructor();
						public static throwIfFileDoesNotExist(param0: string, param1: string): void;
						public static throwIfNullOrWhitespace(param0: string, param1: string): void;
						public static throwIfIllegalSubscriptionKey(param0: string, param1: string): void;
						public static throwIfIllegalLanguage(param0: string, param1: string): void;
						public static throwIfDirectoryDoesNotExist(param0: string, param1: string): void;
						public static throwIfNull(param0: any, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module util {
					export class EventHandler<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.util.EventHandler<any>>;
						/**
						 * Constructs a new instance of the com.microsoft.cognitiveservices.speech.util.EventHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvent(param0: any, param1: T): void;
						});
						public constructor();
						public onEvent(param0: any, param1: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module cognitiveservices {
			export module speech {
				export module util {
					export class EventHandlerImpl<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.microsoft.cognitiveservices.speech.util.EventHandlerImpl<any>>;
						public addEventListener(param0: com.microsoft.cognitiveservices.speech.util.EventHandler<T>): void;
						public updateNotificationOnConnected(param0: java.lang.Runnable): void;
						public removeEventListener(param0: com.microsoft.cognitiveservices.speech.util.EventHandler<T>): void;
						public fireEvent(param0: any, param1: T): void;
						public constructor(param0: java.util.concurrent.atomic.AtomicInteger);
						public isUpdateNotificationOnConnectedFired(): boolean;
					}
				}
			}
		}
	}
}

//Generics information:
//com.microsoft.cognitiveservices.speech.util.EventHandler:1
//com.microsoft.cognitiveservices.speech.util.EventHandlerImpl:1

