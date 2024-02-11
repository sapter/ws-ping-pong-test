import { WebSocket } from "ws";

// Test any of the following URLs. All should receive a pong in response to the ping.
// Enswitch is the only one that doesn't respond to pings.
const URLS = {
  websocketEcho: "wss://websocket-echo.com/",
  socketsbay: "wss://socketsbay.com/wss/v2/1/demo/",
  local: "ws://localhost:8080",
  Enswitch: "wss://enswitch.com", // Provide valid Enswitch URL
};

// Create a new WebSocket connection
const ws = new WebSocket(URLS.websocketEcho); // Use any of the URLs above

// Send a ping every 5 seconds
const pingInterval = setInterval(() => {
  // You can choose to send anything as the ping message; we chose the current timestamp
  ws.ping(new Date().getTime().toString());
}, 5000);

// Handle open connection
ws.onopen = () => {
  console.log("Connected to server!");
};

// Handle incoming messages
ws.onmessage = (event) => {
  const message = event.data;
  console.log(`Received message: ${message}`);
};

// Handle errors
ws.onerror = (error) => {
  console.error("Error:", error);
};

// Handle close connection
ws.onclose = () => {
  clearInterval(pingInterval);
  console.log("Connection closed.");
};

ws.on("pong", () => {
  console.log("Pong received");
});
