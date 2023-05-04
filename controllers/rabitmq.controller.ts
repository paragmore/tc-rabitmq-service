import { inject, injectable } from "inversify";
import { RabitMqService } from "../service/rabitmq.service";
import { SendMessageRequestI } from "../types/types";
import { ApiHelper, ApiHelperHandler, IReply } from "../utils/ApiHelper";

@injectable()
export class RabitMqController {
  constructor(@inject(RabitMqService) private rabitmqService: RabitMqService) {}
  sendMessage: ApiHelperHandler<SendMessageRequestI, {}, {}, {}, IReply> =
    async (request, reply) => {
      try {
        await this.rabitmqService.sendMessage("Hello Rabit");
        return ApiHelper.success(reply, { hello: "world" });
      } catch (error) {
        console.error(
          "Caught Error in RabitMqController: sendMessage => ",
          error
        );
        return ApiHelper.callFailed(
          reply,
          "Caught Error in RabitMqController: sendMessage => "
        );
      }
    };
}
