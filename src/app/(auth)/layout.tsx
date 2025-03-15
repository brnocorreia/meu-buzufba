import Header from "@/components/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Header isSimple /> */}
      <main>
        <div className="h-screen pt-24 flex flex-col items-center justify-center px-3 bg-zinc-800">
          {children}
        </div>
      </main>
    </>
  );
}
