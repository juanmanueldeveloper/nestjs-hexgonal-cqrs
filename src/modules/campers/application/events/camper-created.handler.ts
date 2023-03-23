import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CamperCreatedEvent } from './impl/created-camper.event';

@EventsHandler(CamperCreatedEvent)
export class CamperCreatedHandler implements IEventHandler<CamperCreatedEvent> {

  constructor(private readonly _logger:  Logger) {
    
  }
  async handle({ camperId }: CamperCreatedEvent): Promise<void> {
    this._logger.log(`Camper created with id: ${camperId}`, 'Event');
  }
}
