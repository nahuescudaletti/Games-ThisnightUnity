// ./components/Inicio.js
import React from "react";
import { useNavigate } from "react-router-dom";

export function Inicio() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: 'url("/images/maxi2.jpg")', // Cambia la ruta a tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Capa de opacidad */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Contenido principal */}
      <div style={{ zIndex: 2, maxWidth: "90%", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Bienvenido a la Página de Inicio
        </h1>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "30px" }}>
          Seleccione un juego
        </h2>
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <button
            onClick={() => navigate("/basquet")}
            style={{
              padding: "15px 25px",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#61dafb",
              color: "#282c34",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Jugar Basquet
          </button>
          <button
            onClick={() => navigate("/flappy")}
            style={{
              padding: "15px 25px",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#61dafb",
              color: "#282c34",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Jugar Flappy
          </button>
          <button
            onClick={() => navigate("/tower")}
            style={{
              padding: "15px 25px",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#61dafb",
              color: "#282c34",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Jugar Tower
          </button>
        </div>
      </div>
    </div>
  );
}
