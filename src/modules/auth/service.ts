import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../database/data-source.js";
import { User } from "../../database/schema/User.js";

const userRepo = AppDataSource.getRepository(User);

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const register = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = userRepo.create({
    email,
    password: hashedPassword,
  });

  await userRepo.save(user);

  return user;
};

export const login = async (email: string, password: string) => {
  const user = await userRepo.findOne({ where: { email } });

  if (!user) throw new Error("Credênciais inválidas");

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) throw new Error("Credênciais inválidas");

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "2d",
  });

  return { token };
};
