import { Module } from '@nestjs/common';
import { CampersModule } from './modules/campers/campers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CampersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
