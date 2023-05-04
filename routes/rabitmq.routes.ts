import "reflect-metadata";
import { FastifyInstance } from "fastify";
import { RabitMqController } from "../controllers/rabitmq.controller";
import container from "../inversify.config";
import { ApiHelper } from "../utils/ApiHelper";

export default async (app: FastifyInstance) => {
  const rabitmqController = container.resolve<RabitMqController>(RabitMqController)

  ApiHelper.get<{}, {}, {}>(
    app,
    "/",
    rabitmqController.rabitmqController.bind(rabitmqController)
  );
};
