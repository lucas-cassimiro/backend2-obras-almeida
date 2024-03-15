import { Request, Response } from "express";

import prisma from "config/clientPrisma";

export class PresenceControlController {
    async create(req: Request, res: Response) {
        try {
            const { presenceDate, work, employees, arrival_time } = req.body;

            for (const employeeId of employees) {
                await prisma.presenceControl.create({
                    data: {
                        obra_id: work,
                        presence_date: new Date(presenceDate),
                        arrival_time,
                        employee_id: employeeId,
                    },
                });
            }

            return res.status(201).send({ message: "Cadastro realizado." });
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                message: "Falha ao cadastrar controle na tabela de presença.",
            });
        }
    }

    // async show(req: Request, res: Response) {
    //     try {



    //     } catch (error) {
    //         return res
    //             .status(500)
    //             .send({ message: "Falha ao realizar filtagem de busca." });
    //     }
    // }
}
