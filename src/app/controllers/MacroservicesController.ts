import { Request, Response } from "express";

import prisma from "config/clientPrisma";

export class MacroservicesController {
    async index(_req: Request, res: Response) {
        try {
            const macroservices = await prisma.macroservice.findMany();
            return res.json(macroservices);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Falha ao buscar lista de Macro-serviços." });
        }
    }
}
