const obj = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
};

const keys = Object.keys(obj);
console.log(keys); // Output: ['name', 'age', 'occupation']
l = [];
for (i in obj) {
  l.push(i);
}
console.log(l);
