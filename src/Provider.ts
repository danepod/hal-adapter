import { Provider as BaseProvider } from 'express-hypermedia';
import { Resource } from './Resource';
import { Link } from './Link';

export abstract class Provider extends BaseProvider {
    abstract entity: Resource;

    constructor(options?: Object, returnEntity: boolean = true) {
        super();
    }

    getLinks(options?: Object): {
        [relation: string]: Link | Link[];
    } | undefined {
        return undefined;
    }

    getEmbedded(options?: Object): {
        [relation: string]: Resource | Resource[]
    } | undefined {
        return undefined;
    }
}