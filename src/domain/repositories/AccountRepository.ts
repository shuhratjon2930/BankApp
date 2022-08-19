import {AccountRepositoryInterface} from "../interfaces/accountRepository.interface";
import {AccountInterface} from "../interfaces/account.interface";
import {DatabaseManagerInterface} from "../../intrastructure/interfaces/databaseManager.interface";
import {AccountService} from "../services/account.service";
import {ACCOUNT_NOT_FOUND_ERROR} from "../../intrastructure/errors/AccountErrors";

export class AccountRepository implements AccountRepositoryInterface{
    constructor(private readonly dbManager: DatabaseManagerInterface) {
    }

    async getAccountByAccountNumber(accountNumber: string): Promise<AccountInterface>| never {
        try {
            const queryText: string = `select * from accounts where account_number = ${accountNumber}`;
            const accountData = await this.dbManager.execute(queryText);
            const account = new AccountService()
            Object.entries(accountData).forEach(([key,value])=>{ account.build(key, value)})
            return account;
        } catch (error) {
            throw new ACCOUNT_NOT_FOUND_ERROR();
        }
    }
}