import {AccountInterface} from "./account.interface";

export interface AccountRepositoryInterface {
    getAccountByAccountNumber(accountNumber: string) :Promise<AccountInterface> | never;
}