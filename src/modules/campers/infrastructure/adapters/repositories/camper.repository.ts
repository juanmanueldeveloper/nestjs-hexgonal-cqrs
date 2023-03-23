import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Camper } from '../../../domain/entities/camper.entity';
import { CamperSchema } from '../entities/camper.schema';

@Injectable()
export class CamperDtoRepository {
  constructor(
    @InjectModel(CamperSchema.name)
    private readonly camperModel: Model<CamperSchema>,
  ) {}

  async findAll(): Promise<Camper[]> {
    const campers = await this.camperModel.find({}, {}, { lean: true });

    return campers.map(camper => {
      const allergiesLower = camper.allergies.map(allergy =>
        allergy.toLocaleLowerCase(),
      );
      const isAllergicToPeanuts = allergiesLower.includes('peanuts');
      return {
        ...camper,
        isAllergicToPeanuts,
      };
    });
  }

  async findById(camperId: string): Promise<Partial<Camper>> {
    const camper = await this.camperModel.findOne(
      { _id: camperId },
      {},
      { lean: true },
    );

    let allergiesLower: string[] = [];

    if (camper) {
      allergiesLower = camper.allergies.map(allergy =>
        allergy.toLocaleLowerCase(),
      );
      const isAllergicToPeanuts = allergiesLower.includes('peanuts');
      return {
        ...camper,
        isAllergicToPeanuts,
      };
    }

    return {
      ...camper,
    };
  }
}
