import TopSubCategories from "../_components/TopSubCategories";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <TopSubCategories />
      {children}
    </section>
  );
}
