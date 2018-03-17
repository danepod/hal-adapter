import { Entity as BaseEntity } from 'express-hypermedia';
import { Link } from './Link';
import { Provider } from './Provider';

export class Resource extends BaseEntity {
    _links?: {
        [relation: string]: Link | Link[];
    };

    _embedded?: {
        [relation: string]: Resource | Resource[]
    };

    [property: string]: any;

    constructor(
        provider: Provider,
        options?: {
            properties: string[],
            [option: string]: any
        }
    ) {
        super();

        if (options) {
            for (const property of options.properties) {
                this[property] = provider.getProperty(property, options);
            }
        }

        this._links = provider.getLinks(options);

        this._embedded = provider.getEmbedded(options);
    }
}