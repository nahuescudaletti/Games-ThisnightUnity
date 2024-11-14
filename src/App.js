import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Basquet } from "./components/Basquet";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import { Home } from "./components/Home";
import { Flappy } from "./components/Flappy";
import { Tower } from "./components/Tower";
import { Inicio } from "./components/inicio";
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
            path="/flappy"
            element={
              <ProtectedRoute>
                <Flappy/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tower"
            element={
              <ProtectedRoute>
                <Tower/>
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
          {/* Nueva ruta para 'Inicio' */}
          <Route
            path="/inicio"
            element={
              <ProtectedRoute>
                <Inicio />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
