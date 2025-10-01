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
    price: 4200,
  image: '/images/bruschetta.webp',
    category: 'entradas',
  },
  {
    id: 'ensalada',
    name: 'Ensalada Gourmet',
    description: 'Mix de hojas, nueces caramelizadas, queso de cabra y vinagreta balsámica.',
    price: 5750,
  image: '/images/ensalada.webp',
    category: 'entradas',
  },
  {
    id: 'risotto',
    name: 'Risotto de Hongos',
    description: 'Arborio cremoso con mezcla de setas frescas, parmesano y toque de trufa.',
    price: 10000,
  image: '/images/risotto.webp',
    category: 'platos',
  },
  {
    id: 'salmon',
    name: 'Salmón al Horno',
    description: 'Salmón noruego con costra de hierbas, puré de coliflor y espárragos.',
    price: 11600,
  image: '/images/salmon.webp',
    category: 'platos',
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake de Frutos Rojos',
    description: 'Base de galleta artesanal y coulis de frutos rojos frescos.',
    price: 4650,
  image: '/images/cheesecake.webp',
    category: 'postres',
  },
  {
    id: 'lava-cake',
    name: 'Volcán de Chocolate',
    description: 'Bizcocho tibio con centro líquido de chocolate belga y helado de vainilla.',
    price: 5100,
  image: '/images/lava-cake.webp',
    category: 'postres',
  },
  {
    id: 'vino-tinto',
    name: 'Copa de Vino Tinto Reserva',
    description: 'Selección especial con notas a frutos negros y roble.',
    price: 3900,
  image: '/images/vino-tinto.webp',
    category: 'bebidas',
  },
  {
    id: 'limonada',
    name: 'Limonada Artesanal',
    description: 'Refrescante mezcla de limón, hierbabuena y jarabe natural.',
    price: 2600,
  image: '/images/limonada.webp',
    category: 'bebidas',
  },
];

export function formatPrice(value: number) {
  return `₡${value.toLocaleString('es-CR')}`;
}
