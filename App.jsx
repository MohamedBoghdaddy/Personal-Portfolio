import { Navigate, Route, Routes } from "react-router-dom";
import OsShell from "./components/OsShell";
import BootHero from "./screens/BootHero";
import MissionSelector from "./screens/MissionSelector";
import FlowPage from "./screens/FlowPage";
import BossBuilds from "./screens/BossBuilds";
import SkillTree from "./screens/SkillTree";
import Achievements from "./screens/Achievements";
import ExperienceLogs from "./screens/ExperienceLogs";
import CommandTerminal from "./screens/CommandTerminal";
import Archive from "./screens/Archive";
import Contact from "./screens/Contact";
import CaseStudy from "./screens/CaseStudy";

export default function App() {
  return (
    <Routes>
      <Route element={<OsShell />}>
        <Route index element={<BootHero />} />
        <Route path="/missions" element={<MissionSelector />} />
        <Route path="/flows/:type" element={<FlowPage />} />
        <Route path="/builds" element={<BossBuilds />} />
        <Route path="/skill-tree" element={<SkillTree />} />
        <Route path="/proof" element={<Achievements />} />
        <Route path="/experience" element={<ExperienceLogs />} />
        <Route path="/terminal" element={<CommandTerminal />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
