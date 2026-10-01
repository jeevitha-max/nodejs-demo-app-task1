const http = require("http");
const { spawn } = require("child_process");

const server = spawn(process.execPath, ["server.js"], {
  env: { ...process.env, PORT: "3001" }
});

setTimeout(() => {
  http.get("http://localhost:3001/health", (res) => {
    let data = "";
    res.on("data", chunk => data += chunk);
    res.on("end", () => {
      if (res.statusCode === 200 && JSON.parse(data).status === "UP") {
        console.log("Test passed: /health returned UP");
        server.kill();
        process.exit(0);
      } else {
        console.error("Test failed");
        server.kill();
        process.exit(1);
      }
    });
  }).on("error", (err) => {
    console.error("Test failed:", err.message);
    server.kill();
    process.exit(1);
  });
}, 1000);
