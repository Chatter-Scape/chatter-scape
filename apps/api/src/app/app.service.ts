import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData() {
    console.log('from api');

    return { message: 'Welcome to api!' };
  }
}
