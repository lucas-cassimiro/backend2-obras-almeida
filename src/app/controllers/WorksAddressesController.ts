import { Request, Response } from "express";

import prisma from "config/clientPrisma";

export class WorksAddresses {
    async index(_req: Request, res: Response) {
        try {
            const works = await prisma.addressWork.findMany();
            return res.json(works);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Não foi possível obter o cadastro de obras" });
        }
    }
}
