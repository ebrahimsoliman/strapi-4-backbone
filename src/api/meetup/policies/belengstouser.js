'use strict';

/**
 * `belengstouser` policy.
 */

module.exports = (config, { strapi }) => {
  return policyCtx => {
    // Add your own logic here.
    strapi.log.info('In belengstouser policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
  };
};
