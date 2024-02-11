import { WebSocket } from "ws";

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`You said: ${message}`);
  });

  ws.on("ping", () => {
    console.log("Ping received");
  });
});

console.log("WebSocket server listening on port 8080");
