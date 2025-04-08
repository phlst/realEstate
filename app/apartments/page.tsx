import { Suspense } from "react";
import Apartments from "../components/Apartments";
import ApartmentSidebar from "../components/ApartmentSidebar";

async function page() {
  return (
    <div className="flex gap-30">
      <ApartmentSidebar />
      <Suspense fallback={"loading..."}>
        <Apartments />
      </Suspense>
    </div>
  );
}

export default page;
