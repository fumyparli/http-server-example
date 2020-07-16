const http = require("http");

const server = http
    .createServer((req, res) => {
        console.log("�븳湲��븳湲�1");
        res.write("<h1>hi hi</h1>");
        res.write("<h1>hello hello?</h1>");
        res.end("ha ha");
        console.log("�븳湲��븳湲�2");
    })
    .listen(8080, () => {
        console.log("8080 �꽌踰꾩뿉�꽌 ���湲곗쨷�엫.");
    });
server.on("listening", () => {
    console.log("8080踰� �룷�듃�뿉�꽌 ���湲곗쨷");
});
server.on("error", (error) => {
    console.error(error);
});
