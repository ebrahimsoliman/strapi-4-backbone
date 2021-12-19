'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('socket')
      .service('myService')
      .getWelcomeMessage();
  },
};
