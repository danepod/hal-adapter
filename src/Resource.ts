import { Entity as BaseEntity } from "express-hypermedia";
import { Link } from "./Link";
import { Provider } from "./Provider";

export abstract class Resource extends BaseEntity {
    _links?: {
        [relation: string]: Link | Link[];
    };

    _embedded?: {
        [relation: string]: Resource | Resource[]
    };

    constructor(provider: Provider, options?: object) {
        super();

        this._links = provider.getLinks(options);
        this._embedded = provider.getEmbedded(options);
    }
}
