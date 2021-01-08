'use strict'

const DB = use('Database')
const Movie = use('App/Models/Movie')

class MovieController {
    async index ({params, response}){
        const {id} = params
        
        if (id){
            var movie = await Movie.find(id)
        }else {
            var movie = await Movie.all()  
        }
       return response.json(movie)
    }

    async create ({request, response}){
        const data = request.all()

        const movie = new Movie()
        movie.title    = data.title
        movie.gender   = data.gender
        movie.category = data.category
        movie.synopsis = data.synopsis
        movie.year     = data.year
        movie.price    = data.price

        try {
            await movie.save()
            return response.json(movie)
        } catch (error) {
            return response.json(Error)
        }      
    }

    async update({params, request, response}){
        const {id} = params
        const data = request.all()

        const movie = await Movie.find(id)
        movie.title    = data.title
        movie.gender   = data.gender
        movie.category = data.category
        movie.synopsis = data.synopsis
        movie.year     = data.year
        movie.price    = data.price

        try {
            await movie.save()
            return response.json(movie)
        } catch (error) {
            return response.json(Error)
        }

    }

    async delete({params, response}){
        const {id} = params
        const movies = await Movie.all()  

        const movie = await Movie.find(id)
        await movie.delete()

        return response.json({Notificación:"Pelicula eliminada", PeliculasRegistradas:movies})
    }
}

module.exports = MovieController
