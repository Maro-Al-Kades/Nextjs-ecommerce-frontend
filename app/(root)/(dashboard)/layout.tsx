import { redirect } from "next/navigation";
import LayoutSidebar from "./_components/LayoutSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isAdmin = true;

  if (!isAdmin) {
    redirect("/");
  }
  return (
    <section className="flex flex-row items-start justify-start gap-8 h-full w-full ">
      <LayoutSidebar />
      <div className="flex-1">{children}</div>
    </section>
  );
}
