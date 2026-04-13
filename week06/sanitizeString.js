// week06 문제 3: 문자열에서 특수 문자 제거 및 소문자 정규화
function sanitizeString(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
}

console.log(sanitizeString(' Hello, World! ')); // "hello world"
console.log(sanitizeString('JavaScript@2026#')); // "javascript2026"
