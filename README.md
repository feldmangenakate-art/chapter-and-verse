# Chapter & Verse

A companion site for books — a catalog of real places, people, and artworks mentioned in books, starting with Peggy Guggenheim's memoir *Out of This Century*.

Open a book and explore cards for the real places, people, and art it references, with history, images, and the chapters where they appear.

## Stack

Vite + React + TypeScript + Tailwind CSS.

## Data model

Entities (places, people, artworks, events) live in `src/data/` as global collections, not tied to one book. Each entity has an `appearances` array linking it to a book, chapter, and context, so the same entity can appear across multiple books without duplicating the card.

## Getting started

```
npm install
npm run dev
```
