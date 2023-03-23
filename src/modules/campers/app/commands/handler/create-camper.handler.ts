import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CamperFactory } from '../../../domain/camper.factory';
import { CreateCamperCommand } from '../impl/create-camper.command';

@CommandHandler(CreateCamperCommand)
export class CreateCamperHandler
  implements ICommandHandler<CreateCamperCommand> {
  constructor(
    private readonly camperFactory: CamperFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ createCamper }: CreateCamperCommand): Promise<void> {
    const { name, age, allergies } = createCamper;
    const camper = this.eventPublisher.mergeObjectContext(
      await this.camperFactory.create(name, age, allergies),
    );
    camper.commit();
  }
}
