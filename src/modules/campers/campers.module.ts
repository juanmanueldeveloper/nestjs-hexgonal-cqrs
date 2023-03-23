import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { CamperFactory } from './domain/camper.factory';
import { CampersController } from './infrastructure/controller/campers.controller';
import { CamperCommandHandlers } from './app/commands';
import { CamperDtoRepository } from './infrastructure/repositories/camper.repository';
import { CamperEntityRepository } from './domain/camper-entity.repository';
import { CamperSchemaFactory } from './domain/camper-schema.factory';
import { CamperSchema } from './infrastructure/entities/camper.schema';
import { CamperEventHandlers } from './app/events';
import { CamperQueryHandlers } from './app/queries';
import { CampersService } from './app/campers.service';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: CamperSchema.name,
        schema: SchemaFactory.createForClass(CamperSchema),
      },
    ]),
  ],
  controllers: [CampersController],
  providers: [
    CamperEntityRepository,
    CamperDtoRepository,
    CamperSchemaFactory,
    CamperFactory,
    ...CamperCommandHandlers,
    ...CamperEventHandlers,
    ...CamperQueryHandlers,
    CampersService,
  ],
})
export class CampersModule {}
