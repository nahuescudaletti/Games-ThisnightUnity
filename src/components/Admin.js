import React, { useEffect } from 'react';
import { getAuth, listUsers } from 'firebase/auth';

const Admin = () => {
  useEffect(() => {
    const auth = getAuth();

    // Obtén la lista de usuarios
    const fetchUsers = async () => {
      try {
        const userRecords = await listUsers(auth);
        const users = userRecords.map((user) => ({
          uid: user.uid,
          email: user.email,
          // Agrega más propiedades según tus necesidades
        }));
        console.log('Lista de usuarios:', users);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Panel de Administración</h2>
    </div>
  );
};

export default Admin;
