const axios = require('axios')

module.exports = axios.create({
  baseURL: 'http://yerkee.com/api'
});