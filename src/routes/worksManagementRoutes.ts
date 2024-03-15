import { Router } from "express";

import { WorksManagementsController } from "@src/app/controllers/WorksManagementController";

const worksManagementRoutes = Router();

worksManagementRoutes.get("/:id", new WorksManagementsController().show);
worksManagementRoutes.post("/", new WorksManagementsController().create);

export default worksManagementRoutes;
