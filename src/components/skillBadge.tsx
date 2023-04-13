import React from 'react';

const SkillBadge = (props: { name: string }) => {
  const { name } = props;
  return (
    <div className="bg-yellow-400 hover:bg-cyan-500 text-black font-medium p-2 shadow mr-2 mb-2 font-display">
      {name}
    </div>
  );
};

export default SkillBadge;
