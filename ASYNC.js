// console.log('Hey Whats up!, Please wait')
// setTimeout(() => {
//     console.log('Finally  we got your data')
// }, 3000)

setTimeout(() => {

    document.body.style.backgroundColor = "magenta"
    setTimeout(() => {

        document.body.style.backgroundColor = "green"
    }, 2000)
}, 2000)

const delayedClrChange = (newclr, delay) => {
    setTimeout(() => {

        document.body.style.backgroundColor = newclr;
    }, delay)

}
// delayedClrChange('green', 3000)

// const request = fakeRequestPromise('google.com')

// request.then(() => {
//     console.log('It worked!!!')
// })
// request.catch(() => {

//     console.log('AHH It is error')
// })

// async function bravo() {

// }

const come = async () => {
    return "lol"
}
come()
    .then((data) => {
        console.log('Promise resolved with:', data)
    })
    .catch(err => {
        console.log('oh no')
        console.log(err)
    })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'cons1884' && username === 'Ahil') return 'Welcome!'
    throw 'Invalid username or Password'
}
login('Ahil', 'cons1884')

    .then(msg => {
        console.log('logged in')
        console.log(msg)
    })
    .catch(err => {
        console.log('Error!')
        console.log(err)
    })