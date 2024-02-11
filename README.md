# WS Ping-Pong Test

This TypeScript project demonstrates how to test WebSocket client responsiveness by sending pings and expecting pongs using the `ws` library. It's designed for developers with a JavaScript/Node.js background to explore WebSocket Ping/Pong mechanisms in TypeScript.

## Prerequisites

Before starting, ensure you have the following installed:

- Node.js (Preferably the latest LTS version)
- npm (Normally comes with Node.js)

## Getting Started

Follow these steps to get the project up and running on your machine.

### Clone the Repository

Clone this repository to your local system:

```bash
git clone https://github.com/sapter/ws-ping-pong-test.git
cd ws-ping-pong-test
```

### Install Dependencies

Install the necessary npm packages:

```bash
npm install
```

This command installs all dependencies listed in `package.json`, including `ws` for WebSocket communication, `ts-node` for running TypeScript files directly, and `typescript`.

### Running the Project

Execute the project with:

```bash
npm start
```

This script runs `index.ts` using `ts-node`, eliminating the need to compile TypeScript to JavaScript manually. You'll see console outputs indicating the client's connection status, sent pings, and received pongs.

## Optional Local WebSocket Server

If you prefer to test against a local server, this project includes a minimal WebSocket server setup.

### Running the Local Server

Start the local WebSocket server by running:

```bash
npm run start-server
```

This will launch a WebSocket server on port 8080. The server logs messages received from clients and responds to pings with pongs automatically.

### Testing with the Local Server

To test your client against this local server, ensure you update the `index.ts` file to use the `local` URL:

```ts
const ws = new WebSocket(URLS.local); // Use the local server URL
```

## Project Structure

- `index.ts`: Main TypeScript file that sets up the WebSocket connection and handles pings/pongs.
- `package.json`: Specifies project metadata, dependencies, and scripts.
- `tsconfig.json`: Contains TypeScript compiler options.
- `README.md`: Provides instructions for setting up and running the project.
- (Optional) `server.ts`: Typescript file to run a minimal WebSocket server locally for testing

## Notes

- The default configuration connects to a public WebSocket echo server. You can change the WebSocket URL in \`index.ts\` to target a different server.
- This setup uses the `ws` npm package for node. It's the most used package in the JS world (65 million downloads weekly). They also provide an [example](https://www.npmjs.com/package/ws#how-to-detect-and-close-broken-connections) in their docs on how to use ping/pong to ensure unbroken connections. Feel free to setup a similar test with any otheer programming language/environment/library of your choice. Any library worth its salt will have ping/pong implemented as per spec.

## Troubleshooting

If you run into issues with \`ts-node\`, make sure TypeScript is installed globally (\`npm install -g typescript\`) or use the project's local version (\`npx ts-node index.ts\`).

---

Feel free to modify the code and experiment with different WebSocket servers or messages. Happy coding!
