import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './GoogleStrategy';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionSerializer } from './serializer';

@Module({   
  imports:[TypeOrmModule.forFeature([User])],                                                                                                                                                                                                                                                                                
  controllers: [AuthController],
  providers: [GoogleStrategy,SessionSerializer,
  {
    provide:'AUTH_SERVICE',
    useClass:AuthService
  }]
})
export class AuthModule {}
