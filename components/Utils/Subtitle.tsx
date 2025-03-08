import { Button } from "@heroui/button";
import Link from "next/link";

import { SubtitleTypes } from "@/types";

const Subtitle = ({ title, btnTitle, btnLink }: SubtitleTypes) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      {btnTitle ? (
        <Button as={Link} color="primary" href={btnLink || ""} variant="shadow">
          {btnTitle}
        </Button>
      ) : null}
    </div>
  );
};

export default Subtitle;
