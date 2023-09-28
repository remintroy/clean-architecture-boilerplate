import UserRepository from "../adaptor/repository/userRepository";

export default async function createUser(userRepository: UserRepository, data: User) {
  return await userRepository.create(data).catch(utils.throwInternalError("Error while creating user data"));
}
