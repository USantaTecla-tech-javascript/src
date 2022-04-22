const { Console } = require("./console");

const console = new Console();
const list = [
    {
        id: 1,
        name: 'Steve',
        email: 'steve@example.com',
    },
    {
        id: 2,
        name: 'John',
        email: 'john@example.com',
    },
    {
        id: 3,
        name: 'Pamela',
        email: 'pam@example.com',
    },
    {
        id: 4,
        name: 'Liz',
        email: 'liz@example.com',
    },
];
for(let person of list.filter(item => item.name !== 'John')){
    console.writeln(`Nombre: ${person.name}`);
}

const filterByName = (list, name) => {
    const filtering = (name) => (item) => item.name !== name;
    return list.filter(filtering(name));
}
for(let person of filterByName(list, 'John')){
    console.writeln(`Nombre: ${person.name}`);
}

function filterByName2(list, name) {
    return list.filter(function (_name) {
        return function (item) {
            return item.name !== _name;
        }
    }(name));
}
for(let person of filterByName2(list, 'John')){
    console.writeln(`Nombre: ${person.name}`);
}