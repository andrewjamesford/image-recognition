# Image Recognition App

This is an example application that demonstrates how to implement image recognition in a web app using React for the frontend and Node.js for the backend.

## Features

- Form posting in React
- Design in TailwindCSS
- Azure Computer Vision Image analysis endpoint in Node.js
- Use of `fetch` for sending HTTP requests

## Getting Started

1. Clone the repository.
2. In the client directory, run `npm install` to install the frontend dependencies.
3. In the server directory, run `npm install` to install the backend dependencies.
4. In the server directory, create a `.env` file copying the `.env.example` file.
5. In the `.env` file, set the `COMPUTER_VISION_SUBSCRIPTION_KEY` and `COMPUTER_VISION_ENDPOINT` variables to the values of your Azure Computer Vision subscription key and endpoint.
6. In the server directory, run `npm start` to start the backend server.
7. In the client directory, run `npm start` to start the frontend server.

## Usage

1. Open the app in your web browser.
2. Select a public image url to send to the image recognition API.
3. Click the "Process" button to upload the image and analyze it.

## API

The app includes the following API endpoint:

- `POST https://<REPLACE WITH YOURS>.cognitiveservices.azure.com/computervision/imageanalysis:analyze`: Analyzes a public image file by URL.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the GPL-3.0 License.
