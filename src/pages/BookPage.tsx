import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getBookBySlug, getEntitiesByBook } from "../lib/data-helpers";
import type { EntityType } from "../types/entities";
import Tabs from "../components/Tabs";
import EntityCard from "../components/EntityCard";

const TABS: { value: EntityType; label: string }[] = [
  { value: "person", label: "People" },
  { value: "place", label: "Places" },
  { value: "artwork", label: "Art" },
  { value: "event", label: "Events" },
];

export default function BookPage() {
  const { bookSlug } = useParams();
  const [activeTab, setActiveTab] = useState<EntityType>("place");
  const book = bookSlug ? getBookBySlug(bookSlug) : undefined;

  if (!book) {
    return <Navigate to="/" replace />;
  }

  const entities = getEntitiesByBook(book.id, activeTab);

  return (
    <div>
      <p className="font-sans text-[11px] tracking-[0.1em] text-accent uppercase">
        {book.author} · {book.year}
      </p>
      <h1 className="mt-1 mb-6 font-display text-3xl">{book.title}</h1>

      <Tabs tabs={TABS} active={activeTab} onChange={setActiveTab} />

      {entities.length === 0 ? (
        <p className="font-sans text-sm text-ink-soft">Nothing catalogued here yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {entities.map((entity) => (
            <EntityCard key={entity.id} entity={entity} bookId={book.id} />
          ))}
        </div>
      )}
    </div>
  );
}
