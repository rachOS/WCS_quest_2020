module.exports = () => {
    const chalk = require('chalk');
    const wilders = [
        {
            name: 'François',
            techno: 'React'
        },
        {
            name: 'Quentin',
            techno: 'PhP'
        },
        {
            name: 'Mandy',
            techno: 'Angular'
        },
    ]
    return wilders.map(i => console.log(`${chalk.green(i.name)} : ${chalk.blue(i.techno)}`))
}