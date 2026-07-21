import { Link } from "react-router-dom";
import type { Book } from "../types";
import EntityPhoto from "./EntityPhoto";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link to={`/book/${book.slug}`} className="group block">
      <EntityPhoto id={book.id} aspect="aspect-[2/3]" />
      <p className="mt-3 font-sans text-[11px] tracking-[0.1em] text-accent uppercase">
        {book.author} · {book.year}
      </p>
      <h3 className="mt-1 font-display text-lg group-hover:text-accent">{book.title}</h3>
    </Link>
  );
}
