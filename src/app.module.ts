import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [StudentModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
