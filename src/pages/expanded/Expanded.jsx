import React from "react";
import { useSluggedItem } from "../../hooks/useSluggedItem";
import Error from "../error/Error";

function Expanded() {
  const { item } = useSluggedItem();

  if (!item) return <Error />;

  return (
    <div>
    </div>
  );
}

export default Expanded;