import { Request, Response } from "express"
import { registerNewUser } from "../services/auth.service"

const registerController = async ({ body }: Request, response: Response) => {
  const responseUser = await registerNewUser(body);
  response.send(responseUser);
}

const loginController = async (request: Request, response: Response) => { }

export { registerController, loginController }