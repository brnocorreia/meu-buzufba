import Footer from "@/components/footer";

interface PageContentProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export default function PageContent({
  children,
  hideFooter = false,
}: PageContentProps) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen w-full h-full px-3 items-center bg-pattern bg-no-repeat bg-center justify-center bg-zinc-800 pt-24">
      <main className="flex flex-col justify-center items-center flex-grow max-w-[1300px] min-w-screen">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
