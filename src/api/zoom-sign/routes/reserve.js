module.exports = {
  routes: [
    {
      method : 'POST',
      path   : '/zoomsign',
      handler: 'zoom-sign.zoomsign',
      config : {
        policies   : [],
        middlewares: [],
      },
    },
  ],
};
