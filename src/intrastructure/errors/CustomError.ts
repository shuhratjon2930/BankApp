import {ErrorInterface} from "../interfaces/error.interface";

export class CustomError extends Error implements ErrorInterface {
    protected errorName: string;
    protected constructor(message: string) {
        super(message);
    }
    getMessage(): string {
        return super.message
    }

    getName(): string {
        return this.errorName;
    }

    getStack(): string | undefined {
        return super.stack;
    }


}