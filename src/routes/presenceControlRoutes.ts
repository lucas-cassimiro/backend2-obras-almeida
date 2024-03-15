import { Router } from "express";

import { PresenceControlController } from "@src/app/controllers/PresenceControlController";

const presenceControlRoutes = Router();

presenceControlRoutes.post("/", new PresenceControlController().create);

export default presenceControlRoutes;
