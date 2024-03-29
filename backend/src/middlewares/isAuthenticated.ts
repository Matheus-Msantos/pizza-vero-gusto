import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
  sub: string
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  //Descontruindo o authToken
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as PayLoad

    //Recuperar o id do Token, colocando em uma variavel user_id dentro do req
    req.user_id = sub

    return next();

  } catch {
    return res.status(401).end();
  }

}