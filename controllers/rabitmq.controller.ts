import { inject, injectable } from "inversify";
import { RabitMqService } from "../service/rabitmq.service";
import {
  ApiHelper,
  ApiHelperHandler,
  IReply,
} from "../utils/ApiHelper";

@injectable()
export class RabitMqController {
  constructor(@inject(RabitMqService) private rabitmqService: RabitMqService) {}
  rabitmqController: ApiHelperHandler<{}, {}, {}, {}, IReply> =
    async (request, reply) => {
      return ApiHelper.success(reply, {hello: 'world'})
    };
}
