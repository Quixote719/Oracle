const genApiPrefix = () => {
  let prefix = '';
  if (process.env.NODE_ENV === 'development') {
    prefix = 'https://rms-portal-backend-service.rms.cn-dev.jlr-vcdp.dcclouds.com';
  } else if (process.env.NODE_ENV === 'production') {
    prefix = 'https://rms-portal-backend-service.rms.cn-prod.jlr-vcdp.dcclouds.com';
  }
  return prefix;
};

export { genApiPrefix };
