import ExpressApp, { Router } from "express";
import makeExpressCallback from "../middlewares/makeExpressCallback";
import UserController from "../../../adaptor/controller/userController";
import UserRepositoryImpl from "../../database/repository/userRepositoryImpl";

export default function UserRouterV1(express: typeof ExpressApp): Router {
  const router = express.Router();
  const userRepository = new UserRepositoryImpl();
  const controller = UserController(userRepository);
  //...
  router.route("/").get(makeExpressCallback(controller.getAllUsers));

  return router;
}
