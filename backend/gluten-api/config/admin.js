module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd766bad7a8a91956f4cdf3ad0e1ad171'),
  },
});
