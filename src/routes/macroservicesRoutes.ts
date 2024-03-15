import { Router } from "express";

import { MacroservicesController } from "@src/app/controllers/MacroservicesController";

const macroservicesRoutes = Router();

macroservicesRoutes.get("/", new MacroservicesController().index);

export default macroservicesRoutes;
