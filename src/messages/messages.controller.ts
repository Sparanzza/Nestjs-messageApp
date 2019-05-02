import { CreateMessagesDto } from './dto/create-messages-dto';
import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { create } from 'domain';

@Controller('messages')
export class MessagesController {
    @Post()
    create( @Body() createMessageDto: CreateMessagesDto) {
        return 'mensaje creado';
    }

    @Get()
    getAll() {
        return 'lista de mensajes';
    }

    @Put(':id')
    update(@Body() updateMessageDto: CreateMessagesDto ) {
        return 'mensaje actualizando';
    }

    @Delete(':id')
    delete() {
        return 'mensaje eliminado';
    }

}
