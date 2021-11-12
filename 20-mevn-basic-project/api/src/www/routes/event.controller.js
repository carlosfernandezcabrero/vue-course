import { Router } from "express";
import {
  requiredPowerUserRole,
  verifyToken
} from "../../app/middlewares/auth.middleware.js";
import EventService from "../../app/services/event.service.js";
import { GenericService } from "../../app/services/generic.service.js";
import EventRepository from "../db/event.repository.js";
import responseError from "./helpers/exception.helper.js";
import { validateData } from "./helpers/validate-data.helper.js";

const router = Router();
const pathBase = "/";
const genericService = new GenericService(new EventRepository());
const eventService = new EventService(new EventRepository());

router.post(
  `${pathBase}`,
  [verifyToken, requiredPowerUserRole],
  async (req, res) => {
    try {
      const event = req.body;
      validateData(event, "registerEvent");
      const response = await eventService.save(event);

      return res.json(response);
    } catch (error) {
      return responseError(res, error);
    }
  }
);

router.get(
  "/byUserId/:userId",
  [verifyToken, requiredPowerUserRole],
  async (req, res) => {
    try {
      const service = new EventService();
      const { userId } = req.params;
      const response = await service.getByUserId(userId);

      return res.json(response);
    } catch (error) {
      return responseError(res, error);
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const service = new EventService();
    const response = await service.findAll();

    return res.json(response);
  } catch (error) {
    return responseError(res, error);
  }
});

router.get(`${pathBase}:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const response = await genericService.getById(id);

    return res.json(response);
  } catch (error) {
    return responseError(res, error);
  }
});

router.delete(
  `${pathBase}:id`,
  [verifyToken, requiredPowerUserRole],
  async (req, res) => {
    try {
      const { id } = req.params;
      const service = new EventService();
      const response = await service.delete(id, res.locals.id);

      return res.json(response);
    } catch (error) {
      return responseError(res, error);
    }
  }
);

router.put(
  `${pathBase}:id`,
  [verifyToken, requiredPowerUserRole],
  async (req, res) => {
    try {
      const event = req.body;
      const { id } = req.params;
      validateData(event, "updateEvent");
      const response = await eventService.update(
        { id, ...event },
        res.locals.id
      );

      return res.json(response);
    } catch (error) {
      return responseError(res, error);
    }
  }
);

export const EventRoutes = router;
