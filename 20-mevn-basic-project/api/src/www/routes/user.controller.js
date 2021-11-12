import { Router } from "express";
import UserService from "../../app/services/user.service.js";
import UserRepository from "../db/user.repository.js";
import responseError from "./helpers/exception.helper.js";
import { validateData } from "./helpers/validate-data.helper.js";

const router = Router();
const pathBase = "/";
const userService = new UserService(new UserRepository());

router.post(`${pathBase}`, async (req, res) => {
  try {
    const user = req.body;
    validateData(user, "registerUser");
    const response = await userService.save(user);

    return res.json(response);
  } catch (error) {
    return responseError(res, error);
  }
});

router.get(`/:id`, [], async (req, res) => {
  try {
    const { id } = req.params;
    const service = new UserService();
    const response = await service.findById(id);

    return res.json(response);
  } catch (error) {
    return responseError(res, error);
  }
});

export const UserRoutes = router;
