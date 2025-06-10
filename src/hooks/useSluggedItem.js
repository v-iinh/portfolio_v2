import { useParams, useLocation } from "react-router-dom";
import { projects } from "../config/projects";
import { academic } from "../config/academic";
import { professional } from "../config/professional";
import { Slugify } from "../components/card/Card";

const routeConfigs = [
  { path: "projects", category: "projects", data: projects },
  { path: "experience/academic", category: "academic", data: academic },
  { path: "experience/professional", category: "professional", data: professional },
];

export function useSluggedItem() {
  const { headingSlug } = useParams();
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);
  const routeKey = segments.slice(0, 2).join("/");
  
  for (const { path, category, data } of routeConfigs) {
    if (path === routeKey || path === segments[0]) {
      const item = data.find((entry) => Slugify(entry.name) === headingSlug) || null;
      return { item, category };
    }
  }
  
  return { item: null, category: null };
}