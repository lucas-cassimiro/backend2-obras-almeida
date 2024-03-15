import { Router } from "express";

import { SubservicesController } from "@src/app/controllers/SubservicesController";

const subservicesRoutes = Router();

subservicesRoutes.get("/", new SubservicesController().index);
subservicesRoutes.get("/:id", new SubservicesController().show);

export default subservicesRoutes;
