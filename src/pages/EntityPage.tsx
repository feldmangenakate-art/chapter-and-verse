import { Link, Navigate, useParams } from "react-router-dom";
import { getEntityBySlug, getBookById } from "../lib/data-helpers";
import type { Appearance, EntityType } from "../types/entities";
import EntityPhoto from "../components/EntityPhoto";

export default function EntityPage() {
  const { type, slug } = useParams<{ type: EntityType; slug: string }>();
  const entity = type && slug ? getEntityBySlug(type, slug) : undefined;

  if (!entity) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="grid gap-10 sm:grid-cols-[240px_1fr]">
      <EntityPhoto id={entity.id} image={entity.image} alt={entity.name} />
      <div>
        <p className="font-sans text-[11px] tracking-[0.1em] text-ink-faint uppercase">
          {entity.type}
        </p>
        <h1 className="mt-1 font-display text-3xl">{entity.name}</h1>
        <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
          {entity.description}
        </p>

        <h2 className="mt-8 font-sans text-[11px] tracking-[0.1em] text-ink-faint uppercase">
          Appears in
        </h2>
        <ul className="mt-3 space-y-3">
          {entity.appearances.map((appearance) => (
            <li key={`${appearance.bookId}-${appearance.chapter}`}>
              <BookAppearanceLink appearance={appearance} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BookAppearanceLink({ appearance }: { appearance: Appearance }) {
  const book = getBookById(appearance.bookId);

  return (
    <div className="border-l-2 border-line pl-4">
      <p className="font-display text-sm italic text-accent">
        {book ? (
          <Link to={`/books/${book.slug}`} className="hover:underline">
            {book.title}
          </Link>
        ) : (
          appearance.bookId
        )}
        {" · "}Ch. {appearance.chapter}
        {appearance.chapterTitle ? `, "${appearance.chapterTitle}"` : ""}
      </p>
      <p className="mt-1 font-sans text-[13px] leading-relaxed text-ink-soft">
        {appearance.context}
      </p>
    </div>
  );
}
