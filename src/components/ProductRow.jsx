import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
export const ProductRow = ({ id, name, precio, descripcion, categoria }) => {
  const { handlerRemoveProduct } = useContext(
    ProductContext
  );

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{precio}</td>
      <td>{descripcion}</td>
      <td>{categoria}</td>
     
      <td>
        <NavLink
          className={"btn btn-btn-actualizar"}
          to={"/products/edit/" + id}
          
        >
          Actualizar 
        </NavLink>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-btn-eliminar"
          onClick={() => handlerRemoveProduct(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
