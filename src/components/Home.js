import { useAuth } from "../context/AuthContext";

export function Home() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-xl mb-4">juego</p>
      </div>
       <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black absolute top-0 right-0 m-4"
          onClick={handleLogout}
        >
          Logout
        </button>
    </div>
  );
}
