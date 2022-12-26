import { exec } from 'child_process';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setOutput(name: string, value: any) {
  return exec(`echo "${name}=${value}" >> $GITHUB_OUTPUT`);
}

type Props = Record<string, any>;

export function setOutputs<T extends Props>(outputs: T): void {
  Object.entries(outputs).forEach(([key, value]) => {
    setOutput(key, value);
  });
}

export function checkPath(path?: string) {
  return !!path && path.trim().length > 0;
}