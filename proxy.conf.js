const user_profile_url = 'https://7nzo2zj6zk.execute-api.us-east-1.amazonaws.com/dev';

const PROXY_CONFIG = {
  '/api/user/profile': {
    target: user_profile_url,
    secure: false,
    // pathRewrite: {
    //   '^api/': '',
    // },
    // logLevel: 'debug',
    changeOrigin: true,
    // bypass: function (req, res, proxyOptions) {
    //   if (req.headers.accept.includes('html')) {
    //     console.log('Skipping proxy for browser request.');
    //     return '/index.html';
    //   }
    //   req.headers['X-Custom-Header'] = 'yes';
    // },
  },
};

export default PROXY_CONFIG;
