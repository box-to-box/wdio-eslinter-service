// eslint-npm-runner.js

const { spawn } = require('child_process');

module.exports = function () {
    return new Promise((resolve, reject) => {
        const npmCmd = process.platform.match('^win') !== null ? 'npm.cmd' : 'npm';
        const eslint = spawn(npmCmd, ['run', 'eslint', '--silent'], { stdio: "inherit" });

        eslint.on('close', (code) => {
            if (code !== 0)
                reject(code);
            else
                resolve(code);
        });
    });
}
