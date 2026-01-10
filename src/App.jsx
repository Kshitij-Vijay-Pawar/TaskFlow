import { useState } from "react";
import { Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import Home from "./components/pages/Home";
import Today from "./components/pages/Today";
import Calendar from "./components/pages/Calendar";
import StickyWall from "./components/pages/StickyWall";
import Tags from "./components/pages/Tags";
import Priority from "./components/pages/Priority";
import SearchResults from "./components/pages/SearchResults";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {/* Main App Layout */}
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="today" element={<Today />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="sticky-wall" element={<StickyWall />} />
        <Route path="prioritys/:priority" element={<Priority />} />
        <Route path="tag/:tag" element={<Tags />} />
        <Route path="/search/:q" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}

export default App;
