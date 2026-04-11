// week06 문제 2: 괄호 균형 검사
function parenthesesBalance(str) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };

  for (const ch of str) {
    if (['(', '[', '{'].includes(ch)) {
      stack.push(ch);
    } else if ([')', ']', '}'].includes(ch)) {
      if (stack.pop() !== pairs[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(parenthesesBalance('([{}])')); // true
console.log(parenthesesBalance('([)]')); // false
