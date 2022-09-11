// Assume that cb is a callback function. What does the measure function do?
//  - measuring the time it takes to run the callback

const measure = (cb) => {
  const start = new Date();
  cb();
  const end = new Date();

  return (end - start);
}