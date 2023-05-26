import { LeadEntity } from './lead-entity';
export class LeadsTableEntity {

    leadsData: LeadEntity[]

    constructor(public leadEntites: LeadEntity[]) {
        this.leadsData = leadEntites
    }
}