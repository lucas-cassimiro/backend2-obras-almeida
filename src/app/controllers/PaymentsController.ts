import { Request, Response } from "express";

import prisma from "config/clientPrisma";

export class PaymentsController {
    async index(_req: Request, res: Response) {
        try {
            const payments = await prisma.payment.findMany();
            return res.json(payments);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Falha ao buscar dados dos tipos de pagamentos." });
        }
    }
}
