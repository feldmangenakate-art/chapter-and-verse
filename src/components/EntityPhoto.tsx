import { useState } from "react";

const PLACEHOLDER_GRADIENTS = [
  "linear-gradient(155deg, #b9ab8a, #6b6355 60%, #443f36)",
  "linear-gradient(155deg, #c2b190, #7a6f5c 55%, #403a30)",
  "linear-gradient(155deg, #a89a86, #5e5648 55%, #332e26)",
  "linear-gradient(155deg, #ad9f82, #665e4c 58%, #38332a)",
];

function pickGradient(id: string) {
  const sum = [...id].reduce((total, char) => total + char.charCodeAt(0), 0);
  return PLACEHOLDER_GRADIENTS[sum % PLACEHOLDER_GRADIENTS.length];
}

interface EntityPhotoProps {
  id: string;
  image?: string;
  alt?: string;
  aspect?: string;
}

export default function EntityPhoto({ id, image, alt = "", aspect = "aspect-[4/5]" }: EntityPhotoProps) {
  const [failed, setFailed] = useState(false);
  const showImage = image && !failed;

  return (
    <div className={`w-full ${aspect} border border-ink p-[6px]`}>
      {showImage ? (
        <img
          src={image}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full" style={{ background: pickGradient(id), filter: "sepia(0.15)" }} />
      )}
    </div>
  );
}
