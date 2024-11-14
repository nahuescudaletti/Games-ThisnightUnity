// components/Flappy.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Flappy() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  const handleGoHome = () => {
    navigate("/inicio");
  };

  return (
    <div className="h-screen relative">
      <iframe
        title="Flappy Game"
        src="/Juegos/Flappy/flappybird.html"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      />
      {/* Botón de Volver al inicio */}
      <div className="absolute top-0 left-0 p-4">
        <button
          onClick={handleGoHome}
          className="bg-black bg-opacity-20 hover:bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Volver al inicio
        </button>
      </div>
      {/* Botón de Logout */}
      <div className="absolute top-0 right-0 p-4">
        <button
          onClick={handleLogout}
          className="bg-black bg-opacity-20 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
