import {TransferState} from "../../intrastructure/enums/TransferState";
import {CreditState} from "../../intrastructure/enums/CreditState";

export interface AccountInterface {
    transferTo(receiverAccountNumber: string): TransferState;
    credit(fundsAmount: number): CreditState;
}