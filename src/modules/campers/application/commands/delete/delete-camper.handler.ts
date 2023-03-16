import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CamperEntityRepository } from '../../../domain/camper-entity.repository';
import { DeleteCamperCommand } from './delete-camper.command';

@CommandHandler(DeleteCamperCommand)
export class DeleteCamperHandler
  implements ICommandHandler<DeleteCamperCommand> {
  constructor(
    private readonly camperEntityRepository: CamperEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ camperId }: DeleteCamperCommand): Promise<void> {
    await this.camperEntityRepository.findByIdAndRemove({ _id: camperId });
  }
}
