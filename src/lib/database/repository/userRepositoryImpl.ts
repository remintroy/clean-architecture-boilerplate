import UserRepository from "../../../adaptor/repository/userRepository";
import UserModel from "../models/user";

export default class UserRepositoryImpl implements UserRepository {
  async get(userId: string): Promise<User> {
    return UserModel.findOne({ _id: userId });
  }

  async getAll(): Promise<User[]> {
    return UserModel.find();
  }

  async create(data: User): Promise<User> {
    const user = new UserModel(data);
    await user.save();
    return user;
  }
}
