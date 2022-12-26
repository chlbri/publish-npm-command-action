import { debug, getInput, setFailed } from '@actions/core';
import buildCommand from '@bemedev/publish-command';
import { checkPath, setOutputs } from './helpers';

async function run(): Promise<void> {
  try {
    debug(`Start ...`);
    debug(new Date().toTimeString());
    const inputPath = getInput('path');
    const path = checkPath(inputPath) ? inputPath : undefined;

    const { command, version } = await buildCommand(path);

    setOutputs({ command, version });
    debug(new Date().toTimeString());
    debug('Done!');
  } catch (error) {
    if (error instanceof Error) setFailed(error.message);
  }
}

run();
