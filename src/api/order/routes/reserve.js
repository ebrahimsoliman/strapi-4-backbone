module.exports = {
  routes: [
    {
      method : 'POST',
      path   : '/reserve',
      handler: 'pay.payment',
      config : {
        policies   : [],
        middlewares: [],
      },
    },{
      method : 'POST',
      path   : '/at',
      handler: 'pay.jwt',
      config : {
        policies   : [],
        middlewares: [],
      },
    },
  ],
};
