
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['82XYMYF6wrk6x71iv87Zyn'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  