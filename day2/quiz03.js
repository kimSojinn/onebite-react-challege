// 주어진 온도에 따라 다음 메세지를 콘솔에 출력하세요
// 온도가 0°C보다 낮으면 "매우 추움"를 출력합니다.
// 온도가 0°C 이상 10°C 미만이면 "추움."를 출력합니다.
// 온도가 10°C 이상 20°C 미만이면 "적당"를 출력합니다.
// 온도가 20°C 이상이면 "더움"를 출력합니다.

let temperature = 10;

if (temperature < 0) {
    console.log("매우 추움");
} else if (0 <= temperature && temperature < 10) {
    console.log("추움.");
} else if (10 <= temperature && temperature < 20) {
    console.log("적당");
} else {
    console.log("더움");
}

// 자바스크립트에서 두 개의 조건을 사용하고 싶을 땐, &&를 사용!
// if문 작성시 마지막 조건은 else로 처리하는 것이 best
