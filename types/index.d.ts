declare global {
  type Apartment = {
    _id: string;
    title: string;
    rooms: number;
    area: number;
    status: "available" | "reserved" | "sold";
    price: number;
    image: string;
    planImage?: string;
    text?: string;
    orientation?: string;
    floor?: number;
  };
}
export {};
