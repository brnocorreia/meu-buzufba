import Footer from "@/components/footer";
import { RouteCard } from "@/components/route-card";
import { data } from "@/constants/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen w-full h-full px-3 items-center bg-pattern bg-no-repeat bg-center justify-center bg-zinc-800">
      <main className="flex flex-col justify-center items-center flex-grow max-w-[1300px]">
        <div className="max-w-7xl pt-5 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((route) => (
              <RouteCard key={route.id} data={route} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
