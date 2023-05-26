import { Observable } from "rxjs";
import { LeadsTableEntity } from "src/app/domain/entities/leads.table-entity";

export abstract class LeadsService {
    abstract getLeads(): Observable<LeadsTableEntity>
}