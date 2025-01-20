// 목표: 학생들의 평균 성적을 출력합니다.

// 다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요

// 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.

// 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.

// "{이름}: {평균}" 형태로 출력합니다.

function printAvgScore(students) {
    for (let name in students) {
        let sum = 0;
        const { scores } = students[name]; // 여기서 해당 name의 객체에서 scores 속성만 추출

        for (let score of scores) {
            sum += score;
        }
        const avg = sum / scores.length;
        console.log(`${name} : ${avg}`);
    }
}

printAvgScore({
    이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
    김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
    홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58

// of는 배열, in은 객체!
// for in 연산자 => 객체의 key 값만 추출 가능
// 전체 객체를 하나의 매개변수로 사용할 때는 중괄호 사용 안함

// for in 연산자로 students 객체(=printAvgScore 객체)에서의 name값(=key값) 먼저 추출 -> 합계를 저장할 변수 초기화 -> students[name]로 name 속성의 프로퍼티 추출 + 구조 분해 할당 {scores} 로 scores 속성만 추출 ->
// for of 연산자로 scores 배열의 값을 하나씩 돌며 sum에 점수 누적 -> avg 평균 계산
