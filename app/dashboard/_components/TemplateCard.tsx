import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link'; // Use Next.js Link instead of lucide-react



function TemplateCard({ name, desc, icon, slug }: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${slug}`}>
      <div className="p-2 shadow-md rounded-md border bg-white
      flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image
          src={icon}
          alt={`${name} icon`} // Descriptive alt text for accessibility
          width={50}
          height={50}
        />
        <h2 className="font-medium text-lg">{name}</h2>
        <p className="text-gray-500 line-clamp-3">{desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
