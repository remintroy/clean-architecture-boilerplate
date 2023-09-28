import UserRepository from "../adaptor/repository/userRepository";

export default async function getUsers(userRepository: UserRepository) {
  return await userRepository.getAll().catch(utils.throwInternalError("error while fetching users data"));
}
