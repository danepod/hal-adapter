import { Action } from "express-hypermedia";

/**
 * This is a Link Object to be used for Query Templates. Besides serializing
 * to a Link-like object, it provides a static validate() as well as an
 * execute() method.
 */
export abstract class Query extends Action {
    /**
     * The "href" property is REQUIRED.
     *
     * Its value is either a URI [RFC3986] or a URI Template [RFC6570].
     */
    abstract href: string;

    /**
     * The "templated" property is OPTIONAL.
     *
     * Its value is boolean and SHOULD be true when the Link Object's
     * "href" property is a URI Template.
     */
    templated?: boolean = true;

    /**
     * The "type" property is OPTIONAL.
     * Its value is a string used as a hint to indicate the media type
     * expected when dereferencing the target resource.
     */
    type?: string;

    /**
     * The "deprecation" property is OPTIONAL.
     *
     * Its presence indicates that the link is to be deprecated (i.e.
     * removed) at a future date.  Its value is a URL that SHOULD
     * provide further information about the deprecation.
     *
     * A client SHOULD provide some notification (for example, by logging a
     * warning message) whenever it traverses over a link that has this
     * property.  The notification SHOULD include the deprecation property's
     * value so that a client manitainer can easily find information about
     * the deprecation.
     */
    deprecation?: string;

    /**
     * The "name" property is OPTIONAL.
     *
     * Its value MAY be used as a secondary key for selecting Link Objects which share the same relation type.
     */
    name?: string;

    /**
     * The "profile" property is OPTIONAL.
     *
     * Its value is a string which is a URI that hints about the profile (as
     * defined by [I-D.wilde-profile-link](https://tools.ietf.org/html/draft-wilde-profile-link-04)) of the target resource.
     */
    profile?: string;

    /**
     * The "title" property is OPTIONAL.
     *
     * Its value is a string and is intended for labelling the link with a
     * human-readable identifier (as defined by [RFC5988]).
     */
    title?: string;

    /**
     * The "hreflang" property is OPTIONAL.
     *
     * Its value is a string and is intended for indicating the language of
     * the target resource (as defined by [RFC5988]).
     */
    hreflang?: string;

    /**
     * Create a HAL templated Link object
     * @param href URL template
     */
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
