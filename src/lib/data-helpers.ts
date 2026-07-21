import booksData from "../data/books.json";
import placesData from "../data/places.json";
import peopleData from "../data/people.json";
import artworksData from "../data/artworks.json";
import eventsData from "../data/events.json";
import type { Book, Entity, EntityType, Place, Person, Artwork, Event } from "../types/entities";

const books = booksData as Book[];
const places = placesData as Place[];
const people = peopleData as Person[];
const artworks = artworksData as Artwork[];
const events = eventsData as Event[];

const allEntities: Entity[] = [...places, ...people, ...artworks, ...events];

export function getBooks(): Book[] {
  return books;
}

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id);
}

export function getEntitiesByBook(bookId: string, type?: EntityType): Entity[] {
  return allEntities.filter(
    (entity) =>
      (type === undefined || entity.type === type) &&
      entity.appearances.some((appearance) => appearance.bookId === bookId),
  );
}

export function getEntityBySlug(type: EntityType, slug: string): Entity | undefined {
  return allEntities.find((entity) => entity.type === type && entity.slug === slug);
}

export function getAppearances(entityId: string) {
  const entity = allEntities.find((item) => item.id === entityId);
  return entity?.appearances ?? [];
}
