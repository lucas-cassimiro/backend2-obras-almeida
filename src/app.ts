import express from "express";
import cors from "cors";

import routerMacroservices from "./routes/macroservicesRoutes";
import routerUsers from "./routes/usersRoutes";
import routerPositions from "./routes/positionsRoutes";
import routerEmployees from "./routes/employeesRoutes";
import routerContracts from "./routes/contractsRoutes";
import routerPayments from "./routes/paymentsRoutes";
import routerPermissions from "./routes/permissionsRoutes";
import routerSubservices from "./routes/subservicesRoutes";
import routerWorksManagement from "./routes/worksManagementRoutes";
import routerWorksAddress from "./routes/worksAddressRoutes";
import routerPresenceControl from "./routes/presenceControlRoutes";

export const app = express();
export const port = 3333;

app.use(express.json());
app.use(cors());

app.use("/macroservices", routerMacroservices);
app.use("/subservices", routerSubservices);
app.use("/users", routerUsers);
app.use("/positions", routerPositions);
app.use("/employees", routerEmployees);
app.use("/contracts", routerContracts);
app.use("/payments", routerPayments);
app.use("/permissions", routerPermissions);
app.use("/worksManagement", routerWorksManagement);
app.use("/worksAddress", routerWorksAddress);
app.use("/presence", routerPresenceControl);
