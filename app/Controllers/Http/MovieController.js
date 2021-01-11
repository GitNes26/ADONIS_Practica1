'use strict'

const DB = use('Database')
const Movie = use('App/Models/Movie')
// const { validate } = require('indicative')
const {validate} = use('Validator')

class MovieController {
    
    async index ({params, response}){
        const {id} = params
        
        if (id){
            const movie = await Movie.find(id)
            return response.json({Pelicula:movie})
        }else {
            const movies = await Movie.all()
            return response.json({Cartelera:movies})
        }
    }

    async create ({request, response}){
        const rules = {
            title    : 'required|unique:movies',
            gender   : 'required',
            category : 'required',
            synopsis : 'required|min:10',
            year     : 'required|number',
            price    : 'required|number'
        }
        const data = request.all()
        const validation = await validate(data, rules)
        
        if (validation.fails()) {
            return response.json({
                Notificacion:'Informacion invalida',
                Error:validation.messages()})
        }

        const movie = new Movie()
        movie.title    = data.title
        movie.gender   = data.gender
        movie.category = data.category
        movie.synopsis = data.synopsis
        movie.year     = data.year
        movie.price    = data.price

        try {
            await movie.save()
            return response.json({Notificacion:'Pelicula Registrada', DatosPelicula:movie})
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
            return response.json({Notificacion:'Datos de Pelicula Actualizados', DatosPelicula:movie})
        } catch (error) {
            return response.json(Error)
        }

    }

    async delete({params, response}){
        const {id} = params
        const movies = await Movie.all()  

        const movie = await Movie.find(id)
        await movie.delete()

        return response.json({Notificacion:'La pelicula - ' + movie.title + ' - fue eliminada', PeliculasRegistradas:movies})
    }
}

module.exports = MovieController
