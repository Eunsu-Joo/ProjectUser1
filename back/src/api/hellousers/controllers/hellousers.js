'use strict';

/**
 *  hellousers controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hellousers.hellousers');
