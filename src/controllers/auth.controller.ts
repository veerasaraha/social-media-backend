import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  res.status(200).json({ message: "register user" });
};
