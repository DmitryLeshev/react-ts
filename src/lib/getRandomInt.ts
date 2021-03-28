interface Args {
  min: number;
  max: number;
}

export default (args: Args) => {
  let { min, max } = args;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
