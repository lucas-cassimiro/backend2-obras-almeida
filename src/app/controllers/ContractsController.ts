import { Request, Response } from "express";

import prisma from "config/clientPrisma";

export class ContractsController {
    async index(_req: Request, res: Response) {
        try {
            const contracts = await prisma.contract.findMany();
            return res.json(contracts);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Falha ao buscar dados dos contratos." });
        }
    }
}
