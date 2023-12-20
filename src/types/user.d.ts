interface UserInterface {
  name: string;
  email: string;
  message: string;
}
type User = Prettify<UserInterface>;
