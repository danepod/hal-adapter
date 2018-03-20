export class Link {
    href: string;

    templated?: boolean;

    type?: string;

    deprecation?: string;

    name?: string;

    profile?: string;

    title?: string;

    hreflang?: string;

    constructor(href: string) {
        this.href = href;
    }
}
