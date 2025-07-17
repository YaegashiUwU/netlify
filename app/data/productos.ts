// app/data/productos.ts
export interface Producto {
  nombre: string;
  precio: number;
}

const productos: Producto[] = [
  { nombre: 'bolsas', precio: 10 },
  { nombre: 'pan blanco', precio: 18 },
  { nombre: 'refresco coca-cola 600ml', precio: 20 },
  { nombre: 'leche entera 1L', precio: 25 },
  { nombre: 'gansito', precio: 13 },
  { nombre: 'papas sabritas', precio: 17 },
  { nombre: 'juguito boing', precio: 8 },
  { nombre: 'galletas marías', precio: 15 },
  { nombre: 'galletas oreo', precio: 22 },
  { nombre: 'cereal zucaritas', precio: 38 },
  { nombre: 'arroz 1kg', precio: 32 },
  { nombre: 'frijoles 1kg', precio: 35 },
  { nombre: 'aceite vegetal 1L', precio: 45 },
  { nombre: 'sal 1kg', precio: 12 },
  { nombre: 'azúcar 1kg', precio: 28 },
  { nombre: 'huevos docena', precio: 45 },
  { nombre: 'jamón 250g', precio: 35 },
  { nombre: 'queso manchego 250g', precio: 55 },
  { nombre: 'atún en lata', precio: 20 },
  { nombre: 'sopa instantánea', precio: 14 },
  { nombre: 'mayonesa chica', precio: 32 },
  { nombre: 'catsup chica', precio: 18 },
  { nombre: 'detergente en polvo 500g', precio: 22 },
  { nombre: 'jabón de barra', precio: 10 },
  { nombre: 'suavizante 850ml', precio: 30 }
];

export default productos;
