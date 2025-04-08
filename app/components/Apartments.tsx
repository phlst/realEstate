import ApartmentCard from "./ApartmentCard";

type Data = {
  title: string;
  rooms: number;
  area: number;
  status: "available" | "reserved" | "sold";
  price: number;
  image: string;
};

const fakeData: Data[] = [
  {
    title: "A1023",
    rooms: 5,
    area: 52,
    status: "available",
    price: 250000,
    image: "/images/cardFirst.jpg",
  },
  {
    title: "B2045",
    rooms: 3,
    area: 75,
    status: "reserved",
    price: 350000,
    image: "/images/cardFirst.jpg",
  },
  {
    title: "C3087",
    rooms: 4,
    area: 60,
    status: "sold",
    price: 300000,
    image: "/images/cardFirst.jpg",
  },
  {
    title: "D4123",
    rooms: 2,
    area: 45,
    status: "available",
    price: 200000,
    image: "/images/cardFirst.jpg",
  },
  {
    title: "E5234",
    rooms: 1,
    area: 30,
    status: "available",
    price: 150000,
    image: "/images/cardFirst.jpg",
  },
  {
    title: "F6345",
    rooms: 5,
    area: 80,
    status: "reserved",
    price: 400000,
    image: "/images/cardFirst.jpg",
  },
  {
    title: "G7456",
    rooms: 3,
    area: 55,
    status: "sold",
    price: 275000,
    image: "/images/cardFirst.jpg",
  },
  {
    title: "H8567",
    rooms: 2,
    area: 40,
    status: "available",
    price: 180000,
    image: "/images/cardFirst.jpg",
  },
  {
    title: "I9678",
    rooms: 4,
    area: 70,
    status: "reserved",
    price: 320000,
    image: "/images/cardFirst.jpg",
  },
  {
    title: "J0789",
    rooms: 1,
    area: 35,
    status: "sold",
    price: 160000,
    image: "/images/cardFirst.jpg",
  },
];

function Apartments() {
  return (
    <div className="grid h-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4">
      {fakeData.map((data, i) => (
        <ApartmentCard
          key={i + data.title}
          title={data.title}
          area={data.area}
          status={data.status}
          rooms={data.rooms}
          price={data.price}
          image={data.image}
        />
      ))}
    </div>
  );
}

export default Apartments;
