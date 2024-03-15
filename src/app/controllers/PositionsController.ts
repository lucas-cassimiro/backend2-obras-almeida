import { Request, Response } from "express";

import prisma from "config/clientPrisma";

export class PositionsController {
    async index(_req: Request, res: Response) {
        try {
            const positions = await prisma.position.findMany();
            return res.json(positions);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Falha ao buscar dados dos cargos." });
        }
    }

    // async create(req: Request, res: Response) {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }
}
