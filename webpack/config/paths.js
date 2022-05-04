const path = require('path')

const appDir = process.cwd()

console.info(appDir, '<---')

const resolveApp = relativePath => {
    return path.resolve(appDir, relativePath)
}

module.exports = resolveApp