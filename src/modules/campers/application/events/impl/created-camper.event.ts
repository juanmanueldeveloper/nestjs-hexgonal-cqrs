import { IEvent } from "@nestjs/cqrs";

export class CamperCreatedEvent implements IEvent {
  constructor(public readonly camperId: string) {}
}
