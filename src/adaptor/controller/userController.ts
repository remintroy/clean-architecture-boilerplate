import { Request } from "express";
import createUser from "../../use-cases/create-user";
import getUsers from "../../use-cases/get-users";
import UserRepository from "../repository/userRepository";

export default function UserController(userRepository: UserRepository) {
  const getAllUsers = () => {
    return getUsers(userRepository);
  };

  const setUsers = (req: Request) => {
    const data = req.body;
    return createUser(userRepository, data);
  };

  return {
    getAllUsers,
    setUsers,
  };
}
