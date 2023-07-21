import React, { useEffect, useState } from "react";
import "./Formulario.css";

const Formulario = ({ addEquipo, editData, editEquipo,eliminarData}) => {
  useEffect(() => {
    if (editData !== null) {
      setFormulario(editData);
    } else {
      setFormulario({
        equipo: "",
        pais: "",
        id: null,
      });
    }
  }, [editData]);

 

  const [formulario, setFormulario] = useState({
    equipo: "",
    pais: "",
    id: null,
  });

  //controla el cambio cuando se escriba en los input
  //actualizamos con setformulario el valor del estado
  // hacemos un destucturing de la informacion, para hacer una copia exacta
  // actualiza el valor que esta recibiendo por el input, por ejemplo cuando escribo en pais se va guardando el valor en el
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //evita que se recargue la pagina
    if (formulario.equipo !== "" && formulario.pais !== "") {
      if (editData !== null) {
        editEquipo(formulario)
      } else {
        formulario.id = Date.now();
        addEquipo(formulario);
        setFormulario({
          equipo: "",
          pais: "",
          id: null,
        });
      }
    } else {
      alert("Por favor agregue un equipo y un pais");
    }
  };

  return (
    <>
      <h2 className="Formulario">Equipos de futbol</h2>
      {/* para enviar un formulario en html usamos el evento submit */}
      <form className="Formulario-form" onSubmit={handleSubmit}>
        <label htmlFor="equipo" className="Formulario-label">
          Equipo:
        </label>
        <input
          type="text"
          name="equipo"
          className="Formulario-input"
          onChange={handleChange}
          value={formulario.equipo}
        />
        <label htmlFor="pais" className="Formulario-label">
          Pais:
        </label>
        <input
          type="text"
          name="pais"
          className="Formulario-input"
          onChange={handleChange}
          value={formulario.pais}
        />
        <input type="submit" value="Enviar" className="Formulario-submit" />
        <input type="reset" value="Cancelar" className="Formulario-reset" />
      </form>
    </>
  );
};

export default Formulario;
