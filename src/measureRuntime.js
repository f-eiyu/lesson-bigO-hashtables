const measureRuntime = (callback, ...cbArgs) => {
  const startTime = new Date();
  callback(...cbArgs);
  const endTime = new Date();

  return (endTime - startTime);
}

module.exports = measureRuntime;