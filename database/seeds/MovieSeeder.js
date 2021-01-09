'use strict'

/*
|--------------------------------------------------------------------------
| MovieSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Movie = use('App/Models/Movie')
const Database = use('Database')

class MovieSeeder {
  async run () {
    // const movie = await Movie
    // console.log(movie)

    // await Movie.insert
    await Database.table('movies').insert([
      {
        title: '7 Almas',
        gender: 'Drama',
        category: '5 estrella(s)',
        synopsis: 'Ben Thomas busca una manera de expiar sus culpas y descubre que tiene el poder de cambiar el destino de siete extraños que merecen una segunda oportunidad',
        year: 2008,
        price: 150.00
      },
      {
        title: 'Belleza Inesperada',
        gender: 'Drama',
        category: '4.5 estrella(s)',
        synopsis: 'Un ejecutivo publicitario sumido en un profundo dolor escribe cartas a destinatarios impensados. Preocupados, sus colegas y amigos intentan ayudarlo a superar su perdida.',
        year: 2016,
        price: 119.99
      }
    ])

    const movies = await Factory.model('App/Models/Movie').createMany(8)
  }
}

module.exports = MovieSeeder
