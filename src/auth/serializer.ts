import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/entities/user.entity";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    constructor(
        @Inject('AUTH_SERVICE')
        private readonly authService:AuthService,
    ){
        super();
    }

    serializeUser(user: User, done: Function) {
        console.log("serialiazer");
        
        done(null,user)
    }

    async deserializeUser(payload: any, done: Function) {
        const user = await this.authService.findUser(payload.id);
        console.log("deserializer");
        console.log(user);
        
        
        return user ? done(null,user) :done(null,null);
    }
}