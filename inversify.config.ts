import "reflect-metadata";
import { Container } from 'inversify';
import { RabitMqController } from './controllers/rabitmq.controller';
import { RabitMqRepo } from './repo/rabitmq.repo';
import { RabitMqService } from './service/rabitmq.service';

const container = new Container();

container.bind<RabitMqService>(RabitMqService).toSelf().inSingletonScope();
container.bind<RabitMqController>(RabitMqController).toSelf()

export default container;