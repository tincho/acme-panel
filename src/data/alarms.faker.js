import faker from "faker"

const zeroOrOne = () => parseInt(Math.random() * 2);

const triggerCondition = () =>
  `${['<', '>'][zeroOrOne()]} ${parseInt(Math.random() * 100)}%`;

const generateRandomAlarms = (max = 20) =>
  Array.from(
    {
      length: Math.random() * max
    },
    () => ({
      id: faker.datatype.uuid().substring(0, 5),
      name: faker.fake("{{hacker.verb}} {{hacker.adjective}} {{hacker.noun}}"),
      source: faker.hacker.noun(),
      metric: faker.hacker.abbreviation(),
      trigger: triggerCondition(),
      paused: String(Boolean(zeroOrOne()))
    })
  );

export default generateRandomAlarms