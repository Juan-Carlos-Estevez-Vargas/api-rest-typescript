import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model"

const registerNewUser = async (authUser: User) => {
  const checkIs = await UserModel.findOne({ email: authUser.email });
  if (checkIs) return "ALREADY_USER";
  const registerNewUser = await UserModel.create(authUser);
  return registerNewUser;
}

const loginUser = async () => { }

export { registerNewUser, loginUser }