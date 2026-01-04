interface TomatoMascotProps {
  size?: number;
}

export function TomatoMascot({ size = 80 }: TomatoMascotProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Feuilles du dessus */}
      <path d="M 40 20 Q 35 15 40 25" fill="#4C7A46" />
      <path d="M 50 15 Q 50 10 50 25" fill="#27532F" />
      <path d="M 60 20 Q 65 15 60 25" fill="#4C7A46" />
      
      {/* Corps de la tomate */}
      <circle cx="50" cy="55" r="35" fill="#E85C4A" />
      <circle cx="50" cy="55" r="30" fill="#E85C4A" />
      
      {/* Reflet */}
      <ellipse cx="40" cy="40" rx="8" ry="12" fill="white" opacity="0.3" />
      
      {/* Yeux */}
      <circle cx="42" cy="50" r="5" fill="#27532F" />
      <circle cx="58" cy="50" r="5" fill="#27532F" />
      <circle cx="44" cy="48" r="2" fill="white" />
      <circle cx="60" cy="48" r="2" fill="white" />
      
      {/* Sourire joyeux */}
      <path
        d="M 35 60 Q 50 72 65 60"
        stroke="#27532F"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Joues */}
      <circle cx="30" cy="58" r="6" fill="#F59A4A" opacity="0.5" />
      <circle cx="70" cy="58" r="6" fill="#F59A4A" opacity="0.5" />
    </svg>
  );
}
