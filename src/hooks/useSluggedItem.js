import { useParams, useLocation } from 'react-router-dom';
import { projects } from '../config/projects';
import { academic, professional } from '../config/experience';
import { Slugify } from '../components/card/Card';

export function useSluggedItem() {
  const { titleSlug } = useParams();
  const location = useLocation();

  const dataMap = {
    experience: [...academic, ...professional],
    projects,
  };

  const basePath = location.pathname.split('/')[1];
  const dataList = dataMap[basePath];
  const item = dataList?.find((entry) => Slugify(entry.title) === titleSlug);

  return { item };
}