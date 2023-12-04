import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://Bijay-Maharjan:admin123@cluster0.onqc4cv.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: 'krafters',
        autoCreate: true
      }
    ),
    AuthenticationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
