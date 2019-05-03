import { CreateMessagesDto } from './dto/create-messages-dto';
import { Injectable } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessagesService {

    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
      ) {}

      async getAll() {
          return await this.messageRepository.find();
      }

      async createMessage(newMessage: CreateMessagesDto) {
          const newM = new Message();
          newM.message = newMessage.message;
          newM.nick = newMessage.nick;

          return this.messageRepository.save(newM);
      }

      async updateMessage(id: number , updateMessage: CreateMessagesDto ) {
          const messageU = await this.messageRepository.findOne(id);
          messageU.nick = updateMessage.nick;
          messageU.message = updateMessage.message;
          return await this.messageRepository.save(messageU);
      }

      async deleteMessage(id: number) {
        return await this.messageRepository.delete(id);
      }

}
