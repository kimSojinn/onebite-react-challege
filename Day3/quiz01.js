// 변수 num의 모든 약수를 다 찾아서 출력하세요
let num = 100;

for (let i = 1; i <= num; i++) {
  if( num % i === 0) {
    console.log(i)
  }
}