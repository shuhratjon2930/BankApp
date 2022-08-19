export function validateAccountNumber(accountNumber: string) : void | never {
    //    TODO some business logic for accountNumber
    if(accountNumber == '') throw new Error('accountNumber is empty')
    return;
}

export function validateFundsAmount(fundsAmount: number): void | never {
    if(fundsAmount < 10) throw new Error('Could not be less than 10');
    else if(fundsAmount > 1000) throw new Error('Could not be greater than 1000');
    return;
}