class Config {
  constructor(host, port) {
    this.config = {
      host,
      port
    };
  }

  getConfig() {
    return this.config;
  }

  prependHost(filepath) {
    return `${this.config.host}:${this.config.port}/${filepath}`;
  }
}

module.exports = new Config(
  `${process.env.SERVER_PROTOCOL}://${process.env.SERVER_HOST}`,
  process.env.SERVER_PORT
);
