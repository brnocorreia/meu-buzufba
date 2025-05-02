import Footer from "@/components/footer";
import BottomNavigation from "./bottom-navigation";
import Header from "@/components/header";

interface PublicContentProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export default function PublicContent({
  children,
  hideFooter = false,
}: PublicContentProps) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen w-full h-full px-3 items-center bg-pattern bg-no-repeat bg-center justify-center bg-zinc-900">
      <main className="flex flex-col justify-center items-center flex-grow max-w-[1300px] min-w-screen">
        {children}
        <div className="pb-16 w-full flex flex-col items-center">
          {!hideFooter && <Footer />}
        </div>
        <BottomNavigation />
      </main>
    </div>
  );
}
