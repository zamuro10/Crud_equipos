
import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Componentes/Formulario';
import Tabla from './Componentes/Tabla';


function App() {
 const [equipos,setEquipos]=useState(()=>{
  const saveEquipos= window.localStorage.getItem("equiposData");
  if (saveEquipos){
    return JSON.parse(saveEquipos);
  }else{
    return[]
  }
 });

useEffect(()=>{
  window.localStorage.setItem("equiposData", JSON.stringify(equipos))
},[equipos])




 const [editData,setEditData]=useState(null);//hacemos esta variable para capturar la informacion en la tabla y eviarla al formulario para editarla

//creamo una funcion para poder agregar un nuevo equipo, para eso requerimos equipo q es la basededatos
const addEquipo=(equipo)=>{
  setEquipos([...equipos, equipo]);
}
//creamo una funcion para poder editar un  equipo
const editEquipo=(equipo)=>{
  const newEquipo=equipos.map(actual=> actual.id === equipo.id ? equipo: actual);
  setEquipos(newEquipo);
  setEditData(null);
}
const deleteEquipo=id=>{
  const isDelete=window.confirm(`¿Deseas eleminar el registro con el id: ${id}`);
  if(isDelete){
    const newEquipos=equipos.filter(equipo=>equipo.id !== id)
   setEquipos(newEquipos);
  }
}



//-------------------------------

  return (
    <div className="App">
    <Formulario addEquipo={addEquipo} editEquipo={editEquipo} editData={editData} />
    <Tabla equipos={equipos} setEditData={setEditData} deleteEquipo={deleteEquipo}/>
    </div>
 
  );
}

export default App;
