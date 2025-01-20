// 변수 a의 저장된 값의 타입을 문자열로 출력하세요
// 조건문과 typeof 연산자를 이용해 코드를 작성하세요
// ex) a가 number 타입이라면 console.log("숫자")
// ex) a가 string 타입이라면 console.log("문자열")
// ex) a가 boolean 타입이라면 console.log("불리언")

const a = true;

switch (typeof a) {
    case "string": {
        console.log("문자열");
        break;
    }
    case "number": {
        console.log("숫자");
        break;
    }
    case "boolean": {
        console.log("불리언");
        break;
    }
    case "undefined": {
        console.log("undefined");
        break;
    }
    default: {
        console.log("타입이 존재하지 않습니다");
    }
}

// 아쉬웠던 점: typeof 연산자의 결과는 문자열로 출력된다는 사실을 깜빡하고 처음 작성 시에 클래스 형으로 타입 비교를 해버렸다 ..
