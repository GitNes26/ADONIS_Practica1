'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('index/:edad/:id?', 'MovieController.index').middleware(['edad'])
Route.post('movies', 'MovieController.create').validator(['Movie'])
Route.put('movies/:id', 'MovieController.update')
Route.delete('movies/:id', 'MovieController.delete')
