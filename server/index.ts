import express, { Application } from 'express';
import config from './config/server';
import http from 'http';  // Import http for typing the server

// Extend the Express Application interface to include the server property.
interface CustomApplication extends Application {
  server?: http.Server;
}

const app: CustomApplication = express();

if (process.env.NODE_ENV === 'development') {
  process.on('unhandledRejection', (unhandledRejection: any) => {
    throw unhandledRejection;
  });
}

// Our custom routes.
import helloRoutes from './routes/hello.server.route';
import defaultRoutes from './routes/default.server.route';
import errorRoutes from './routes/error.server.route';

app.use(helloRoutes);
app.use(defaultRoutes);
app.use(errorRoutes);

// Start the server.
const server = app.listen(config.server.listeningPort, () => {
  console.log(`Server listening on port ${config.server.listeningPort}.`);
});

// Attach the server to the app object.
app.server = server;

export default app;
