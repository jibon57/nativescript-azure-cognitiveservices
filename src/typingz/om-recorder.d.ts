/// <reference path="android-declarations.d.ts"/>

declare module omrecorder {
	export abstract class AbstractRecorder extends omrecorder.Recorder {
		public static class: java.lang.Class<omrecorder.AbstractRecorder>;
		public pullTransport: omrecorder.PullTransport;
		public file: java.io.File;
		public startRecording(): void;
		public resumeRecording(): void;
		public stopRecording(): void;
		public constructor(param0: omrecorder.PullTransport, param1: java.io.File);
		public pauseRecording(): void;
	}
}

declare module omrecorder {
	export class AudioChunk {
		public static class: java.lang.Class<omrecorder.AudioChunk>;
		/**
		 * Constructs a new instance of the omrecorder.AudioChunk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			maxAmplitude(): number;
			toBytes(): native.Array<number>;
			toShorts(): native.Array<number>;
			readCount(): number;
			readCount(param0: number): void;
		});
		public constructor();
		public maxAmplitude(): number;
		public readCount(param0: number): void;
		public toShorts(): native.Array<number>;
		public readCount(): number;
		public toBytes(): native.Array<number>;
	}
	export module AudioChunk {
		export class Bytes extends omrecorder.AudioChunk {
			public static class: java.lang.Class<omrecorder.AudioChunk.Bytes>;
			public readCount(param0: number): void;
			public readCount(): number;
			public maxAmplitude(): number;
			public toBytes(): native.Array<number>;
			public toShorts(): native.Array<number>;
		}
		export class Shorts extends omrecorder.AudioChunk {
			public static class: java.lang.Class<omrecorder.AudioChunk.Shorts>;
			public readCount(param0: number): void;
			public readCount(): number;
			public maxAmplitude(): number;
			public toBytes(): native.Array<number>;
			public toShorts(): native.Array<number>;
		}
	}
}

declare module omrecorder {
	export class AudioRecordConfig {
		public static class: java.lang.Class<omrecorder.AudioRecordConfig>;
		/**
		 * Constructs a new instance of the omrecorder.AudioRecordConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			channelPositionMask(): number;
			audioSource(): number;
			frequency(): number;
			audioEncoding(): number;
			bitsPerSample(): number;
		});
		public constructor();
		public channelPositionMask(): number;
		public bitsPerSample(): number;
		public audioSource(): number;
		public frequency(): number;
		public audioEncoding(): number;
	}
	export module AudioRecordConfig {
		export class Default extends omrecorder.AudioRecordConfig {
			public static class: java.lang.Class<omrecorder.AudioRecordConfig.Default>;
			public audioEncoding(): number;
			public audioSource(): number;
			public frequency(): number;
			public channelPositionMask(): number;
			public bitsPerSample(): number;
			public constructor(param0: number, param1: number, param2: number, param3: number);
		}
	}
}

declare module omrecorder {
	export class BuildConfig {
		public static class: java.lang.Class<omrecorder.BuildConfig>;
		public static DEBUG: boolean;
		public static APPLICATION_ID: string;
		public static BUILD_TYPE: string;
		public static FLAVOR: string;
		public static VERSION_CODE: number;
		public static VERSION_NAME: string;
		public constructor();
	}
}

declare module omrecorder {
	export class MinimumBufferSize {
		public static class: java.lang.Class<omrecorder.MinimumBufferSize>;
	}
}

declare module omrecorder {
	export class OmRecorder {
		public static class: java.lang.Class<omrecorder.OmRecorder>;
		public static wav(param0: omrecorder.PullTransport, param1: java.io.File): omrecorder.Recorder;
		public static pcm(param0: omrecorder.PullTransport, param1: java.io.File): omrecorder.Recorder;
	}
}

declare module omrecorder {
	export class Pcm extends omrecorder.AbstractRecorder {
		public static class: java.lang.Class<omrecorder.Pcm>;
		public startRecording(): void;
		public resumeRecording(): void;
		public stopRecording(): void;
		public constructor(param0: omrecorder.PullTransport, param1: java.io.File);
		public pauseRecording(): void;
	}
}

declare module omrecorder {
	export class PullTransport {
		public static class: java.lang.Class<omrecorder.PullTransport>;
		/**
		 * Constructs a new instance of the omrecorder.PullTransport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			start(param0: java.io.OutputStream): void;
			stop(): void;
			pullableSource(): omrecorder.PullableSource;
		});
		public constructor();
		public start(param0: java.io.OutputStream): void;
		public stop(): void;
		public pullableSource(): omrecorder.PullableSource;
	}
	export module PullTransport {
		export abstract class AbstractPullTransport extends omrecorder.PullTransport {
			public static class: java.lang.Class<omrecorder.PullTransport.AbstractPullTransport>;
			public stop(): void;
			public start(param0: java.io.OutputStream): void;
			public pullableSource(): omrecorder.PullableSource;
		}
		export class Default extends omrecorder.PullTransport.AbstractPullTransport {
			public static class: java.lang.Class<omrecorder.PullTransport.Default>;
			public stop(): void;
			public constructor(param0: omrecorder.PullableSource, param1: omrecorder.WriteAction);
			public constructor(param0: omrecorder.PullableSource, param1: omrecorder.PullTransport.OnAudioChunkPulledListener, param2: omrecorder.WriteAction);
			public constructor(param0: omrecorder.PullableSource);
			public start(param0: java.io.OutputStream): void;
			public pullableSource(): omrecorder.PullableSource;
			public constructor(param0: omrecorder.PullableSource, param1: omrecorder.PullTransport.OnAudioChunkPulledListener);
		}
		export class Noise extends omrecorder.PullTransport.AbstractPullTransport {
			public static class: java.lang.Class<omrecorder.PullTransport.Noise>;
			public constructor(param0: omrecorder.PullableSource, param1: omrecorder.WriteAction, param2: omrecorder.Recorder.OnSilenceListener, param3: number);
			public constructor(param0: omrecorder.PullableSource, param1: omrecorder.PullTransport.OnAudioChunkPulledListener, param2: omrecorder.Recorder.OnSilenceListener, param3: number);
			public stop(): void;
			public constructor(param0: omrecorder.PullableSource, param1: omrecorder.Recorder.OnSilenceListener, param2: number);
			public constructor(param0: omrecorder.PullableSource);
			public start(param0: java.io.OutputStream): void;
			public constructor(param0: omrecorder.PullableSource, param1: omrecorder.Recorder.OnSilenceListener);
			public pullableSource(): omrecorder.PullableSource;
			public constructor(param0: omrecorder.PullableSource, param1: omrecorder.PullTransport.OnAudioChunkPulledListener, param2: omrecorder.WriteAction, param3: omrecorder.Recorder.OnSilenceListener, param4: number);
		}
		export class OnAudioChunkPulledListener {
			public static class: java.lang.Class<omrecorder.PullTransport.OnAudioChunkPulledListener>;
			/**
			 * Constructs a new instance of the omrecorder.PullTransport$OnAudioChunkPulledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onAudioChunkPulled(param0: omrecorder.AudioChunk): void;
			});
			public constructor();
			public onAudioChunkPulled(param0: omrecorder.AudioChunk): void;
		}
	}
}

declare module omrecorder {
	export class PullableSource extends omrecorder.Source {
		public static class: java.lang.Class<omrecorder.PullableSource>;
		/**
		 * Constructs a new instance of the omrecorder.PullableSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			pullSizeInBytes(): number;
			isEnableToBePulled(param0: boolean): void;
			isEnableToBePulled(): boolean;
			preparedToBePulled(): globalAndroid.media.AudioRecord;
			audioRecord(): globalAndroid.media.AudioRecord;
			config(): omrecorder.AudioRecordConfig;
			minimumBufferSize(): number;
		});
		public constructor();
		public audioRecord(): globalAndroid.media.AudioRecord;
		public config(): omrecorder.AudioRecordConfig;
		public preparedToBePulled(): globalAndroid.media.AudioRecord;
		public isEnableToBePulled(param0: boolean): void;
		public minimumBufferSize(): number;
		public pullSizeInBytes(): number;
		public isEnableToBePulled(): boolean;
	}
	export module PullableSource {
		export class AutomaticGainControl extends omrecorder.PullableSource.Base {
			public static class: java.lang.Class<omrecorder.PullableSource.AutomaticGainControl>;
			public preparedToBePulled(): globalAndroid.media.AudioRecord;
			public isEnableToBePulled(param0: boolean): void;
			public isEnableToBePulled(): boolean;
			public constructor(param0: omrecorder.PullableSource);
			public pullSizeInBytes(): number;
		}
		export class Base extends omrecorder.PullableSource {
			public static class: java.lang.Class<omrecorder.PullableSource.Base>;
			public preparedToBePulled(): globalAndroid.media.AudioRecord;
			public isEnableToBePulled(param0: boolean): void;
			public audioRecord(): globalAndroid.media.AudioRecord;
			public isEnableToBePulled(): boolean;
			public config(): omrecorder.AudioRecordConfig;
			public minimumBufferSize(): number;
			public pullSizeInBytes(): number;
		}
		export class Default extends omrecorder.Source.Default implements omrecorder.PullableSource {
			public static class: java.lang.Class<omrecorder.PullableSource.Default>;
			public preparedToBePulled(): globalAndroid.media.AudioRecord;
			public isEnableToBePulled(param0: boolean): void;
			public constructor(param0: omrecorder.AudioRecordConfig, param1: number);
			public constructor(param0: omrecorder.AudioRecordConfig);
			public isEnableToBePulled(): boolean;
			public audioRecord(): globalAndroid.media.AudioRecord;
			public pullSizeInBytes(): number;
			public config(): omrecorder.AudioRecordConfig;
			public minimumBufferSize(): number;
		}
		export class NoiseSuppressor extends omrecorder.PullableSource.Base {
			public static class: java.lang.Class<omrecorder.PullableSource.NoiseSuppressor>;
			public preparedToBePulled(): globalAndroid.media.AudioRecord;
			public isEnableToBePulled(param0: boolean): void;
			public isEnableToBePulled(): boolean;
			public constructor(param0: omrecorder.PullableSource);
			public pullSizeInBytes(): number;
		}
	}
}

declare module omrecorder {
	export class Recorder {
		public static class: java.lang.Class<omrecorder.Recorder>;
		/**
		 * Constructs a new instance of the omrecorder.Recorder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			startRecording(): void;
			stopRecording(): void;
			pauseRecording(): void;
			resumeRecording(): void;
		});
		public constructor();
		public startRecording(): void;
		public resumeRecording(): void;
		public stopRecording(): void;
		public pauseRecording(): void;
	}
	export module Recorder {
		export class OnSilenceListener {
			public static class: java.lang.Class<omrecorder.Recorder.OnSilenceListener>;
			/**
			 * Constructs a new instance of the omrecorder.Recorder$OnSilenceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onSilence(param0: number): void;
			});
			public constructor();
			public onSilence(param0: number): void;
		}
	}
}

declare module omrecorder {
	export class Source {
		public static class: java.lang.Class<omrecorder.Source>;
		/**
		 * Constructs a new instance of the omrecorder.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			audioRecord(): globalAndroid.media.AudioRecord;
			config(): omrecorder.AudioRecordConfig;
			minimumBufferSize(): number;
		});
		public constructor();
		public audioRecord(): globalAndroid.media.AudioRecord;
		public config(): omrecorder.AudioRecordConfig;
		public minimumBufferSize(): number;
	}
	export module Source {
		export class Default extends omrecorder.Source {
			public static class: java.lang.Class<omrecorder.Source.Default>;
			public audioRecord(): globalAndroid.media.AudioRecord;
			public config(): omrecorder.AudioRecordConfig;
			public minimumBufferSize(): number;
		}
	}
}

declare module omrecorder {
	export class ThreadAction {
		public static class: java.lang.Class<omrecorder.ThreadAction>;
		/**
		 * Constructs a new instance of the omrecorder.ThreadAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			execute(param0: java.lang.Runnable): void;
		});
		public constructor();
		public execute(param0: java.lang.Runnable): void;
	}
}

declare module omrecorder {
	export class UiThread extends omrecorder.ThreadAction {
		public static class: java.lang.Class<omrecorder.UiThread>;
		public execute(param0: java.lang.Runnable): void;
	}
}

declare module omrecorder {
	export class Wav extends omrecorder.AbstractRecorder {
		public static class: java.lang.Class<omrecorder.Wav>;
		public startRecording(): void;
		public resumeRecording(): void;
		public stopRecording(): void;
		public constructor(param0: omrecorder.PullTransport, param1: java.io.File);
		public pauseRecording(): void;
	}
}

declare module omrecorder {
	export class WavHeader {
		public static class: java.lang.Class<omrecorder.WavHeader>;
		public toBytes(): native.Array<number>;
	}
}

declare module omrecorder {
	export class WriteAction {
		public static class: java.lang.Class<omrecorder.WriteAction>;
		/**
		 * Constructs a new instance of the omrecorder.WriteAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			execute(param0: omrecorder.AudioChunk, param1: java.io.OutputStream): void;
		});
		public constructor();
		public execute(param0: omrecorder.AudioChunk, param1: java.io.OutputStream): void;
	}
	export module WriteAction {
		export class Default extends omrecorder.WriteAction {
			public static class: java.lang.Class<omrecorder.WriteAction.Default>;
			public execute(param0: omrecorder.AudioChunk, param1: java.io.OutputStream): void;
			public constructor();
		}
	}
}

//Generics information:

