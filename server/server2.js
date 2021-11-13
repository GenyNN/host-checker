const Hapi = require("hapi");
const api = require("api");

// define some constants to make life easier
const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 8081;
const RADIX = 10;
const DEFAULT_HOST_NAME = "California";
// define your server
const server = Hapi.server({
    host: process.env.HOST || DEFAULT_HOST,
    port: parseInt(process.env.PORT, RADIX) || DEFAULT_PORT,
    app: {"hostName": DEFAULT_HOST_NAME},
    routes: {
        cors: true
    }
});

const myServer = async () => {
    try {
        await server.register(api);

        await server.start();

        console.log(`Hapi server running at ${server.info.uri}`);

    } catch (err) {

        console.log("Hapi error starting server", err);
    }
};

myServer(); // don't forget to call it