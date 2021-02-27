import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateuserInput } from './dto/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async findAllUsers(): Promise<User[]>{
        const users = await this.userRepository.find();
        return users;
    }

    async createUser(data: CreateuserInput): Promise<User> {
        const user = await this.userRepository.create(data);
        const userSaved = await this.userRepository.save(user);

        if( !userSaved ){
            throw new InternalServerErrorException('Problema pra criar um usuário.')
        }

        return userSaved;
    }
}
