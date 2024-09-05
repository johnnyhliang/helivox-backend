'use strict';

/**
 * form-submission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::form-submission.form-submission');
