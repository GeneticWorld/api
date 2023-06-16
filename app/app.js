import express from "express";
import message from "./config/message.js";
import enviroment from "./config/enviroments";
import allRoutes from "./routes/email.routes.js";
import allRoutesLaboratory from "./routes/laboratory.routes.js";
import allRoutesPQRS from "./routes/pqrs.routes.js";

const app = express();

app.set("PORT", process.env.PORT || 3000);

app.use(express.json());
app.use('/api',allRoutes);
app.use('/labApi', allRoutesLaboratory);
app.use('/PQRS', allRoutesPQRS);

export default app;