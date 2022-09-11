const verbose = false;

const hashName = (name) => {
  let hashValue = 0;
  for (const ch of name) {
    const chValue = ch.toLowerCase().charCodeAt(0) - 96;
    if (verbose) { console.log(`${ch} = ${chValue}`); }

    hashValue += chValue;
  }

  if (verbose) { console.log("-------"); }
  console.log(`The name "${name}" has a hash value of ${hashValue}.`);
  if (verbose) { console.log(""); }

  return hashValue;
}

module.exports = hashName;