const { Kafka, logLevel } = require("kafkajs");

const kafkaClient = new Kafka({
  brokers: ["localhost:19092"],
  logLevel: logLevel.ERROR,
  retry: {
    retries: 5,
  },
});

module.exports = kafkaClient;
