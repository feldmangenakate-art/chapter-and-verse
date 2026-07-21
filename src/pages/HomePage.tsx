import { getBooks } from "../lib/data-helpers";
import BookCard from "../components/BookCard";

export default function HomePage() {
  const books = getBooks();

  return (
    <div>
      <p className="font-sans text-[11px] tracking-[0.14em] text-ink-faint uppercase">
        Chapter &amp; Verse
      </p>
      <h1 className="mt-2 font-display text-3xl italic">A companion for the books you read</h1>
      <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Open a book and meet the real places, people, and art it mentions — with the history
        behind each one, and the chapters where they appear.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
