export interface ErrorInterface {
    getMessage(): string;
    getStack(): string | undefined;
    getName(): string;
}