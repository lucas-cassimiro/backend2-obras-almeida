import { Router } from "express";

import { ContractsController } from "@src/app/controllers/ContractsController";

const contractsRoutes = Router();

contractsRoutes.get("/", new ContractsController().index);

export default contractsRoutes;
