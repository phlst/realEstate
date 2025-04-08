import Apartments from "../components/Apartments";
import ApartmentSidebar from "../components/ApartmentSidebar";

function page() {
  return (
    <div className="flex gap-30">
      <ApartmentSidebar />
      <Apartments />
    </div>
  );
}

export default page;
