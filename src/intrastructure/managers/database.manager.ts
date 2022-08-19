import {DatabaseManagerInterface} from "../interfaces/databaseManager.interface";

export class DatabaseManager implements DatabaseManagerInterface {
    execute(queryText: string): Promise<object> {
        return new Promise((resolve, reject)=> {});
    }
}