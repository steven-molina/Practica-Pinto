const isAnagram = (wordOne, wordTwo) => {
  if (wordOne.toLowerCase() === wordTwo.toLowerCase()) return false;

  return (
    [...wordOne.toLowerCase()].sort().join('') ===
    [...wordTwo.toLowerCase()].sort().join('')
  );
};

console.log(isAnagram('amo', 'AMO'));
