// 다음 요구사항을 만족하는 코드를 작성하세요

// book 객체 내에 '출판년도(publishedYear)' 속성이 있는지 확인해 결과에 따라 다음과 같이 출력합니다.

// 속성이 있으면: "출판년도는 ${출판년도}입니다."
// 속성이 없으면: "출판년도 정보가 없습니다."

const book = {
    title: "한 입 크기로 잘라먹는 리액트",
    author: "이정환",
    // publishedYear 속성은 이 객체에는 없습니다.
};

if ("publishedYear" in book) {
    console.log("출판년도는 ${book.pulishedYear}입니다.");
} else {
    console.log("출판년도 정보가 없습니다.");
}

// 프로퍼티의 존재 유무를 확인할 때는 in 연산자 사용 !!
