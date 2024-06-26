export const sample_foods: any[] = [
    {
        id: '1',
        name: 'Pizza Pepperoni',
        price: 10,
        cookTime: "10-20",
        favorite: true,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
        id: '2',
        name: 'Meatball',
        price: 20,
        cookTime: "20-30",
        favorite: false,
        origins: ['persia','middle east','china'],
        stars: 4.0,
        imageUrl: 'assets/food-2.jpg',
        tags: ["SlowFood", 'Lunch', ]
    },
    {
        id: '3',
        name: 'Hamburger',
        price: 5,
        cookTime: "10-15",
        favorite: true,
        origins: ['germany', 'us'],
        stars: 4.0,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger']
    },
    {
        id: '4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: "15-20",
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 4.0,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry']
    },
    {
      id: '5',
      name: 'Chicken Soup',
      price: 11,
      cookTime: "40-50",
      favorite: false,
      origins: ['india','asia'],
      stars: 4.0,
      imageUrl: 'assets/food-5.jpg',
      tags: ['Soup', "SlowFood"]
  },
  {
    id: '6',
    name: 'Vegetables Pizza',
    price: 9,
    cookTime: "40-50",
    favorite: true,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch']
  }
]

export const sample_tags:any[] = [
  {name: "All", count: 6},
  {name: "FastFood", count: 4},
  {name: "Pizza", count: 2},
  {name: "Lunch", count: 3},
  {name: "SlowFood", count: 2},
  {name: "Hamburger", count: 1},
  {name: "Fry", count: 1},
  {name: "Soup", count: 1}
]
