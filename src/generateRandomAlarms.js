import faker from "faker";

const randomItem = (collection) =>
  collection[parseInt(Math.random() * collection.length)];

const triggerCondition = () => {
  const compare = randomItem(["<", ">"]);
  const value = parseInt(Math.random() * 100);
  const sign = randomItem(["", "", "%", "hz", "rpm"]);
  return [compare, value, sign];
};

const generateRandomAlarms = ({ min = 0, max = 20 }) =>
  Array.from(
    {
      length: Math.random() * (max - min) + min,
    },
    () => ({
      id: faker.datatype.uuid().substring(0, 5),
      name: faker.fake("{{hacker.verb}} {{hacker.adjective}} {{hacker.noun}}"),
      source: faker.hacker.noun(),
      metric: faker.hacker.abbreviation(),
      trigger: triggerCondition(),
      paused: randomItem(["true", "false"]),
    })
  );

export default generateRandomAlarms;
