// app/components/BuscadorProductos.tsx
'use client';
import { useState } from 'react';
import productos, { Producto } from '../data/productos';
import '../styles/buscador.css'; // opcional, si usas CSS externo

const BuscadorProductos = () => {
  const [busqueda, setBusqueda] = useState('');

  const filtrados = productos.filter((producto: Producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="buscador-contenedor">
      <h2>Buscar producto</h2>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Escribe el nombre..."
        className="input-busqueda"
      />
      <ul className="lista-productos">
        {filtrados.length > 0 ? (
          filtrados.map((producto, index) => (
            <li key={index} className="item-producto">
              <span>{producto.nombre}</span>
              <span className="precio">${producto.precio}</span>
            </li>
          ))
        ) : (
          <li className="no-encontrado">No se encontraron productos.</li>
        )}
      </ul>
    </div>
  );
};

export default BuscadorProductos;
