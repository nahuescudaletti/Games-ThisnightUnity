import React from "react";
import { useAuth } from "../context/AuthContext";

export function Basquet() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <div className="h-screen relative">
      <iframe
        title="Unity Game"
        src="/unity/index.html"  // Ajusta la ruta según tu estructura de archivos
        className="w-full h-full"
        frameBorder="0"
      ></iframe>

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
