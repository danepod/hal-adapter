import { Provider as BaseProvider } from "express-hypermedia";
import { Link } from "./Link";
import { Resource } from "./Resource";

export abstract class Provider extends BaseProvider {
    abstract entity: Resource;

    constructor(options?: object, returnEntity: boolean = true) {
        super();
    }

    getLinks(options?: object): {
        [relation: string]: Link | Link[];
    } | undefined {
        return undefined;
    }

    getEmbedded(options?: object): {
        [relation: string]: Resource | Resource[]
    } | undefined {
        return undefined;
    }
}
