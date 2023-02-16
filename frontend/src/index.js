import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NOPage from "./pages/NOPage";
import AboutUs from "./pages/AboutUs";
import UserDetails from "./pages/UserDetails";
import AddEcercise from "./pages/AddExercise";
import LoginSignUp from "./pages/LoginSignUp";
import Trainers from "./pages/Trainers";
import Classes from "./pages/Classes";

export default function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/userDetails"
          element={
            isLoggedIn === "true" ? <UserDetails /> : console.log("error")
          }
        />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="*" element={<NOPage />} />
          <Route path="add" element={<AddEcercise />} />
          <Route path="userdetail" element={<UserDetails />} />
          <Route path="login" element={<LoginSignUp />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="classes" element={<Classes />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
