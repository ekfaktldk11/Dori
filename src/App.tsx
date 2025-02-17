import { Routes, Route } from "react-router-dom";
import Home from "./clients/pages/Home";
import AboutMe from "./clients/pages/AboutMe";
import Notes from "./clients/pages/Notes";
import Album from "./clients/pages/Album";
import VisitorsBook from "./clients/pages/VisitorsBook";
import NotFound from "./clients/pages/NotFound";
import Navbar from "./clients/components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/album" element={<Album />} />
        <Route path="/visitors" element={<VisitorsBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
