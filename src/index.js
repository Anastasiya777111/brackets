module.exports = function check(str, bracketsConfig) {
    const openBr = bracketsConfig.map(value => value[0]);
    const closeBr = bracketsConfig.map(value => value[1]);
    const stack = [];
  
    for (let i of str) {
    const openIndex = openBr.indexOf(i);
      const closeIndex = closeBr.indexOf(i);
      
  
      if (openIndex === closeIndex) {
        if (stack[stack.length - 1] === openBr[openIndex]) {
          stack.pop();
        } else {
          stack.push(openBr[openIndex]);
        }
        continue;
      }
  
      if (openIndex >= 0) {
        stack.push(openIndex);
        continue;
      }
  
      if (closeIndex !== stack.pop()) {
        return false;
      }
    }
  
    return !stack.length;
  
  
  }