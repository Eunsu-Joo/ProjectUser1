module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '83c42f45c2decd1ecccca72babd18d24'),
  },
});
