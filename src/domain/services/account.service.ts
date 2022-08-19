import {AccountInterface} from "../interfaces/account.interface";
import {TransferState} from "../../intrastructure/enums/TransferState";
import {AccountEntity} from "../entities/acount";
import {CreditState} from "../../intrastructure/enums/CreditState";

export class AccountService implements AccountInterface {
    private accountData: AccountEntity;
    constructor() {
    }

    build<ValueType>(key:string, value: ValueType) {
        // TODO set accountData values
        return this;
    }
    transferTo(receiverAccountNumber: string): TransferState {
        // TODO get
        return TransferState.REJECTED;
    }

    credit(fundsAmount: number): CreditState {
        return CreditState.REJECTED;
    }
}