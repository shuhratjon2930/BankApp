import {FundsTransferService} from "../../application/services/FundsTransferService";
import {TransferState} from "../../intrastructure/enums/TransferState";
import {INVALID_ACCOUNT_ERROR, INVALID_FUNDS_AMOUNT_ERROR} from "../../intrastructure/errors/AccountErrors";
import {TRANSFER_REJECTED_ERROR} from "../../intrastructure/errors/TransferErrors";
import {TransferDto} from "../dtos/transfer.dto";
import {validateAccountNumber, validateFundsAmount} from "../../domain/validations/account.validate";

export class TransferController {
    constructor(private readonly fundsTransferService: FundsTransferService) {
    }

    async createTransfer(transferDto: TransferDto) {
        try {
            const {senderAccountNumber, receiverAccountNumber, fundsAmount} = transferDto;
            validateAccountNumber(senderAccountNumber);
            validateAccountNumber(receiverAccountNumber);
            validateFundsAmount(fundsAmount);
            const stateOfTransfer: TransferState = await this.fundsTransferService.transfer(senderAccountNumber, receiverAccountNumber, fundsAmount);
            switch (stateOfTransfer) {
                case TransferState.ACCEPTED:
                    // TODO
                    break;
                case TransferState.REJECTED:
                    throw new TRANSFER_REJECTED_ERROR();
            }
        }
        catch(error) {
            if(error instanceof INVALID_ACCOUNT_ERROR) {
            //    TODO
            } else if(error instanceof  INVALID_FUNDS_AMOUNT_ERROR) {
            //    TODO
            } else if(error instanceof TRANSFER_REJECTED_ERROR) {
            //    TODO
            }
        }
    }
}