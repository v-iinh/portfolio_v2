import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../config/projects';
import { academic, professional } from "../../config/experience";
import Error from '../../pages/error/Error';

function Details() {
  const { titleSlug } = useParams();

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, '-');

  const allItems = [...projects, ...academic, ...professional];
  const item = allItems.find((entry) => normalize(entry.title) === titleSlug);

  if (!item) {
    return <Error />;
  }

  return (
    <div>
    </div>
  );
}

export default Details;