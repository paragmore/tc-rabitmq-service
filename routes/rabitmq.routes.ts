import "reflect-metadata";
import { FastifyInstance } from "fastify";
import { RabitMqController } from "../controllers/rabitmq.controller";
import container from "../inversify.config";
import { ApiHelper } from "../utils/ApiHelper";
import { SendMessageRequestI } from "../types/types";

export default async (app: FastifyInstance) => {
  const rabitmqController =
    container.resolve<RabitMqController>(RabitMqController);

  ApiHelper.post<SendMessageRequestI, {}, {}, {}>(
    app,
    "/sendMessage",
    rabitmqController.sendMessage.bind(rabitmqController)
  );
};
