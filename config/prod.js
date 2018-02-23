//production keys are here!!!
module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  mongodb: {
    mongoURI: process.env.MONGO_URI
  },
  cookie: {
    cookieKey: process.env.COOKIE_KEY
  },
  stripe: {
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
  }
};
