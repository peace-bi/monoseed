// Jest configuration for api
const base = require("../../jest.config.base.js");

module.exports = {
    ...base,
    name: 'mobile',
    displayName: 'mobile',
    rootDir: "../..",
    preset: 'react-native'
};