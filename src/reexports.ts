// HAL Adapter reexports ------------------------------------------------------
import { Link } from "./Link";
import { Provider } from "./Provider";
import { Query } from "./Query";
import { Resource } from "./Resource";

const mime = "application/hal+json";

export {
    Resource,
    Provider,
    Link,
    Query,
    mime
};
