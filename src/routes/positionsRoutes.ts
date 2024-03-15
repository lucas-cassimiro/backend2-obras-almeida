import { Router } from "express";

import { PositionsController } from "@src/app/controllers/PositionsController";

const positionsRoutes = Router();

positionsRoutes.get("/", new PositionsController().index);
// positionsRoutes.post("/", new PositionsController().create);

export default positionsRoutes;
