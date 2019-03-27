/**
 * Simple logger that just writes to the console.
 */
import {ILogger} from './ILogger';

export class ConsoleLogger implements ILogger {

    public readonly name: string = 'console-logger';

    public notice(msg: string, ...args: any[]) {
        console.log(msg, ...args);
    }

    public info(msg: string, ...args: any[]) {
        console.log(msg, ...args);
    }

    public warn(msg: string, ...args: any[]) {
        console.warn(msg, ...args);
    }

    public error(msg: string, err: Error, arg0?: any, arg1?: any, arg2?: any) {
        console.error(msg, err, arg0, arg1, arg2);
    }

    public verbose(msg: string, ...args: any[]) {
        console.log(msg, ...args);
    }

    public debug(msg: string, ...args: any[]) {
        console.log(msg, ...args);
    }

    public async sync(): Promise<void> {
        // noop
    }

}
