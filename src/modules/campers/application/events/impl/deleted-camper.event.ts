import { IEvent } from "@nestjs/cqrs";

export class CamperDeletedEvent implements IEvent {
  constructor(public readonly camperId: string) {}
}
