'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ValidateAge {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ params, response }, next) {
    const {edad} = params

    if (edad < 18) {
      return response.json({Notificacion:"No tienes edad suficiente para acceder a este sitio."})
    }
    await next()
  }
}

module.exports = ValidateAge
