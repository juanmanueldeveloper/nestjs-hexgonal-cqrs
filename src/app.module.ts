import { Module } from '@nestjs/common';
import { CampersModule } from './modules/campers/campers.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [CampersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
