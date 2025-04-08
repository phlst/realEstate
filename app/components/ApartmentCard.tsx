import Image from "next/image";

function ApartmentCard({
  title,
  rooms,
  status,
  price,
  area,
  image,
}: {
  title: string;
  rooms: number;
  status: "available" | "reserved" | "sold";
  price: number;
  area: number;
  image: string;
}) {
  const statusColors = {
    available: "bg-green-100 text-green-800",
    reserved: "bg-yellow-100 text-yellow-800",
    sold: "bg-red-100 text-red-800",
  };

  return (
    <div className="w-full max-w-lg  border rounded-lg shadow-lg bg-white flex flex-col transform transition-transform hover:scale-105">
      <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
        <Image
          src={image}
          alt="Image for apartment"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="m-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          <span className={`px-2 py-1 rounded ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <div className="text-gray-600 mb-4">
          <p className="text-lg font-bold">Rooms: {rooms}</p>
          <p className="text-lg font-bold">Area: {area} m²</p>
          <p className="text-lg font-bold">Price: ${price.toLocaleString()}</p>
        </div>
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ApartmentCard;
