import {  UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UserEntity } from './user';


@Controller('user')
export class UserController{
    constructor(private userService: UserService) {

    }

    @Get()
    async findAll(){
        const response = await this.userService.findAll();
        return response;
    }

    // @Get(":id")

    // async findOne(@Param() id: number, @Res() res: Response){
    //     const response = await this.userService
    // }

    @Post()
    async create(@Body() createUserDto: UserEntity) {
        const response = await this.userService.create(createUserDto);
        return response;
    }

    @Put(":id")
    async update(@Param() id: number, @Body() createUserDto: UserEntity){
        const response = await this.userService.update(id, createUserDto);
        return response;
    }

    @Delete()
    async delete(@Body() id: number) {
        const response = await this.userService.remove(id);
        return response;
    }
}