'use strict';

/**
 * user-survey service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-survey.user-survey');
