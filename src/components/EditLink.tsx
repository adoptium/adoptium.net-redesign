import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen
} from '@fortawesome/free-solid-svg-icons'

type Props = {
  relativePath?: string;
};

const EditLink = ({ relativePath }: Props) => {
  if (!relativePath) {
    return null;
  }

  const href = `https://github.com/gdams/adoptium/edit/main/src/markdown-pages${relativePath}.md`;

  return (
    <div className="mx-auto">
      <a href={href} target="_blank">
        Edit this page on GitHub
        <FontAwesomeIcon icon={faPen} size="1x" style={{ marginLeft: '.3em' }} />
      </a>
    </div>
  );
};

export default EditLink;