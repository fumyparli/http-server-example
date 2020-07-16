const http = require("http");

const server = http
    .createServer((req, res) => {
        console.log("executing server1");
        res.write("<h1>Hi Hi</h1>");
        res.write("<h1>Hello hello?</h1>");
        res.end("Ha Ha");
        console.log("executing server2");
    })
    .listen(8080, () => {
        console.log("executing server on port 8080.");
    });
server.on("listening", () => {
    console.log("executing server on port 8080.");
});
server.on("error", (error) => {
    console.error(error);
});
