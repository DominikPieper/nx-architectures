import { execSync } from 'child_process';
import {
    ensureDirSync,
    removeSync,
} from 'fs-extra';
import { basename } from 'path';
import { logger } from '@nx/devkit';
const tmpProjectDir = `${process.cwd()}/tmp/playground/proj`;
console.log('\nCreating playground. This may take a few minutes.');

logger.info('Remove old playground workspace...');
removeSync(tmpProjectDir);
ensureDirSync(tmpProjectDir);

const baseName = basename(tmpProjectDir);

logger.info('Creating nx workspace...');
execSync(
    `pnpx create-nx-workspace --preset=empty --name=${baseName} --skipGit=true --packageManager=pnpm --nxCloud=false`,
    {
        cwd: tmpProjectDir,
    }
);
logger.info('Nx workspace created!');
console.log(`\nCreated playground at ${tmpProjectDir}.`);