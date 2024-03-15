import { Request, Response } from "express";

import prisma from "config/clientPrisma";
import { EmployeeData } from "@src/interfaces/EmployeesInterface";

export class EmployeesController {
    async index(_req: Request, res: Response) {
        try {
            const employees = await prisma.employee.findMany();
            return res.json(employees);
        } catch (error) {
            return res
                .status(500)
                .send({ message: "Falha ao buscar dados dos funcionários." });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { employee } = req.body;

            console.log(employee);

            const {
                ra,
                first_name,
                last_name,
                admission_date,
                alternative_name,
                salary,
                lunch_cost,
                ticket_cost,
                payment_id,
                contract_id,
                position_id,
                dinner,
                lunch,
                total_cost,
            } = employee as EmployeeData;

            const employeeExistentInDatabase = await prisma.employee.findUnique({
                where: {
                    ra,
                },
            });

            if (employeeExistentInDatabase)
                return res
                    .status(400)
                    .send({ message: "Funcionário já cadastrado no Banco de Dados." });

            await prisma.employee.create({
                data: {
                    ra,
                    first_name,
                    last_name,
                    admission_date: new Date(admission_date),
                    alternative_name,
                    salary,
                    lunch_cost,
                    ticket_cost,
                    payment_id,
                    contract_id,
                    position_id,
                    dinner,
                    lunch,
                    total_cost,
                },
            });

            return res.status(201).send({ message: "Cadastro efetuado." });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .send({ message: "Falha ao cadastrar funcionário." });
        }
    }
}
