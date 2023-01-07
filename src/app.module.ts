import { Module } from '@nestjs/common';
import { NotificationController } from './infra/http/controllers/notification.controller';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';
import { SendNotification } from './application/use-cases/send-notification';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class AppModule {}
