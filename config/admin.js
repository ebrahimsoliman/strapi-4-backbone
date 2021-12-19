module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f856dbde6a34b2d878c03323e6c080df'),
  },
});
