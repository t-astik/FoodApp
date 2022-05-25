export type Category = 'pizza' | 'burgers' | 'drinks' | 'wok' | 'salads' | 'breakfasts' | 'sushi' | 'bakery' | 'rolls' | 'firstMeals' | 'secondMeals'

export interface IProduct {
  id: number
  name: string
  categoryId: Category
  description: string
  price: number
  size: string
}

export interface ICategory {
  id: Category
  title: string
}

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Пепперони',
    categoryId: 'pizza',
    description: 'Пикантная пепперони, томатный соус, моцарелла.',
    price: 456,
    size: '1'
  },
  {
    id: 2,
    name: 'Четыре сыра',
    categoryId: 'pizza',
    description: 'Филе говядины, вяленые помидоры, помидоры, перец сладкий, моцарела.',
    price: 399,
    size: '400г.'
  },
  {
    id: 3,
    name: 'Итальянская',
    categoryId: 'pizza',
    description: 'Итальянские травы, пепперони, томатный соус, шампиньоны, моцарелла, маслины.',
    price: 550,
    size: '1'
  },
  {
    id: 16,
    name: 'Испанская',
    categoryId: 'pizza',
    description: 'шампиньоны, перец чили, сыр моцарелла, паприка, томатный соус.',
    price: 356,
    size: '1'
  },
  {
    id: 4,
    name: 'Куриный бургер',
    categoryId: 'burgers',
    description: 'Сочный бургер с курицой.',
    price: 430,
    size: '1'
  },
  {
    id: 5,
    name: 'Двойной бургер',
    categoryId: 'burgers',
    description: 'Мущинский бургер с говядиной.',
    price: 450,
    size: '1'
  },
  {
    id: 6,
    name: 'Черная мамба',
    categoryId: 'burgers',
    description: 'Любителям острого.',
    price: 278,
    size: '500г.'
  },
  {
    id: 7,
    name: 'Coco-Cola',
    categoryId: 'drinks',
    description: 'Классика жанра.',
    price: 66,
    size: '0.5л.'
  },
  {
    id: 8,
    name: 'Schweppes',
    categoryId: 'drinks',
    description: 'Для любителей.',
    price: 99,
    size: '1'
  },
  {
    id: 9,
    name: 'Coca-Cola Zero',
    categoryId: 'drinks',
    description: 'Та же Кола ,но без сахара.',
    price: 79,
    size: '1'
  },
  {
    id: 10,
    name: 'Удон с овощами',
    categoryId: 'wok',
    description: 'Пшеничная лапша удон с овощами и филе лосося.',
    price: 333,
    size: '1'
  },
  {
    id: 11,
    name: 'Удон с курицей',
    categoryId: 'wok',
    description: 'Пшеничная лапша удон с овощами, приготовленная на ВОК с классическим кисло-сладким соусом.',
    price: 600,
    size: '1'
  },
  {
    id: 12,
    name: 'Харусаме с овощами',
    categoryId: 'wok',
    description: 'Толстая стеклянная лапша харусаме с овощами и куриным филе.',
    price: 290,
    size: '1'
  },
  {
    id: 13,
    name: 'Цезарь',
    categoryId: 'salads',
    description: 'Любимый всеми салат Цезарь с куриным филе, приготовленный традиционным способом.',
    price: 370,
    size: '1'
  },
  {
    id: 14,
    name: 'Каруи',
    categoryId: 'salads',
    description: 'Салат из копчёной курицы и креветок с икрой летучей рыбы Тобико, овощами и салатом Айсберг.',
    price: 550,
    size: '1'
  },
  {
    id: 15,
    name: 'Хвост дракона',
    categoryId: 'salads',
    description: 'Классический японский салат из маринованных водорослей, приправленный ореховым соусом.',
    price: 400,
    size: '1'
  }
]
  
export const categories: ICategory[] = [
  {
    id: 'pizza',
    title: 'Пицца',
  },
  {
    id: 'burgers',
    title: 'Бургеры',
  },
  {
    id: 'drinks',
    title: 'Напитки',
  },
  {
    id: 'wok',
    title: 'Лапша wok',
  },
  {
    id: 'salads',
    title: 'Салаты',
  },
  {
    id: 'breakfasts',
    title: 'Завтраки',
  },
  {
    id: 'bakery',
    title: 'Выпечка',
  },
  {
    id: 'rolls',
    title: 'Роллы',
  },
  {
    id: 'sushi',
    title: 'Суши',
  },
  {
    id: 'firstMeals',
    title: 'Первые Блюда',
  },
  {
    id: 'secondMeals',
    title: 'Вторые блюда',
  },
]
  
export const popularProductsIds: number[] = [ 7, 2, 6 ]
