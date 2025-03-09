import ManageHead from "../../_components/ManageHead";
import { getAds, getAdsCount } from "@/actions/ads.actions";
import AdsTable from "./_components/AdsTable";
import AddAdModal from "./_components/AddAdModal";

const ManageAds = async () => {
  const adsCount = await getAdsCount();
  const ads = await getAds({});
  return (
    <section className="flex flex-col items-start justify-start gap-6 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <ManageHead text={`ادارة الاعلانات`} number={adsCount.count} />
        <AddAdModal />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <AdsTable adsCount={adsCount} ads={ads} />
      </div>
    </section>
  );
};

export default ManageAds;
