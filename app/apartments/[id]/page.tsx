import { notFound } from "next/navigation";
import { getById } from "@/app/lib/ServerActions";
import ApartmentPage from "@/app/components/ApartmentPage";
import { Suspense } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

async function Page({ params }: PageProps) {
  const paramsUse = await params;
  try {
    const apartment: Apartment = await getById(paramsUse.id);

    if (!apartment) {
      return notFound();
    }

    return (
      <Suspense
        fallback={
          <div className="text-center py-10">Loading apartment details...</div>
        }
      >
        <ApartmentPage data={apartment} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching apartment:", error);
    return (
      <div className="text-center py-10 text-red-500">
        Error loading apartment details
      </div>
    );
  }
}

export default Page;
