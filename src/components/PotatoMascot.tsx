interface PotatoMascotProps {
  size?: number;
}

export function PotatoMascot({ size = 80 }: PotatoMascotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Corps de la patate */}
      <ellipse cx="50" cy="55" rx="35" ry="40" fill="#F4C16E" />
      <ellipse cx="50" cy="55" rx="30" ry="35" fill="#F59A4A" />
      
      {/* Taches sur la patate */}
      <ellipse cx="35" cy="45" rx="4" ry="6" fill="#C48A59" opacity="0.5" />
      <ellipse cx="65" cy="50" rx="3" ry="5" fill="#C48A59" opacity="0.5" />
      <ellipse cx="50" cy="70" rx="5" ry="4" fill="#C48A59" opacity="0.5" />
      
      {/* Yeux */}
      <circle cx="40" cy="50" r="5" fill="#27532F" />
      <circle cx="60" cy="50" r="5" fill="#27532F" />
      <circle cx="42" cy="48" r="2" fill="white" />
      <circle cx="62" cy="48" r="2" fill="white" />
      
      {/* Sourire */}
      <path
        d="M 35 60 Q 50 70 65 60"
        stroke="#27532F"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Joues roses */}
      <circle cx="30" cy="58" r="6" fill="#E85C4A" opacity="0.3" />
      <circle cx="70" cy="58" r="6" fill="#E85C4A" opacity="0.3" />
      
      {/* Petite feuille sur le dessus */}
      <ellipse cx="50" cy="15" rx="8" ry="12" fill="#4C7A46" transform="rotate(-20 50 15)" />
      <ellipse cx="55" cy="18" rx="7" ry="11" fill="#27532F" transform="rotate(15 55 18)" />
    </svg>
  );
}
