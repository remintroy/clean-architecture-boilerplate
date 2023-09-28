export default abstract class UserRepository {
  abstract create(data: User): Promise<User>;
  abstract get(userId: string): Promise<User>;
  abstract getAll(): Promise<User[]>;
}
