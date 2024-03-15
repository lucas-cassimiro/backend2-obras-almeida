import { Router } from "express";

import { SubservicesController } from "@src/app/controllers/SubservicesController";

const subservicesRoutes = Router();

subservicesRoutes.get("/:id", new SubservicesController().show);

export default subservicesRoutes;
