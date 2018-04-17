var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  
  let substrs = Array(s.length + 1).fill([]);
  let unique = [];
  let biggest = 0;
  
  for (let i = 0; i <= s.length; i++) {
    if (i === s.length) {
      substrs[unique.length].push(unique.join(''));
    }
    if ( unique.includes(s[i]) ) {
      unique = unique.join('');
      biggest = biggest < unique.length ? unique.length : biggest;

      if (substrs[unique.length].length) {
        substrs[unique.length].push(unique);
      } else {
        substrs[unique.length] = [unique];
      }

      unique = [s[i]];
    } else {
      biggest = biggest < unique.length ? unique.length : biggest;
      unique.push(s[i]);
    }
  }
  
  return substrs[biggest][0].length;
};