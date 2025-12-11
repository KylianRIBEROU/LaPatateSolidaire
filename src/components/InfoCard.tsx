import { ReactNode } from 'react';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: 'orange' | 'green' | 'yellow';
}

export function InfoCard({ icon, title, description, color = 'orange' }: InfoCardProps) {
  const colorClasses = {
    orange: 'bg-[#F59A4A]',
    green: 'bg-[#4C7A46]',
    yellow: 'bg-[#F4C16E]',
  };

  return (
    <div className="bg-[#FFFDF4] rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
      <div className={`${colorClasses[color]} w-20 h-20 rounded-full flex items-center justify-center mb-5 mx-auto`}>
        {icon}
      </div>
      <h3 className="text-[#27532F] text-center mb-4">{title}</h3>
      <p className="text-[#4C7A46] text-center">{description}</p>
    </div>
  );
}
