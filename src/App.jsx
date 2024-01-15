import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Layout from "./componnents/Layout";

function App() {
  const [login, setlogin] = useState(false);

  const loginHandler = () => {
    setlogin((prev) => !prev)
  }

  return (
    <main>
      {!login ? (
        <div className="flex justify-center items-center h-screen">
          <Auth login={loginHandler} />
        </div>
      ) : (
        <div className="h-screen py-2 flex gap-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout logout={loginHandler} />}>
                <Route index element={<Dashboard />} />
                <Route path='employee' element={<Employee />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </main>
  );
}

export default App;