import React, { useContext, Suspense, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import LocaleContext from "./context/LocaleContext";
import i18n from "./i18n";
import "./style.scss";

function App() {
  const { currentUser } = useContext(AuthContext);
  const [ locale, setLocale ] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    };
    return children;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<div></div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
