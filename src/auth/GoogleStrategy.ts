import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "./auth.service";
import { User } from "src/entities/user.entity";


Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){

    constructor(
        @Inject('AUTH_SERVICE')
        private readonly authService:AuthService,
    ){
        super({
            clientID:'***************************',
            clientSecret:'*************************',
            callbackURL:'http://localhost:3000/api/auth/redirect',
            scope:['email','profile']
        })
    }

    async validate(accessToken:string,refreshToken:string,profile:Profile){
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        console.log("auth");
        
        const user = await this.authService.validateUser({
            email:profile.emails[0].value,
            displayName:profile.displayName
        });
        return user || null;
        
    }

}