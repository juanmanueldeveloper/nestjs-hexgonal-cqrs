import { Logger, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { CamperFactory } from './application/camper.factory';
import { CampersController } from './infrastructure/controller/campers.controller';
import { CamperCommandHandlers } from './application/commands';
import { CamperDtoRepository } from './infrastructure/adapters/repositories/camper.repository';
import { CamperEntityRepository } from './application/camper-entity.repository';
import { CamperSchema } from './infrastructure/adapters/entities/camper.schema';
import { CamperEventHandlers } from './application/events';
import { CamperQueryHandlers } from './application/queries';
import { CampersService } from './application/services/campers.service';
import { CamperSchemaFactory } from './application/camper-schema.factory';

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
    Logger
  ],
})
export class CampersModule {}
