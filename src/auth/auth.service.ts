import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { UserDetails } from 'src/dto/details.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User>,
    ){
    }

    async validateUser(details:UserDetails){
        console.log("auth service");
        console.log(details);
        const user = await this.userRepository.findOneBy({email:details.email});
        if(user){
            return user;
        }
        const newuser = this.userRepository.create(details);
        return this.userRepository.save(newuser);
        
    }

    async findUser(id:number){
        const user = await this.userRepository.findOneBy({id});
        if (user) {
            console.log("user finded");
            return user;
        }
    }
}
