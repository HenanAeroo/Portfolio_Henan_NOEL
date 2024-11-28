import React from 'react';

const SocialBadge = ({ platform, link }) => {
  const colors = {
    linkedin: "bg-blue-700 hover:bg-blue-800",
    github: "bg-gray-800 hover:bg-gray-900",
    gitea: "bg-green-700 hover:bg-green-800",
    cv: "bg-purple-700 hover:bg-purple-800",
  };

  return (
    <a
      href={platform === 'cv' ? link : link}
      download={platform === 'cv' ? 'CV_Henan_NOEL.pdf' : null}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-white ${colors[platform]}`}
    >
      <span className="capitalize">{platform === 'cv' ? 'Mon CV' : platform}</span>
    </a>
  );
};

export default SocialBadge;
