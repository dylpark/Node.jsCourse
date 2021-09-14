// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const name = 'Tim'
const userAge = 27

const user = {
    // name: name, (Shorthand syntax below, names match exactly)
    name,
    age: userAge,
    location: 'New York'
}

console.log(user)

// Object Destructuring
const product = {
    label: 'Red Book',
    price: 3,
    stock: 200,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// Destructuring Syntax w/Renaming of a variable, and a new variable with a default value.
// const { label: productLabel, stock, rating = 0 } = product
// console.log(productLabel)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)