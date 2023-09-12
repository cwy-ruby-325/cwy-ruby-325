export interface Card{
    image: string
    labels: Label[]
    title: string
    text: string
    link: string
    isButton: boolean
}

export interface Label{
    text: string
    color:string
}

