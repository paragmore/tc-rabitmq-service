import { inject, injectable } from "inversify";
import { RabitMqRepo } from "../repo/rabitmq.repo";

@injectable()
export class RabitMqService {
  constructor(@inject(RabitMqRepo) private rabitmqRepo: RabitMqRepo) {}
}
