const kafkaClient = require("./kafka.client");

const producer = kafkaClient.producer();

const run = async () => {
  await producer.connect();

  await producer.send({
    topic: "test-topic",
    messages: [{ value: "Hello Kafka!" }],
  });

  console.log("Message sent successfully");
  await producer.disconnect();
};

run().catch((e) => console.error("[example/producer] e.message", e));
