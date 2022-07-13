const getMax = require("./fetch-latest");

const main = async () => {
  const max = await getMax();
  console.log(max);
};
main();
