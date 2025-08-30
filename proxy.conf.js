const apiUrl = process.env.API_BASE || 'https://brasil-transparente-api-492194254445.us-central1.run.app';

module.exports = {
  '/despesa-simplificada': {
    target: apiUrl,
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  },
  '/unidade-federativa': {
    target: apiUrl,
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  },
  '/poder': {
    target: apiUrl,
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  },
  '/ministerio': {
    target: apiUrl,
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  },
  '/orgao': {
    target: apiUrl,
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  },
  '/unidade-gestora': {
    target: apiUrl,
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  }
};
