export type EntityType = "place" | "person" | "artwork" | "event";

export interface Appearance {
  bookId: string;
  chapter: string;
  chapterTitle?: string;
  note: string;
}

interface BaseEntity {
  id: string;
  slug: string;
  name: string;
  type: EntityType;
  shortDescription: string;
  description: string;
  image: string;
  appearances: Appearance[];
}

export interface Place extends BaseEntity {
  type: "place";
  city?: string;
  country?: string;
}

export interface Person extends BaseEntity {
  type: "person";
  birthYear?: number;
  deathYear?: number;
  profession?: string;
}

export interface Artwork extends BaseEntity {
  type: "artwork";
  artist?: string;
  year?: string;
  medium?: string;
  currentLocation?: string;
}

export interface Event extends BaseEntity {
  type: "event";
  year?: string;
  relatedPlaceIds?: string[];
  relatedPeopleIds?: string[];
}

export type Entity = Place | Person | Artwork | Event;

export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  year: number;
  coverImage: string;
  description: string;
}
