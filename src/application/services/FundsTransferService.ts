import {TransferState} from "../../intrastructure/enums/TransferState";
import {ACCOUNT_NOT_FOUND_ERROR} from "../../intrastructure/errors/AccountErrors";
import {AccountInterface} from "../../domain/interfaces/account.interface";
import {AccountRepositoryInterface} from "../../domain/interfaces/accountRepository.interface";


export class FundsTransferService {
    constructor(private accountReposity: AccountRepositoryInterface) {
    }

    async transfer(senderAccountNumber:string, receiverAccountNumber:string, fundsAmount:number): Promise<TransferState> {
        try {
            const senderAccount: AccountInterface = await this.accountReposity.getAccountByAccountNumber(senderAccountNumber);
            const transferState = await senderAccount.transferTo(receiverAccountNumber);
            return transferState;
        } catch(error) {
            if(error instanceof ACCOUNT_NOT_FOUND_ERROR) {
            //    TODO
            }

            return TransferState.REJECTED;
        }
    }
}