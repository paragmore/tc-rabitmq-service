import { inject, injectable } from "inversify";
import amqp from "amqplib";
import { connectRabitMq } from "../rabitmq.config";
import { ApiError } from "../utils/ApiHelper";

@injectable()
export class RabitMqService {
  // constructor(@inject(RabitMqRepo) private rabitmqRepo: RabitMqRepo) {}
  private channel: amqp.Channel | undefined;
  private connection: amqp.Connection | undefined;
  constructor() {
    this.init();
  }

  private async init() {
    const rabit = await connectRabitMq();
    this.channel = rabit?.channel;
    this.connection = rabit?.connection;
  }

  getChannel() {
    return this.channel;
  }

  async sendMessage(message: string, queue: string): Promise<boolean | ApiError> {
    if (!this.channel) {
      return new ApiError(
        "RabitMqService : sendMessage => Channel not found",
        500
      );
    }
    try {
      const response =  this.channel.sendToQueue(queue, Buffer.from(message));
      console.log('sent',response)
      return true;
    } catch (error) {
      return new ApiError(
        `RabitMqService : sendMessage => caught an error`,
        500
      );
    }
  }

  async closeConnection(): Promise<void> {
    if (this.channel) {
      await this.channel.close();
    }
    if (this.connection) {
      await this.connection.close();
    }
  }
}
