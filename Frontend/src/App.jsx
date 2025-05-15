import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./Pages/Home/Home";
import AdminDashBoard from "./Pages/Admin/AdminDashBoard";

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
            margin: "0 auto",
            textAlign: "center",
            width: "fit-content",
            maxWidth: "90%",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "#4aed88",
            },
          },
          error: {
            duration: 4000,
            theme: {
              primary: "#ff4b4b",
            },
          },
        }}
      />
      {/* <Navbar /> */}

      {/* <Routes>{allRoutes}</Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />

      </Routes>
    </div>
  );
}

export default App;
