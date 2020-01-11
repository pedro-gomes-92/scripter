const { execSync } = require('child_process');
const env = require('dotenv-flow').config({
  path: 'variables',
}).parsed;

execSync(`npx vsce publish -p ${env.TOKEN}`);
