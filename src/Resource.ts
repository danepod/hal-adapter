import { Entity as BaseEntity } from "express-hypermedia";
import { Link } from "./Link";
import { Provider } from "./Provider";

/**
 * A Resource Object represents a resource. It has two reserved properties:
 * (1)  "_links": contains links to other resources.
 * (2)  "_embedded": contains embedded resources.
 */
export abstract class Resource extends BaseEntity {
    /**
     * The reserved "_links" property is OPTIONAL.
     *
     * It is an object whose property names are link relation types (as
     * defined by [RFC5988]) and values are either a Link Object or an array
     * of Link Objects.  The subject resource of these links is the Resource
     * Object of which the containing "_links" object is a property.
     */
    _links?: {
        [relation: string]: Link | Link[];
    };

    /**
     * The reserved "_links" property is OPTIONAL.
     *
     * It is an object whose property names are link relation types (as
     * defined by [RFC5988]) and values are either a Link Object or an array
     * of Link Objects.  The subject resource of these links is the Resource
     * Object of which the containing "_links" object is a property.
     */
    _embedded?: {
        [relation: string]: Resource | Resource[]
    };

    constructor(provider: Provider, options?: object) {
        super();

        this._links = provider.getLinks(options);
        this._embedded = provider.getEmbedded(options);
    }
}
