import {CustomError} from "./error.interface";


export class TRANSFER_REJECTED_ERROR extends CustomError {
    constructor(message?: string) {
        message = message || 'transfer rejected'
        super(message);
        this.errorName = 'TRANSFER_REJECTED_ERROR'
    }
}