import React from "react";
import "./Tabla.css";

const Tabla = ({ equipos, setEditData, deleteEquipo }) => {
  return (
    <>
      <h3>Equipos actuales</h3>
      <table className="table-contenedor">
        <tbody>
          <tr>
            <td>Equipo</td>
            <td>Pais</td>
            <td></td>
          </tr>
          {equipos.length === 0 ? (
            <tr>
              <td>No hay datos</td>
            </tr>
          ) : (
            equipos.map((equipo, index) => (
              <tr key={index}>
                <td>{equipo.equipo}</td>
                <td>{equipo.pais}</td>
                <td>
                  <button onClick={() => setEditData(equipo)}>Editar</button>
                  {/* con el onClick capturamos la informacion del equipo y la enviamos al estado editData */}
                  <button onClick={() => deleteEquipo(equipo.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default Tabla;
