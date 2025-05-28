const person = {
  name: 'Luis',
  lastName: 'Pinto',
  direction: 'Urbanización Doña Clara',
};

const { name, lastName } = person;
// console.log(name, lastName);

const numbers = [1, 2, 3, 4, 5];
const [numberOne, numberTwo, ...rest] = numbers;
// console.log(numberOne, numberTwo, rest);

function useState(value) {
  return [value, (otherValue) => 'Hola mundo'];
}

const [user, setUser] = useState(null);

console.log(user);
setUser({ nombre: 'Luis', apellido: 'Pinto' });
console.log(user);
