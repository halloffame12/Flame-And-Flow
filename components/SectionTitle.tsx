
import React from 'react';

interface Props {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<Props> = ({ subtitle, title, align = 'left' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="inline-block text-orange-500 text-xs font-bold tracking-[0.3em] mb-4 uppercase">
        // {subtitle}
      </span>
      <h2 className="text-4xl md:text-6xl font-anime font-black text-white leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-24 bg-gradient-to-r from-orange-600 to-transparent mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;
