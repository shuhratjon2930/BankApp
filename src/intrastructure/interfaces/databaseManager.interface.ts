export interface DatabaseManagerInterface {
    execute(queryText:string): Promise<object>;
}