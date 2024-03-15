import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import prisma from "config/clientPrisma";

export class UsersController {
    async create(req: Request, res: Response) {
        try {
            const {
                username,
                first_name,
                last_name,
                password_hash,
                permission_id,
            } = req.body;

            const userExistentInDatabase = await prisma.user.findUnique({
                where: {
                    username,
                },
            });

            if (userExistentInDatabase)
                return res
                    .status(400)
                    .send({ message: "Usuário já cadastrado no Banco de Dados." });

            const newUser = {
                username,
                first_name,
                last_name,
                password_hash,
                created_at: new Date(),
                permission_id,
            };

            const hash = bcrypt.hashSync(newUser.password_hash, 10);

            newUser.password_hash = hash;

            await prisma.user.create({
                data: newUser,
            });

            return res.status(201).send({ message: "Cadastro efetuado." });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Falha ao cadastrar usuário." });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { username, password_hash } = req.body;

            const findUser = await prisma.user.findUnique({
                where: {
                    username,
                },
            });

            if (!findUser)
                return res
                    .status(401)
                    .send({ message: "Nome de usuário não encontrado." });

            const verifyPass = await bcrypt.compare(
                password_hash,
                findUser.password_hash
            );

            if (!verifyPass)
                return res
                    .status(401)
                    .send({ message: "Usuário ou senha incorretos." });

            const token = jwt.sign({ data: findUser }, process.env.JWT_PASS ?? "", {
                expiresIn: "8h",
            });

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password_hash: _, ...userLogin } = findUser;

            return res.status(200).json({ user: userLogin, token: token });
        } catch (error) {
            return res.status(500).send({ message: "Erro ao fazer login." });
        }
    }

    async getProfile(req: Request, res: Response) {
        return res.json(req.user);
    }
}
