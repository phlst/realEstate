import { getAll } from "../lib/ServerActions";
import ApartmentCard from "./ApartmentCard";

async function Apartments() {
  const data = await getAll();

  return (
    <div className="grid h-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4">
      {data.map((data, i) => (
        <ApartmentCard
          id={data._id}
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
