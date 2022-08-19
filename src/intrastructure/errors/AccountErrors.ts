import {CustomError} from "./error.interface";

export class INVALID_ACCOUNT_ERROR extends CustomError {
    constructor(message?: string) {
        if(!message) message = 'invalid account'
        super(message);
        this.errorName = 'INVALID_ACCOUNT_ERROR';
    }
};

export class INVALID_FUNDS_AMOUNT_ERROR extends CustomError {
    constructor(message?: string) {
        message = message || 'invalid account funds'
        super(message);
        this.errorName = "INVALID_FUNDS_AMOUNT_ERROR"
    }
}

export class ACCOUNT_NOT_FOUND_ERROR extends CustomError {
    constructor(message?: string) {
        message = message || 'account not found'
        super(message);
        this.errorName = "ACCOUNT_NOT_FOUND_ERROR"
    }
}