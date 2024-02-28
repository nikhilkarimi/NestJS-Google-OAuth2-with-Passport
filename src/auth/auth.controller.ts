import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './google-auth.guard';

@Controller('auth')
export class AuthController {

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin(){
        return {msg:'user login'}
    }

    @Get('redirect')
    @UseGuards(GoogleAuthGuard)
    redirectLogin(){
        return {msg:'user redirect'}
    }
}
