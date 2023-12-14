import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Basquet } from "./components/Basquet";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import { Home } from "./components/Home";
import Admin from "./components/Admin";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/basquet"
            element={
              <ProtectedRoute>
                <Basquet/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
