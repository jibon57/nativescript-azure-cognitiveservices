declare module native { export class Array<T> { constructor(); length: number;[index: number]: T; } }

import globalAndroid = android;

declare module "nativescript-worker-loader!*" {
    const content: any;
    export = content;
}

