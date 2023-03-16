import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CamperCreate, CamperDto, CamperUpdate } from '../../application/dto/camper.dto';
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
    @Body() createCamper: CamperCreate,
  ): Promise<void> {
    return this.campersService.create(createCamper);
  }

  @Patch(':id/allergies')
  async updateCamperAllergies(
    @Param('id') camperId: string,
    @Body() updateCamperAllergies: CamperUpdate,
  ): Promise<void> {
    return this.campersService.update(camperId, updateCamperAllergies);
  }

  @Delete(':id')
  async deleteCamper(
    @Param('id') camperId: string,
  ): Promise<void> {
    return this.campersService.delete(camperId);
  }
}
