export interface ILeadEntity {
    id?: string
    typeClient: number
    fullName: string
    status: number
    phone: string
    departament: string
    document: string
    createdAt?: number
    completedAt?: number
}