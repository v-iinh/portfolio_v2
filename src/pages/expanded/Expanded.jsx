import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { projects } from "../../config/projects";
import { academic, professional } from "../../config/experience";
import { Slugify } from "../../components/card/Card";
import Error from "../error/Error";

function Expanded() {
  const { titleSlug } = useParams();
  const location = useLocation();

  const dataMap = {
    experience: [...academic, ...professional],
    projects: projects,
  };

  const basePath = location.pathname.split('/')[1];
  const dataList = dataMap[basePath];
  const item = dataList.find((entry) => Slugify(entry.title) === titleSlug);

  if (!item) return <Error />;

  return (
    <div>
    </div>
  );
}

export default Expanded;