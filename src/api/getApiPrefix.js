const genApiPrefix = () => {
  let prefix = 'https://rms-portal-backend-service.rms.cn-dev.jlr-vcdp.dcclouds.com';
  if (process.env.NODE_ENV === 'development') {
    prefix = 'https://rms-portal-backend-service.rms.cn-dev.jlr-vcdp.dcclouds.com';
  } else if (process.env.NODE_ENV === 'production') {
    prefix = 'https://rms-portal-backend-service.rms.cn-dev.jlr-vcdp.dcclouds.com';
  }
  return prefix;
};

export { genApiPrefix };
