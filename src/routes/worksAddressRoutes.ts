import { Router } from "express";

import { WorksAddresses } from "@src/app/controllers/WorksAddressesController";

const worksAddressesRoutes = Router();

worksAddressesRoutes.get("/", new WorksAddresses().index);

export default worksAddressesRoutes;
