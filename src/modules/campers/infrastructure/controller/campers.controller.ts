import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CampersService } from '../../application/services/campers.service';
import { Camper, CamperCreate, CamperUpdate } from '../../domain/entities/camper.entity';

@Controller('campers')
export class CampersController {
  constructor(private readonly campersService: CampersService) {}

  @Get(':id')
  async getById(@Param('id') camperId: string): Promise<Camper> {
    return this.campersService.getById(camperId);
  }

  @Get()
  async getAll(): Promise<Camper[]> {
    return this.campersService.getAll();
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
