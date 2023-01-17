export type CompanyType = {
    name: string
    logo: string
    services: string[]
    country: string
}
export type CompanyDBType = {
    id: number
} & CompanyType