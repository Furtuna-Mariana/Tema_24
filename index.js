// Array.prototype.customeFilter = function(callBack) {
//     const filter = []
//     for (let index = 0; index < this.length; index++) {
//         if (callBack(this[index], index)) {
//         filter.push(this[index]);
//         return true;
//     }
// }
//     return false;
// }

// const testFilter = [1,2,3].customeFilter((item) => item + 5)

// console.log(testFilter)



// Array.prototype.customeFilter = function(callBack) {
// return this.reduce((acc, curr, index) => {
//  if(callBack(curr, index)) {
//     acc.push(curr)
//  }
//  return acc
// }, [])
// }
// console.log([1,2,3,4].customeFilter((item) => item >2))




// Array.prototype.customEvery = function (callBack) {
//     for (let i = 0; i < this.length; i++) {
//         if (callBack(this[i], i, this)) {
//             return false;
//         } 
//     }

//     return true;
// }

// const numbers = [1,2,3,4,5,6,7];

// const allEven = numbers.customEvery((num) => num % 1 ===0);
// console.log(allEven);




Array.prototype.myEvery = function(callBack) {
    for (let i = 0; i < this.length; i++) {
        if(!callBack(this[i], i)) return false
    }

    return true
}
  
    console.log([1,2,3,4].myEvery((item) => item > 0))







// Array.prototype.customSome = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//       if (callback(this[i], i, this)) {
//         return true;
//       }
//     }
//     return false;
//   };
  
//   const fruits = ['morcov', 'struguri', 'pere', 'rosii'];


// const hasLongFruit = fruits.customSome((fruit) => fruit.length > 10);
// console.log(hasLongFruit); 



// Array.prototype.mySome = function(callBack) {
//     return this.reduce((acc, curr, index) => {
//         console.log(curr)
//      if(callBack(curr, index)) {
//             return true
//      }
//      return acc
//     }, false)
//     }
//     console.log([1,2,3,4, -1].mySome((item) => item > 0))





// Array.prototype.customeMap = function(callBack) {

//     return this.reduce((acc, cur, index) => {
//         acc.push(callBack(cur, index))
//         return acc
//     }, [])
// }

// const testMap = [1,2,3].customeMap((item) => item + 1)

// console.log(testMap)





// Array.prototype.customSome = function(callback) {
      
//         return  this.reduce((acc, cur, index) => {
//             acc.push(callback(cur, index))
//             return acc
//         }, [])
// }

//     const testSome = [1,2,3,4,5,6,7].customSome((item) => item + 2)
//     console.log(testSome)



// let p = new Promise((resolve, reject) => {
//     let a = 3 + 5
//     if(a === 7) {
//         resolve ('succes')
//     } else {
//         reject('failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in then ' + message)
// }).catch((message) => {
//     console.log('This is in catch ' + message)
// }).finally(() => {
//     console.log('Willbe implemented no matter what')
// })





// const user = false
// const priceIsToHigh = false

// function sellHousPromise () {
//     return new Promise ((resolve, reject) => {
//         if(user) {
//             reject({
//                 name: 'User',
//                 message: 'Best price'
//             })
//         } else if (priceIsToHigh) {
//             reject({
//                 name: 'price is to high',
//                 message: 'high price'
//             })
//         } else {
//             resolve('we sold the hous')
//         }
//     })
// }
    

// sellHousPromise()
// .then(message => console.log('text: ' + message))
// .catch( error => console.log(`${error.name}: ${error.message}`))
// .finally()




// const numar = 2

// const conditiePromisa = new Promise((resolve, reject) => {
//      if (numar > 5) {
//         resolve ("Numarul este mai mare de 5.");
//      } else {
//         reject ("Numarul estemai mic decat 5.");
//      }

// });

// conditiePromisa.then((rezultat) => {
//     console.log(rezultat);
// }).catch((eroare) => {
//     console.log(eroare);
// }).finally()





// const promise1 = new Promise((resolve, reject) => resolve('promise1'))
// const promise2 = new Promise((resolve, reject) => resolve('promise2'))
// const promise3 = new Promise((resolve, reject) => resolve('promise3'))

// // Promise.all([
//     Promise.race([
//     promise1,
//     promise2,
//     promise3
// ]).then((message) => {
//     console.log(message)
// }).catch()



// const membrul1 = new Promise((resolve, reject) => resolve('membrul1'))
// const membrul2 = new Promise((resolve, reject) => resolve('membrul2'))
// const membrul3 = new Promise((resolve, reject) => resolve('membrul3'))

// Promise.all([
//     // Promise.race([
//     membrul1,
//     membrul2,
//     membrul3
// ]).then((message) => {
//     console.log(message)
// }).catch()