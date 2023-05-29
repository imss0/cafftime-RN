import { Controller, Get } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}
  @Get()
  getFoodDb() {
    return this.foodService.getFoodDb();
  }
}
