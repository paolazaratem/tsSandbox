function fruitConfig(fruit: { name: string; color: string }) {
  console.log('fruta');
  console.log(fruit.name + ' color: ' + fruit.color);
}

let myFruit = { name: 'lulo', color: 'naranja' };

fruitConfig(myFruit);
