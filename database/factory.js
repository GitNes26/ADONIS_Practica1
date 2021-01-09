'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
// const Hash = use('Hash')

// Factory.blueprint('App/Models/User', async (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Movie', (faker) => { 
    return {
        title: faker.word(),
        gender: faker.word(),
        category: faker.character({pool:'12345'})+' estrella(s)',
        synopsis: faker.paragraph(),
        year: faker.year({min:1990, max:2020}),
        price: faker.floating({min:50, max:500, fixed:2})
    } 
})