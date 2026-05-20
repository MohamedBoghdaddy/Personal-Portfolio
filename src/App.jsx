import { Navigate, Route, Routes } from "react-router-dom";
import OsShell from "./components/Layout/OsShell";
import Archive from "./screens/Archive";
import Builds from "./screens/Builds";
import CaseStudy from "./screens/CaseStudy";
import Contact from "./screens/Contact";
import Experience from "./screens/Experience";
import FlowPage from "./screens/FlowPage";
import Home from "./screens/Home";
import Missions from "./screens/Missions";
import Proof from "./screens/Proof";
import SkillTree from "./screens/SkillTree";
import Terminal from "./screens/Terminal";

export default function App() {
  return (
    <Routes>
      <Route element={<OsShell />}>
        <Route index element={<Home />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/flows/:type" element={<FlowPage />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/skill-tree" element={<SkillTree />} />
        <Route path="/proof" element={<Proof />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

