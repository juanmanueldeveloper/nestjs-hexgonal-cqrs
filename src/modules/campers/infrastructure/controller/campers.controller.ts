import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CamperDto } from '../../application/dto/camper.dto';
import { CreateCamperRequest } from '../../application/commands/dto_/create-camper.payload';
import { UpdateCamperAllergiesRequest } from '../../application/commands/dto_/update-camper-allergies.payload';
import { CampersService } from '../../application/campers.service';

@Controller('campers')
export class CampersController {
  constructor(private readonly campersService: CampersService) {}

  @Get(':id')
  async getCamper(@Param('id') camperId: string): Promise<CamperDto> {
    return this.campersService.findById(camperId);
  }

  @Get()
  async getCampers(): Promise<CamperDto[]> {
    return this.campersService.find();
  }

  @Post()
  async createCamper(
    @Body() createCamperRequest: CreateCamperRequest,
  ): Promise<void> {
    return this.campersService.create(createCamperRequest);
  }

  @Patch(':id/allergies')
  async updateCamperAllergies(
    @Param('id') camperId: string,
    @Body() updateCamperAllergiesRequest: UpdateCamperAllergiesRequest,
  ): Promise<void> {
    return this.campersService.update(camperId, updateCamperAllergiesRequest);
  }

  @Delete(':id')
  async deleteCamper(
    @Param('id') camperId: string,
  ): Promise<void> {
    return this.campersService.delete(camperId);
  }
}
