// example helper functions that will be used later
const double = v => v * 2
const square = v => v * n
const oneThird = v => v / 3

// a helper variable
let n = 3

/**
 * Write an implementation of a `take` function
 */
const take = (initialState) => {

}

/**
 * so it would be possible to use it as follows:
 */

console.log(
    take(n).result // should log 3
)

console.log(
    take(n).chain(double).result // should log 6
)

console.log(
    take(n).chain(double).chain(square).result // should log 36
)

console.log(
    take(n).chain(double).chain(square).chain(oneThird).result // should log 12
)