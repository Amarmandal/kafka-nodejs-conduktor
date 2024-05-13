const kafkaClient = require("./kafka.client");

async function main() {
  const consumer = kafkaClient.consumer({ groupId: "test-event-processor" });

  try {
    await consumer.connect();
    await consumer.subscribe({ topics: ["test-topic"], fromBeginning: true });

    console.log("connected successfully");

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          partition,
          offset: message.offset,
          value: message.value.toString(),
        });
      },
    });
  } catch (error) {
    console.log(error);
  }
}

main().catch((err) => console.log("Outside Main block;", err));
