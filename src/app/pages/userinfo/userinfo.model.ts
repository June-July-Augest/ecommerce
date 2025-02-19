export interface ProfileInfo {
    firstName:string,
    lastName: string,
    email: string,
    profileImage:string
}

export interface ShippingAddress {
    street: string,
    apt: string,
    city: string,
    state: string,
    zipcode: string,
}

export interface PaymentMethod{
    cardNumber: string,
    exp: string,
    billingAddress:string,
    secCode: string
}

export interface Order {
    description:string,
    orderDate: string,
    shippingAddress:string,
    trackingNumber:string,
    productImage: string,
    id: string
}