process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log(`Whats is your age?`)

process.stdin.on('data', (age) => {

    age = Number(age)
    let birthYear = 0;

    if (age <= 99 && typeof age === 'number'){
        birthYear = 2020 - age
        console.log(`Hello you was born in ${birthYear}`)
    }else{
        console.log(`please enter a number between 0 and 99`)
    }

    process.exit()
})
