import { Controller, Post, Body } from '@nestjs/common';
import { create } from 'domain';

@Controller('messages')
export class MessagesController {
    @Post()
    create(@Body createMessageDto : CreateMessageDto)
}
