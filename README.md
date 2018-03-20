# hal-adapter

> Create HAL Responses using express-hypermedia

This library provides additional functionality to create [HAL](http://stateless.co/hal_specification.html) documents for the [express-hypermedia](https://github.com/danepod/express-hypermedia) library.

# Example
An example of the usage of this library can be found as part of the `express-hypermedia` sample project [movie-database](https://github.com/danepod/movie-database). This project features a small API for movies, demonstrating a number of features of `express-hypermedia`, including the usage of external format adapters, such as this one for HAL.

# Installation
Because `hal-adapter` is part of my bachelor's thesis I cannot open-source and publish it until I finished the work on my thesis. As a result of this, it is not available through npm yet. For now, the installation process is as follows:

*Requirements: NodeJS 8.9.4, Typescript 2.7.2*

1. Download this repository (*the following commands assume you use a terminal with the repository's folder active*)
2. Install dependencies: `npm install`, this also automatically compiles the project via TypeScript
3. (*Temporary*) To use `hal-adapter` within another TS/JS project:
   
   Execute `npm link` inside the root folder of `hal-adapter`. Next, you change to the folder of your project that you want to use `hal-adapter` with and execute `npm link hal-adapter`. This way, npm generates a Symlink to the library within the project's node_modules folder. You can now use `hal-adapter` as if it were normally installed through npm.

**As soon as work on the bachelor's thesis is complete and I recieved the final rating by my university, I will publish the module to npm and update this paragraph accordingyly.**

# See also
* The IETF [Internet-Draft](https://tools.ietf.org/html/draft-kelly-json-hal-08#section-3) proposing and describing the HAL format. Parts of this were used for the JSDoc documentation in this adapter.