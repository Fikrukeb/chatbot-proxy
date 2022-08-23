import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketsGateway } from './sockets/sockets.gateway';
import { ApiService } from './api/api.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, SocketsGateway, ApiService],
})
export class AppModule {}
