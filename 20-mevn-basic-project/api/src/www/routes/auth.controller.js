import { Router } from "express";

import AuthService from "../../app/services/auth.service.js";
import AuthRepository from "../db/auth.repository.js";
import responseError from "./helpers/exception.helper.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const authentication = req.body;
    const service = new AuthService(new AuthRepository());
    const response = await service.verifyUser(authentication);
    const token = service.generateToken(response.id);

    return res.json({ user: response, token });
  } catch (error) {
    return responseError(res, error);
  }
});

export const AuthRouter = router;
