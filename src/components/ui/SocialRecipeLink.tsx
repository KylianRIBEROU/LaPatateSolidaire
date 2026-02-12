import { ReactNode } from 'react';

interface SocialRecipeLinkProps {
  platform: 'youtube' | 'instagram' | 'tiktok' | 'website';
  accountName: string;
  accountUrl: string;
  description: string;
  color?: 'orange' | 'green' | 'yellow' | 'red';
  icon: ReactNode;
  image?: string;
}

export function SocialRecipeLink({
  accountName,
  accountUrl,
  description,
  color = 'orange',
  icon,
  image
}: SocialRecipeLinkProps) {
  const colorClasses = {
    orange: 'bg-[#F59A4A]',
    green: 'bg-[#4C7A46]',
    yellow: 'bg-[#F4C16E]',
    red: 'bg-[#E85C4A]',
  };

  return (
    <a
      href={accountUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#FFFDF4] rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 group"
    >
      {image ? (
        <img
          src={image}
          alt={accountName}
          className="w-20 h-20 rounded-full object-cover mb-5 mx-auto group-hover:scale-110 transition-transform duration-300"
        />
      ) : (
        <div className={`${colorClasses[color]} w-20 h-20 rounded-full flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      )}
      <h3 className="text-[#27532F] text-center mb-3 font-bold">{accountName}</h3>
      <p className="text-[#4C7A46] text-center text-base">{description}</p>
    </a>
  );
}
