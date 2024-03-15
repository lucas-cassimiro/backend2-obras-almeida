import { Router } from "express";

import { PermissionsController } from "@src/app/controllers/PermissionsController";

const permissionsRoutes = Router();

permissionsRoutes.get("/", new PermissionsController().index);

export default permissionsRoutes;
