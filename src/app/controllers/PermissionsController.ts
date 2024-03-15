import { Request, Response } from "express";

import prisma from "config/clientPrisma";

export class PermissionsController {
    async index(_req: Request, res: Response) {
        try {
            const permissions = await prisma.permission.findMany();
            return res.json(permissions);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Falha ao buscar dados de permissões." });
        }
    }
}
