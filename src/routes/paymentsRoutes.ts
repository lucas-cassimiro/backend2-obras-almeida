import { Router } from "express";

import { PaymentsController } from "@src/app/controllers/PaymentsController";

const paymentsRoutes = Router();

paymentsRoutes.get("/", new PaymentsController().index);

export default paymentsRoutes;
