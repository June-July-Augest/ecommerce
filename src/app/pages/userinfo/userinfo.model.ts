export interface ProfileInfo {
    firstName:string | null,
    lastName: string | null,
    email: string | null,
    phone: string | null,
    profileImage?:string | null
}

export interface ShippingAddress {
    street: string | null,
    city: string | null,
    state: string | null,
    zipcode: string | null,
}

export interface PaymentMethod{
    cardNumber: string | null,
    exp: string | null,
    billingAddress:string | null,
    secCode: string | null
}

export interface Order {
    description:string | null,
    orderDate: string | null,
    shippingAddress:string | null,
    trackingNumber:string | null,
    productImage: string | null,
    id: string | null,
    title: string | null
}

export interface CardFormData{
    firstData: string | null,
    secondData: string | null,
    thirdData: string | null,
    forthData: string | null,
}

export interface FormDisplay{
      firstDisplay : string | null,
      secondDisplay : string | null,
      thirdDisplay : string | null,
      forthDisplay : string | null,
}

export interface OrderHistoryDisplay{
    title:string | null,
    image:string | null,
    firstDisplay:string | null,
    secondDisplay:string | null,
    thirdDisplay:string | null,
    forthDisplay:string | null,
    orderId:string | null,
}