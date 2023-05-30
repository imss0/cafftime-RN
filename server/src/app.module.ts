import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { LogsController } from './logs/logs.controller';
import { FoodController } from './food/food.controller';
import { LogsService } from './logs/logs.service';
import { FoodService } from './food/food.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('DB_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectionFactory: (connection: Connection) => {
          if (connection.readyState === 1) {
            console.log('DB connected');
          }
          connection.on('disconnected', () => {
            console.log('DB disconnected');
          });

          return connection;
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [LogsController, FoodController],
  providers: [LogsService, FoodService],
})
export class AppModule {}
