import { Provider as BaseProvider } from 'express-hypermedia';
import { Resource } from './Resource';
import { Link } from './Link';

export abstract class Provider extends BaseProvider {
    entity!: Resource;

    constructor(
        options?: {
            properties: string[],
            [option: string]: any
        },
        returnResource: boolean = true
    ) {
        super();

        if (returnResource) {
            this.entity = new Resource(this, options);
        }
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

    getProperty(property: string, options?: Object): any {
        return undefined;
    }
}