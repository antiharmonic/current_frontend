/**
 * @param {import('preact-cli').Config} config - Original webpack config
 * @param {import('preact-cli').Env} env - Current environment info
 * @param {import('preact-cli').Helpers} helpers - Object with useful helpers for working with the webpack config
 */
import envVars from 'preact-cli-plugin-env-vars';

export default function (config, env, helpers) {
  envVars(config, env, helpers);
}