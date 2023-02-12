import { Controller, Get } from '@nestjs/common';
import { Users} from './users.entity';
import { UsersService } from './users.service';
@Controller('users')
export class usersController {
  constructor(private UsersService: UsersService){}
}
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    index(): Promise<Users[]> {
      return this.usersService.findAll();
    }    
}