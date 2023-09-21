/**
 * TASK 1.
 * 
 * Based on how the variables are used below, declare their types accordingly.
 * If you see a place to use an enum (or enum-like structure), don't hesitate to use it.
 */

let foo = 5;
foo = 10;
foo = null;

let bar = 'Foobar!';
bar = 'test';

let num = 5;
num = '6';
num = null

let userRole = 'admin';
userRole = 'user';
userRole = 'moderator';

let userIsLogged = true;
userIsLogged = false;


/**
 * TASK 2.
 * 
 * All three objects created below ()`userOne`, `userTwo` and `userThree`) should be of the same type `User`.
 * Declare its structure, based on the current values in the objects.
 * You're not limited to primitive types; you're encouraged to create your own.
 *
 * Note:
 * 1. `role` MUST NOT be a direct union like `'admin' | `moderator' | `user`.
 *    It should take advantage oth the `enum`(-like) type declared in the previous exercise.
 * 2. The `users` array should also have its type.
 * 3. `isLogged` is an optional property.
 * 4. `numbers` and `arr` are a very special case of "fixed" array;
 *     Will always contain 3 elements: two numbers and a string.
 */

const userOne = {
    login: 'Alex',
    email: 'alex.user1@gmail.com',
    age: 20,
    role: 'admin',
    isLogged: true
}

const userTwo = {
    login: 'Bob',
    email: 'bob.user2@gmail.com',
    age: 30,
    role: 'moderator'
}

const userThree = {
    login: 'Celine',
    email: 'celine.user3@gmail.com',
    age: 40,
    role: 'admin'
}

const users = [];
users.push(userOne, userTwo, userThree);

const numbers = [5, 8, '8'];

const arr = ['John', 'admin', 20]


/**
 * TASK 3.
 * 
 * Add type declarations to the below functions; to their arguments, return values, and innerts.
 * We're referencing the values and types declared in the previous exercise.
 */

const addUser = (login, email, age, role) => {
    const user = { login, email, age, role };
    users.push(user);
    return user;
}

const removeUser = (paramName, paramValue) => {
    const index = users.findIndex(user => user[paramName] === paramValue);
    users.splice(index, 1);
    return true;
}

const addUsers = (...users) => {
    for(const user of users) {
        addUser(user.login, user.email, user.age, user.role);
    }
}

const getUser = (paramName, paramValue) => {
    return users.find(user => user[paramName] === paramValue);
}

/**
 * TASK 4.
 * 
 * The `parseField` function should allow its argument to be a string or number.
 * - If it's a string, then the `parseEmail` function should be used.
 * - If we're given a number, let's use the `parseAge` instead.
 */

const parseEmail = (val: string): string => { return val }
const parseAge = (val: number): number => { return val }

const parseField = (fieldValue) => {

}

/**
 * TASK 5.
 * 
 * As the last task, help the TS compiler with the `titleClickHandler` function.
 * - take care of declaring its `this` (we're expecting it to be an `HTMLButtonElement`).
 * - help also in making certain that the `inputElem` would definitely be found and have type of `HTMLInputElement`
 */

const titleClickHandler = function() {
    this.addEventListener('click', () => {
        console.log('Someone clicked me...')
    })
    const inputElem = document.querySelector('.input-elem');
    inputElem.value = 'Hello world!'
}