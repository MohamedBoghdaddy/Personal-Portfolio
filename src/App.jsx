import { Navigate, Route, Routes, useParams } from "react-router-dom";
import OsShell from "./components/Layout/OsShell";
import About from "./screens/About";
import CaseStudy from "./screens/CaseStudy";
import Contact from "./screens/Contact";
import Experience from "./screens/Experience";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Services from "./screens/Services";
import Skills from "./screens/Skills";

function CaseStudyRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/projects/${slug}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<OsShell />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Legacy URL redirects — keeps old bookmarks/links working */}
        <Route path="/builds" element={<Navigate to="/projects" replace />} />
        <Route path="/skill-tree" element={<Navigate to="/skills" replace />} />
        <Route path="/projects/huntflow" element={<Navigate to="/projects/hunterflow" replace />} />
        <Route path="/case-studies/:slug" element={<CaseStudyRedirect />} />
        <Route path="/missions" element={<Navigate to="/projects" replace />} />
        <Route path="/proof" element={<Navigate to="/projects" replace />} />
        <Route path="/terminal" element={<Navigate to="/" replace />} />
        <Route path="/archive" element={<Navigate to="/projects" replace />} />
        <Route path="/flows/:type" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
