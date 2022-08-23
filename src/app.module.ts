import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketsGateway } from './sockets/sockets.gateway';
import { ApiService } from './api/api.service';
import { ConfigurationService } from './configuration/configuration/configuration.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, SocketsGateway, ApiService, ConfigurationService],
})
export class AppModule {
  static port: number;

  constructor(private readonly configurationService: ConfigurationService) {
    AppModule.port = this.configurationService.port;
  }
}
