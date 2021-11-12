import responseError from "../../www/routes/helpers/exception.helper.js";
import AuthenticationException from "../exceptions/authentication.exception.js";
import { verify } from "../services/helpers/jwt.helper.js";
import UserService from "../services/user.service.js";

export const verifyToken = async (req, res, next) => {
  const token = req.header("token");
  try {
    if (!token) {
      const exception = new AuthenticationException("The token is required");
      throw exception;
    }
    const { id } = verify(token);
    const service = new UserService();
    const { role } = await service.findById(id);

    res.locals.role = role;
    res.locals.id = id;

    next();
  } catch (err) {
    return responseError(res, err);
  }
};

export const requiredPowerUserRole = (req, res, next) => {
  try {
    const { role } = res.locals;
    if (role !== "POWER_USER") {
      const exception = new AuthenticationException(
        "POWER_USER role is required"
      );
      throw exception;
    }
    next();
  } catch (err) {
    return responseError(res, err);
  }
};

export const requiredAdminRoles = (req, res, next) => {
  try {
    const { role } = res.locals;
    if (role === "ADMIN") {
      const exception = new AuthenticationException("Admin role is required");
      throw exception;
    }
    next();
  } catch (err) {
    return responseError(res, err);
  }
};
