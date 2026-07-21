import { Link } from "react-router-dom";
import type { Entity } from "../types/entities";
import EntityPhoto from "./EntityPhoto";

interface EntityCardProps {
  entity: Entity;
  bookId: string;
}

export default function EntityCard({ entity, bookId }: EntityCardProps) {
  const appearance = entity.appearances.find((item) => item.bookId === bookId);

  return (
    <Link to={`/entities/${entity.type}/${entity.slug}`} className="group block">
      <EntityPhoto id={entity.id} image={entity.image} alt={entity.name} />
      <h4 className="mt-3 font-display text-base group-hover:text-accent">{entity.name}</h4>
      <p className="mt-1 font-sans text-[12.5px] leading-relaxed text-ink-soft">
        {entity.shortDescription}
      </p>
      {appearance && (
        <p className="relative mt-2 pl-3.5 font-display text-[12.5px] text-accent italic">
          <span className="absolute left-0 top-[3px] h-[7px] w-[7px] rotate-[-45deg] border-b-[1.5px] border-l-[1.5px] border-accent" />
          appears in Ch. {appearance.chapter}
          {appearance.chapterTitle ? `, "${appearance.chapterTitle}"` : ""}
        </p>
      )}
    </Link>
  );
}
