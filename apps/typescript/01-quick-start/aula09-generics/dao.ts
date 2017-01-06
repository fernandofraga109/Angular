import { DaoInterface} from './dao.interface';

export class Dao<T> implements DaoInterface<T> {

    tableName: string = '';

    insert(object: T): boolean {
        console.log('inserting...');
        return true;
    }

    update(object: T): boolean {
        console.log('updating...');
        return true;
    }

    delete(id: number): T {
        console.log('deleting...');
        return null;
    }

    find(id: number): T {
        console.log('finding...');
        return null;
    }

    findAll(): Array<T> {
        console.log('findingAll...');
        return null;
    }

}