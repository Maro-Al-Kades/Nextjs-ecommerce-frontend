import Subtitle from "@/components/Utils/Subtitle";
import CategoriesList from "@/components/Categories/CategoriesList";
import ProductList from "@/components/Products/ProductList";
import MainAD from "@/components/Ads/MainAD";
import BarndsList from "@/components/Brands/BrandsList";
import RightGlowEffect from "@/components/GlowEffect/RightGlowEffect";
import LeftGlowEffect from "@/components/GlowEffect/LeftGlowEffect";
import Carousel from "@/components/Carousel";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 min-w-full">
      <RightGlowEffect />
      <LeftGlowEffect />

      <Carousel />

      <div className="flex flex-col gap-6">
        <Subtitle btnLink="/categories" btnTitle={`المزيد`} title="التصنيفات" />
        <CategoriesList />
      </div>
      <div className="flex flex-col gap-6">
        <Subtitle title="الاكثر مبيعا" />
        <ProductList />
      </div>
      <MainAD />
      <div className="flex flex-col gap-6">
        <Subtitle title="احدث الازياء" />
        <ProductList />
      </div>
      <div className="flex flex-col gap-6">
        <Subtitle btnLink="/brands" btnTitle={`المزيد`} title="اشهر الماركات" />
        <BarndsList />
      </div>
    </div>
  );
};

export default Home;
