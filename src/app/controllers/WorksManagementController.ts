import { Request, Response } from "express";

import prisma from "config/clientPrisma";

export class WorksManagementsController {
    async show(req: Request, res: Response) {
        const id: number = Number(req.params.id);

        try {
            const work = await prisma.workManagement.findMany({
                where: {
                    id,
                },
                include: {
                    addresses_works: true,
                    subservices: {
                        include: {
                            units: true,
                            macroservices: true,
                        },
                    },
                },
            });

            return res.json(work);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Falha ao buscar dados de gestão da obra." });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { obra } = req.body;
            const { name, cep, street, number, city, state, unidades_repeticao } =
        obra;

            const existentWorkInDatabase = await prisma.addressWork.findUnique({
                where: {
                    cep,
                },
            });

            if (existentWorkInDatabase)
                return res.status(401).send({ message: "Obra já cadastrada." });

            const createWorkInDatabase = await prisma.addressWork.create({
                data: {
                    name,
                    street,
                    number,
                    cep,
                    city,
                    state,
                },
            });

            const workId: number = createWorkInDatabase.id;

            for (const unidade of unidades_repeticao) {
                await prisma.workManagement.create({
                    data: {
                        obra_id: workId,
                        place: unidade.place,
                        ambient: unidade.ambient,
                        sub_id: unidade.sub_id,
                        quantity: 17,
                        weight: 45,
                    },
                });
            }

            return res.status(201).send({ message: "Obra cadastrada com sucesso." });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .send({ message: "Erro ao cadastrar dados da obra." });
        }
    }
}
