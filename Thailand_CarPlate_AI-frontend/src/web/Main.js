import "./css/main.css";
import Violation from "../tab/Violation";
import Live from "../tab/Live";
//import Book from "../tab/Book";
import {
  Routes,
  Route
} from "react-router-dom";
import UserProfile from "../tab/UserProfile";



export function Main() {
  return (
    <div className="main">
      <div className="main-content">
        <Routes>
          {/* <Route path="/" element={<Violation />} />
          <Route path="/lpr" element={<Lpr />} />
          <Route path="/live" element={<Live />} /> 
          <Route path="/profile" element={<UserProfile />} />*/}

          <Route path="/violation" element={<Violation />} />
          {/* <Route path="/book" element={<Book />} /> */}
          <Route path="/" element={<Live />} /> 

        </Routes>
      </div>
    </div>
  );
}