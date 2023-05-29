import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodService {
  getFoodDb(): string {
    return 'Hi I am a list of caffeinated drink';
  }
}
