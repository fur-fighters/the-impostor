const createCounterComponent = () => {
    
}

/**
 * Implement the above `createCounterComponent` function which should return a new instance of a component.
 * The component, when used, should return the number of times it had been called.
 * 
 * So:
 */

const firstCounter = createCounterComponent()
const secondCounter = createCounterComponent()
const thirdCounter = createCounterComponent()
const fourthCounter = createCounterComponent()

console.log(firstCounter()) // should log: 1
console.log(firstCounter()) // should log: 2
console.log(secondCounter()) // should log: 1
console.log(firstCounter()) // should log: 3
console.log(thirdCounter()) // should log: 1
console.log(firstCounter()) // should log: 4
console.log(secondCounter()) // should log: 2
console.log(fourthCounter()) // should log: 1

console.debug('---')