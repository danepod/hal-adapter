import { Provider as BaseProvider } from "express-hypermedia";
import { Link } from "./Link";
import { Resource } from "./Resource";

/**
 * Provider class used to fill the gap between business logic and HAL Resources. They are used to fill in the properties of a HAL Resource by providing methods that call business logic and format the output to be valid HAL.
 *
 * This is the HAL Provider base class. This abstract class defines the methods each HAL Provider can implement. An actual HAL Provider does not need to implement every method as some of the properties may be intentionally left undefined in a HAL response. In the same fashion, you may want to define additional methods for other properties not present in this base Provider. Extend on this class to create actual HAL Provider classes and implement every method you need to use.
 */
export abstract class Provider extends BaseProvider {
    abstract entity: Resource;

    /**
     * Creates a HAL Provider object
     * @param options Object used for resource generation, for example to set an id to be fetched. The getter methods of the Provider then use this saame object.
     */
    constructor(options?: object) {
        super();
    }

    /**
     * Describes links to other resources.
     * @param options Object containing all data the Provider needs to fill in the links
     */
    getLinks(options?: object): {
        [relation: string]: Link | Link[];
    } | undefined {
        return undefined;
    }

    /**
     * Describes embedded resources.
     * @param options Object containing all data the Provider needs to fill in embedded resources
     */
    getEmbedded(options?: object): {
        [relation: string]: Resource | Resource[]
    } | undefined {
        return undefined;
    }
}
