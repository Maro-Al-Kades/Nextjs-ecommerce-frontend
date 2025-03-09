import ManageHead from "../../_components/ManageHead";
import AddCoverModal from "./_components/AddCoverModal";
import CoversTable from "./_components/CoversTable";
import { getCovers, getCoversCount } from "@/actions/covers.actions";

const AddCover = async () => {
  const CoversCount: any = await getCoversCount();
  const covers = await getCovers({});
  return (
    <section className="flex flex-col items-start justify-start gap-6 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <ManageHead text={`ادارة الاغلفة`} number={CoversCount.count} />

        <AddCoverModal />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <CoversTable coversCount={CoversCount} covers={covers} />
      </div>
    </section>
  );
};

export default AddCover;
