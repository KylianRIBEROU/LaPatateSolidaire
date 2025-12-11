interface CarrotMascotProps {
  size?: number;
}

export function CarrotMascot({ size = 80 }: CarrotMascotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Feuilles */}
      <path d="M 45 15 Q 40 5 35 10 Q 30 15 40 25" fill="#4C7A46" />
      <path d="M 50 10 Q 50 0 55 5 Q 60 10 52 22" fill="#27532F" />
      <path d="M 55 15 Q 60 5 65 10 Q 70 15 60 25" fill="#4C7A46" />
      
      {/* Corps de la carotte */}
      <path d="M 50 30 L 35 85 Q 50 95 65 85 Z" fill="#F59A4A" />
      <path d="M 50 30 L 38 80 Q 50 88 62 80 Z" fill="#E85C4A" />
      
      {/* Lignes sur la carotte */}
      <path d="M 42 45 Q 50 46 58 45" stroke="#C48A59" strokeWidth="1.5" opacity="0.4" />
      <path d="M 40 55 Q 50 56 60 55" stroke="#C48A59" strokeWidth="1.5" opacity="0.4" />
      <path d="M 38 65 Q 50 66 62 65" stroke="#C48A59" strokeWidth="1.5" opacity="0.4" />
      
      {/* Yeux */}
      <circle cx="42" cy="42" r="4" fill="#27532F" />
      <circle cx="58" cy="42" r="4" fill="#27532F" />
      <circle cx="43.5" cy="40.5" r="1.5" fill="white" />
      <circle cx="59.5" cy="40.5" r="1.5" fill="white" />
      
      {/* Sourire */}
      <path
        d="M 40 50 Q 50 58 60 50"
        stroke="#27532F"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Joues */}
      <circle cx="35" cy="48" r="5" fill="#E85C4A" opacity="0.3" />
      <circle cx="65" cy="48" r="5" fill="#E85C4A" opacity="0.3" />
    </svg>
  );
}
