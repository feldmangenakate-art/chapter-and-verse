import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import EntityPage from "./pages/EntityPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:bookSlug" element={<BookPage />} />
        <Route path="/entities/:type/:slug" element={<EntityPage />} />
      </Route>
    </Routes>
  );
}
