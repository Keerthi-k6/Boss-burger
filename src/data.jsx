import vegburger from './assets/vegburger.jpeg';
import chickenburger from './assets/chickenburger.jpeg';
import cheeseburger from './assets/cheeseburger.jpeg';
import fries from './assets/fries.jpeg';
import perifries from './assets/perifries.jpeg';
import coke from './assets/coke.jpeg';
import pepsi from './assets/pepsi.jpeg';
import addons from './assets/addons.jpeg';
import combo1 from './assets/combo1.jpg';
import combo2 from './assets/combo2.jpg';
import combo3 from './assets/combo3.jpg';
import panner from './assets/pannerburger.png';

export const sample_foods = [
  {
    id: 1,
    name: "Veg Burger",
    cookTime: "10-15",
    price: 100,
    favorite: true,
    stars: 4.5,
    imageUrl: vegburger,
    tags: ['Veg', 'Lunch', 'Burger'],
    des: "Our Veg Burger is a delightful mix of fresh vegetables, tangy pickles, and creamy cheese. The patty is made from a blend of finely chopped carrots, peas, and potatoes, seasoned with a special mix of spices. Served on a toasted bun with a layer of crisp lettuce, juicy tomato slices, and a generous dollop of our homemade burger sauce."
  },
  {
    id: 2,
    name: "Chicken Burger",
    cookTime: "10-15",
    price: 180,
    favorite: false,
    stars: 4.5,
    imageUrl: chickenburger,
    tags: ['NonVeg', 'Lunch', 'Burger'],
    des: "Our Chicken Burger features a succulent grilled chicken patty, topped with melted cheese, fresh lettuce, and ripe tomatoes. The chicken is marinated overnight in a blend of herbs and spices, then grilled to perfection. It's served on a soft bun with a spread of tangy mayo and a hint of mustard for that extra zing."
  },
  {
    id: 3,
    name: "Cheese Burger",
    cookTime: "10-15",
    price: 160,
    favorite: false,
    stars: 4.5,
    imageUrl: cheeseburger,
    tags: ['Veg', 'Lunch', 'Burger'],
    des: "Our Cheese Burger is a classic favorite. It includes a juicy veggie patty, topped with a generous layer of melted cheddar cheese. Served with fresh lettuce, tomatoes, onions, and pickles on a toasted sesame bun, and finished with our signature burger sauce. Perfect for cheese lovers!"
  },
  {
    id: 4,
    name: "Paneer Burger",
    cookTime: "10-20",
    price: 160,
    favorite: false,
    stars: 3.5,
    imageUrl: panner,
    tags: ['Veg', 'Lunch', 'Burger'],
    des: "Our Paneer Burger is a vegetarian delight featuring a thick slice of marinated paneer, grilled to perfection. The paneer is marinated in a blend of yogurt and spices, giving it a rich and flavorful taste. It's served on a whole wheat bun with fresh lettuce, tomatoes, and a spicy mayo sauce."
  },
  {
    id: 5,
    name: "Fries",
    cookTime: "5-10",
    price: 90,
    favorite: false,
    stars: 4.2,
    imageUrl: fries,
    tags: ['Veg', 'Lunch', 'Fries'],
    des: "Our Fries are golden and crispy, seasoned with just the right amount of salt. These fries are cut from fresh potatoes and fried until they reach the perfect crunch. They are excellent on their own or with a side of cheese, onion, tomato, jalapeno, and pickle add-ons."
  },
  {
    id: 6,
    name: "Peri Fries",
    cookTime: "5-10",
    price: 100,
    favorite: false,
    stars: 4.2,
    imageUrl: perifries,
    tags: ['Veg', 'Lunch', 'Fries'],
    des: "Our Peri Fries are a spicy twist on the classic. These fries are tossed in a zesty peri-peri seasoning that gives them an extra kick. Perfectly crispy and bursting with flavor, they pair well with cheese, onion, tomato, jalapeno, and pickle add-ons for an enhanced experience."
  },
  {
    id: 7,
    name: "Coke",
    cookTime: "0",
    price: 40,
    favorite: false,
    stars: 4,
    imageUrl: coke,
    tags: ['Veg', 'Lunch', 'Drinks'],
    des: "A refreshing glass of Coca-Cola, served chilled. The perfect beverage to accompany your meal, Coke is the classic choice to quench your thirst and complement the flavors of your food."
  },
  {
    id: 8,
    name: "Pepsi",
    cookTime: "0",
    price: 40,
    favorite: false,
    stars: 4,
    imageUrl: pepsi,
    tags: ['Veg', 'Lunch', 'Drinks'],
    des: "Enjoy a cold Pepsi with your meal. This fizzy drink is a great way to refresh and recharge, offering a perfect balance of sweetness and carbonation to enhance your dining experience."
  },
  {
    id: 9,
    name: "Addons",
    cookTime: "0",
    price: 40,
    favorite: false,
    stars: 4,
    imageUrl: addons,
    tags: ['Veg', 'Lunch', 'Add-ons'],
    des: "Customize your meal with our delicious add-ons. Choose from a variety of sauces including mayo, ketchup, and mustard, as well as fresh veggies like onions, tomatoes, and jalapenos to create your perfect flavor combination."
  },
  {
    id: 10,
    name: "Combo1",
    cookTime: "15-20",
    price: 200,
    favorite: false,
    stars: 4,
    imageUrl: combo1,
    tags: ['Veg', 'Lunch', 'Combo'],
    des: "Combo1 includes a Veg Burger, crispy fries, and a refreshing Coke. This combo is perfect for a satisfying meal, combining the fresh and tangy flavors of our Veg Burger with the crunch of our fries and the cool refreshment of Coke."
  },
  {
    id: 11,
    name: "Combo2",
    cookTime: "15-20",
    price: 230,
    favorite: false,
    stars: 4,
    imageUrl: combo2,
    tags: ['Veg', 'Lunch', 'Combo'],
    des: "Combo2 features a Cheese Burger, golden fries, and a chilled Coke. Ideal for cheese lovers, this combo offers a rich and savory experience with the added delight of crispy fries and a fizzy drink."
  },
  {
    id: 12,
    name: "Combo3",
    cookTime: "15-20",
    price: 250,
    favorite: false,
    stars: 4,
    imageUrl: combo3,
    tags: ['NonVeg', 'Lunch', 'Combo'],
    des: "Combo3 is a hearty meal that includes a Chicken Burger, crispy fries, and a cold Coke. Perfect for a filling and flavorful lunch, this combo combines the juicy and savory taste of our Chicken Burger with the satisfying crunch of fries and a refreshing beverage."
  }
];

export const sample_tags = [
    {name: 'All', count: 12},
    {name: 'Veg', count: 10},
    {name: 'NonVeg', count: 2},
    {name: 'Lunch', count: 12},
    {name: 'Fries', count: 2},
    {name: 'Drinks', count: 2},
    {name: 'Combo', count: 3},
    {name: 'Add-ons', count: 1}
]