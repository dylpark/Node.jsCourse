// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 4, 1])
            // reject('Things went wrong!')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})

//
//                               fulfilled (resolve)
//                              /
// Promise      -- pending --> 
//                              \
//                               rejected (reject)
//