let envDev;
try {
  envDev = require('./env.dev');
} catch (err) {}




let env = {};

env.appName = process.env.APP_NAME || 'Iso Template';

env.session = {
  secret: '2135732421412356364733123',
};




if (envDev) {
  console.log('--- DEV ENV ---');
  env = { ...env, ...envDev };
}

if (env.session.secret === '2135732421412356364733123')
  console.log('CHANGE SESSION SECRET IN env.js FILE');
if (env.appName === 'Iso Template')
  console.log('CHANGE APP NAME IN env.js FILE');

export default env;
