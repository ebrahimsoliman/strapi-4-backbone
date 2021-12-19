module.exports = ({env}) => ({
  // ...
  socket: {
    enabled: true,
    resolve: './src/plugins/socket'
  },
  email: {
    config: {
      provider       : 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings       : {
        defaultFrom   : 'no-reply@inteligencia.co.uk',
        defaultReplyTo: 'ebrahim.ahmed@archmetry.co.uk',
        testAddress   : 'ebrahim.ahmed@archmetry.co.uk',
      },
    },
  },
  // ...
});

