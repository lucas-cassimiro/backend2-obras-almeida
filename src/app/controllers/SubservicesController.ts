import { Request, Response } from "express";

import prisma from "config/clientPrisma";

export class SubservicesController {
    async index(req: Request, res: Response) {
        try {
            const macroservices = await prisma.subservice.findMany();
            return res.json(macroservices);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Falha ao buscar lista de Sub-serviços." });
        }
    }
    async show(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        console.log(id)
        try {
            const subservices = await prisma.subservice.findMany({
                include: {
                    macroservices: true,
                    units: true,
                },
                where: {
                    macro_id: id,
                },
            });

            return res.json(subservices);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Erro ao buscar dados do subserviço." });
        }
    }
}