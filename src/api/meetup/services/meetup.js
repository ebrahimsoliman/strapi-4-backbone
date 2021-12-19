'use strict';

/**
 * meetup service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meetup.meetup');
