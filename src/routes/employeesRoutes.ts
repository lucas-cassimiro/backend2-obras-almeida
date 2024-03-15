import { Router } from "express";

import { EmployeesController } from "@src/app/controllers/EmployeesController";

const employeesRoutes = Router();

employeesRoutes.get("/", new EmployeesController().index);
employeesRoutes.post("/", new EmployeesController().create);

export default employeesRoutes;
