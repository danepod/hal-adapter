import { Action } from "express-hypermedia";

export abstract class Query extends Action {
    abstract href: string;

    templated?: boolean = true;

    type?: string;

    deprecation?: string;

    name?: string;

    profile?: string;

    title?: string;

    hreflang?: string;

    constructor(options?: object) {
        super(options);
    }

    toJSON(): object {
        return {
            href: this.href,
            templated: this.templated,
            deprecation: this.deprecation,
            name: this.name,
            profile: this.profile,
            title: this.title,
            hreflang: this.hreflang
        };
    }
}
