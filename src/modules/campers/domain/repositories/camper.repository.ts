import { Camper, CamperCreate, CamperUpdate } from "../entities/camper.entity"


interface ICamperRepository {
    getAll(): Promise<Camper[]>
    getById(camperId: string): Promise<Camper>
    create(createCamper: CamperCreate): Promise<void>
    update(camperId: string, camperUpdate: CamperUpdate): Promise<void>
    delete(camperId: string): Promise<void>
}

export { ICamperRepository}
