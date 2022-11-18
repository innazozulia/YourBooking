import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import HotelPage from "./pages/HotelPage/HotelPage";
import List from "./pages/List/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/hotels"
          element={<List />}
        />
        <Route
          path="/hotels/:id"
          element={<HotelPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
