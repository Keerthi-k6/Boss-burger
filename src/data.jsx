import vegburger from './assets/vegburger.jpeg'
import chickenburger from './assets/chickenburger.jpeg'
import cheeseburger from './assets/cheeseburger.jpeg'
import fries from './assets/fries.jpeg'
import perifries from './assets/perifries.jpeg'
import coke from './assets/coke.jpeg'
import pepsi from './assets/pepsi.jpeg'
import addons from './assets/addons.jpeg'
import combo1 from './assets/combo1.jpg'
import combo2 from './assets/combo2.jpg'
import combo3 from './assets/combo3.jpg'
import panner from './assets/pannerburger.jpg'
export const sample_foods=[
   {
      id:1,
      name:"Veg Burger",
      cookTime:"10-15",
      price: 100,
      favorite: false,
      stars: 4.5,
      imageUrl: vegburger,
      tags: ['Veg', 'Lunch','Burger'],
      des : "Veg Burger with cheese, corn, onion, tomato, jalapeno, pickle, onion, tomato, jalapeno, pickle"
    },
    {
      id:2,
      name:"Chicken Burger",
      cookTime:"10-15",
      price: 180,
      favorite: false,
      stars: 4.5,
      imageUrl: chickenburger,
      tags: ['NonVeg', 'Lunch','Burger'],
      des : "Chicken Burger with cheese, corn, onion, tomato, jalapeno, pickle, onion, tomato, jalapeno, pickle"
    },
    {
        id:3,
        name:"Cheese Burger",
        cookTime:"10-15",
        price: 160,
        favorite: false,
        stars: 4.5,
        imageUrl: cheeseburger,
        tags: [ 'Veg', 'Lunch','Burger'],
        des : "Cheese Burger with cheese, corn, onion, tomato, jalapeno, pickle, onion, tomato, jalapeno, pickle"
    },
    { 
        id:4,
        name:"Panner Burger",
        cookTime:"10-20",
        price: 160,
        favorite: false,
        stars: 5,
        imageUrl: panner,
        tags: ['Veg', 'Lunch','Burger'],
        des : "Veg Panner Burger with panner, onion, tomato, jalapeno, pickle, onion, tomato, jalapeno, pickle"
    },
    {
        id:5,
        name:"Fries",
        cookTime:"5-10",
        price: 90,
        favorite: false,
        stars: 4.2,
        imageUrl: fries,
        tags: ['Veg', 'Lunch','Fries'],
        des : "Salted Fries good with Add-ons of cheese, onion, tomato, jalapeno, pickle, onion, tomato, jalapeno, pickle on the side"
    },
    {
        id:6,
        name:"Peri Fries",
        cookTime:"5-10",
        price: 100,
        favorite: false,
        stars: 4.2,
        imageUrl: perifries,
        tags: ['Veg', 'Lunch','Fries'],
        des : "Peri Fries good with Add-ons of cheese, onion, tomato, jalapeno, pickle, onion, tomato, jalapeno, pickle on the side"
    },
    {
        id:7,
        name:"Coke",
        cookTime:"0",
        price: 40,
        favorite: false,
        stars: 4,
        imageUrl: coke,
        tags: ['Veg', 'Lunch','Drinks'],
        des : "Coke good on the side"
    },
    {
        id:8,
        name:"Pepsi",
        cookTime:"0",
        price: 40,
        favorite: false,
        stars: 4,
        imageUrl: pepsi,
        tags: ['Veg', 'Lunch','Drinks'],
        des : "Pepsi good on the side"
    },
    {
        id:9,
        name:"Addons",
        cookTime:"0",
        price: 40,
        favorite: false,
        stars: 4,
        imageUrl: addons,
        tags: ['Veg', 'Lunch','Add-ons'],
        des : "Addons good of mayo , ketchup , mustard on the side"
    },
    {
        id:10,
        name:"Combo1",
        cookTime:"15-20",
        price: 200,
        favorite: false,
        stars: 4,
        imageUrl: combo1,
        tags: ['Veg', 'Lunch','Combo'],
        des : "Combo1  of veg burger with coke and fries on the side"
    },
    {
        id:11,
        name:"Combo2",
        cookTime:"15-20",
        price: 230,
        favorite: false,
        stars: 4,
        imageUrl: combo2,
        tags: ['Veg', 'Lunch','Combo'],
        des : "Combo2  of cheese burger with coke and fries on the side"
    },
    {
        id:12,
        name:"Combo3",
        cookTime:"15-20",
        price: 250,
        favorite: false,
        stars: 4,
        imageUrl: combo3,
        tags: ['NonVeg', 'Lunch','Combo'],
        des : "Combo3  of chicken burger with coke and fries on the side"
    }
]