import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Authors from "./Pages/Authors";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

import AtomicHabits from "./Pages/Books/AtomicHabits";
import TheAlchemist from "./Pages/Books/TheAlchemist";
import DeepWork from "./Pages/Books/DeepWork";
import Ikigai from "./Pages/Books/Ikigai";
import RichDadPoorDad from "./Pages/Books/RichDadPoorDad";
import HarryPotter from "./Pages/Books/HarryPotter";

import JamesClear from "./Pages/Authors/JamesClear";
import PauloCoelho from "./Pages/Authors/PauloCoelho";
import CalNewport from "./Pages/Authors/CalNewport";
import HectorGarcia from "./Pages/Authors/HectorGarcia";
import RobertKiyosaki from "./Pages/Authors/RobertKiyosaki";
import JKRowling from "./Pages/Authors/JKRowling";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/about" element={<About />} />

        {/* Book Pages */}
        <Route path="/books/atomic-habits" element={<AtomicHabits />} />
        <Route path="/books/the-alchemist" element={<TheAlchemist />} />
        <Route path="/books/deep-work" element={<DeepWork />} />
        <Route path="/books/ikigai" element={<Ikigai />} />
        <Route path="/books/rich-dad-poor-dad" element={<RichDadPoorDad />} />
        <Route path="/books/harry-potter" element={<HarryPotter />} />

        {/* Author Pages */}
        <Route path="/authors/james-clear" element={<JamesClear />} />
        <Route path="/authors/paulo-coelho" element={<PauloCoelho />} />
        <Route path="/authors/cal-newport" element={<CalNewport />} />
        <Route path="/authors/hector-garcia" element={<HectorGarcia />} />
        <Route path="/authors/robert-kiyosaki" element={<RobertKiyosaki />} />
        <Route path="/authors/jk-rowling" element={<JKRowling />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;