import { Message } from './entities/message.entity';
import { MessagesService } from './messages.service';
import { CreateMessagesDto } from './dto/create-messages-dto';
import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { create } from 'domain';
import { runInThisContext } from 'vm';

@Controller('messages')
export class MessagesController {
    constructor( private messagesService: MessagesService) {

    }

    @Post()
    create( @Body() createMessageDto: CreateMessagesDto, @Res() response) {
        this.messagesService.createMessage(createMessageDto).then( message => {
            response.status(HttpStatus.CREATED).json(message);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error to create the message'});
        });
    }

    @Get()
    getAll( @Res() response) {
        this.messagesService.getAll().then( messageList => {
            response.status(HttpStatus.CREATED).json(messageList);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error to create the message'});
        });
    }

    @Put(':id')
    update(@Body() updateMessageDto: CreateMessagesDto , @Res() response, @Param('id') id ) {
        this.messagesService.updateMessage(id , updateMessageDto).then( message => {
            response.status(HttpStatus.CREATED).json(message);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error to create the message'});
        });
    }

    @Delete(':id')
    delete( @Res() response, @Param('id') id ) {
        this.messagesService.deleteMessage(id).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: 'error to create the message'});
        });
    }

}
