export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number

}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number: number
    street: StreetType
}

export type StreetType = {
    title: string
}

type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: GovAddressType
}
type GovAddressType = {
    street: GovStreetType
}
type GovStreetType = {
    title: string
}