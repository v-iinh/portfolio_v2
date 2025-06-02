import { useParams, useLocation } from "react-router-dom";
import { projects } from "../config/projects";
import { academic, professional } from "../config/experience";
import { Slugify } from "../components/card/Card";

/**
 * Gets item and category based on URL slug and path.
 * Supports:
 *   - /projects/:slug
 *   - /experience/academic/:slug
 *   - /experience/professional/:slug
 * @returns {{ item: Object|null, category: 'projects' | 'academic' | 'professional' | null }}
 */
export function useSluggedItem() {
  const { titleSlug } = useParams();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean); // remove empty segments
  const [basePath, subCategory] = pathSegments;

  let item = null;
  let category = null;

  if (basePath === "projects") {
    item = projects.find((entry) => Slugify(entry.title) === titleSlug) || null;
    category = "projects";
  } else if (basePath === "experience") {
    if (subCategory === "academic") {
      item = academic.find((entry) => Slugify(entry.title) === titleSlug) || null;
      category = "academic";
    } else if (subCategory === "professional") {
      item = professional.find((entry) => Slugify(entry.title) === titleSlug) || null;
      category = "professional";
    }
  }

  return { item, category };
}