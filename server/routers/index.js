const router = require('koa-router')();

const home = require('./home');
const dashboard = require('./dashboard');
const api = require('./api');
const admin = require('./admin');
const user = require('./user');
const page = require('./page');
const test = require('./test');

router.use('/', home.routes(), home.allowedMethods());
router.use('/dashboard', dashboard.routes(), dashboard.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

// TODO
router.use('/test', test.routes(), test.allowedMethods());

module.exports = router;

