import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import HonorsPage from "./pages/Honors";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="honors" element={<HonorsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
