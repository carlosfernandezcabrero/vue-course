import history from "connect-history-api-fallback";
import cors from "cors";
import express from "express";
import { AuthRouter } from "./www/routes/auth.controller.js";
import { EventRoutes } from "./www/routes/event.controller.js";
import { UserRoutes } from "./www/routes/user.controller.js";
import { BASE_URL } from "./www/routes/variables.js";

// Instance App
const app = express();

// Middleware ¡It is important that this is before the routes!
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// Routes
app.use(`${BASE_URL}events`, EventRoutes);
app.use(`${BASE_URL}users`, UserRoutes);
app.use(`${BASE_URL}`, AuthRouter);

// Middleware
app.use(history());
app.use(express.static(`${process.cwd()}/public`));

// Starting server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server ready on port ${listener.address().port} !!!`);
});
