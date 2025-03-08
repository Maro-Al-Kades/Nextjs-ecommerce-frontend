import React from "react";

const ManageHead = ({ text, number }: { text: String; number?: any }) => {
  return (
    <h2 className="text-2xl font-semibold">
      {text} {number ? <span className="text-primary">({number})</span> : null}
    </h2>
  );
};

export default ManageHead;
