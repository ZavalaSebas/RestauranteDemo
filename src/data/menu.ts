export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // relative path or external URL
  category: MenuCategoryKey;
};

export const categories = [
  { key: 'entradas', label: 'Entradas' },
  { key: 'platos', label: 'Platos Fuertes' },
  { key: 'postres', label: 'Postres' },
  { key: 'bebidas', label: 'Bebidas' },
] as const;

export type MenuCategoryKey = typeof categories[number]['key'];

export const menuItems: MenuItem[] = [
  {
    id: 'bruschetta',
    name: 'Bruschetta Mediterránea',
    description: 'Pan tostado con tomate confitado, albahaca fresca y aceite de oliva extra virgen.',
    price: 6.5,
    image: 'https://images.unsplash.com/photo-1604908554034-016e4d1769a4?auto=format&fit=crop&w=400&q=60',
    category: 'entradas',
  },
  {
    id: 'ensalada',
    name: 'Ensalada Gourmet',
    description: 'Mix de hojas, nueces caramelizadas, queso de cabra y vinagreta balsámica.',
    price: 8.9,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=400&q=60',
    category: 'entradas',
  },
  {
    id: 'risotto',
    name: 'Risotto de Hongos',
    description: 'Arborio cremoso con mezcla de setas frescas, parmesano y toque de trufa.',
    price: 15.5,
    image: 'https://images.unsplash.com/photo-1603899123225-3487b62dc1c7?auto=format&fit=crop&w=400&q=60',
    category: 'platos',
  },
  {
    id: 'salmon',
    name: 'Salmón al Horno',
    description: 'Salmón noruego con costra de hierbas, puré de coliflor y espárragos.',
    price: 18.0,
    image: 'https://images.unsplash.com/photo-1588166292454-68f58d38f9a8?auto=format&fit=crop&w=400&q=60',
    category: 'platos',
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake de Frutos Rojos',
    description: 'Base de galleta artesanal y coulis de frutos rojos frescos.',
    price: 7.2,
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb4c25c?auto=format&fit=crop&w=400&q=60',
    category: 'postres',
  },
  {
    id: 'lava-cake',
    name: 'Volcán de Chocolate',
    description: 'Bizcocho tibio con centro líquido de chocolate belga y helado de vainilla.',
    price: 7.9,
    image: 'https://images.unsplash.com/photo-1606857521015-c6873b6f736f?auto=format&fit=crop&w=400&q=60',
    category: 'postres',
  },
  {
    id: 'vino-tinto',
    name: 'Copa de Vino Tinto Reserva',
    description: 'Selección especial con notas a frutos negros y roble.',
    price: 6.0,
    image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=400&q=60',
    category: 'bebidas',
  },
  {
    id: 'limonada',
    name: 'Limonada Artesanal',
    description: 'Refrescante mezcla de limón, hierbabuena y jarabe natural.',
    price: 4.0,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=400&q=60',
    category: 'bebidas',
  },
];

export function formatPrice(value: number) {
  return value.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}
