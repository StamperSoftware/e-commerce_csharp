export type User = {
    firstName : string
    lastName : string
    address : Address
    email : string
}
 

export type Address = {
    line1 : string
    line2? : string
    state : string
    country : string
    city : string
    postalCode : string
}