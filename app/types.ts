export type FilterParams = {
  availability?: string;
  price?: string;
  area?: string;
  rooms?: string;
};

export interface Apartment {
  _id: string;
  title: string;
  status: "available" | "reserved" | "sold";
  price: number;
  area: number;
  rooms: number;
  image: string;
  description?: string;
}
