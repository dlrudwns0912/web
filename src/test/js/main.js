const cardImg1 = document.querySelector("#card-image1");
const cardImg2 = document.querySelector("#card-image2");
const cardImg3 = document.querySelector("#card-image3");
const card1Title = document.querySelector("#card1-title");
const card2Title = document.querySelector("#card2-title");
const card3Title = document.querySelector("#card3-title");
const card1Content = document.querySelector("#card1-content");
const card2Content = document.querySelector("#card2-content");
const card3Content = document.querySelector("#card3-content");
let cardStatus1 = 1;
let cardStatus2 = 1;
let cardStatus3 = 1;

function card1Change() {
    if (cardStatus1 === 1) {
        cardImg1.style.backgroundImage = "url('../images/card1_second.jpg')";
        card1Title.innerHTML = "사라지는 학교, 무너지는 일상";
        card1Content.innerHTML =
            "아이들의 웃음소리가 떠난 자리에 늘어가는 빈집และ 폐교는 지역 공동체의 붕괴를 가속화합니다.";
        cardStatus1 = 2;
    } else {
        cardImg1.style.backgroundImage = "url('../images/card1.jpg')";
        card1Title.innerHTML = "2026 지방소멸 시한폭탄";
        card1Content.innerHTML =
            "전국 시·군·구 10곳 중 6곳이 인구 재생산 불가능한 '소멸 위험 지역'으로 진입했습니다.";
        cardStatus1 = 1;
    }
}

function card2Change() {
    if (cardStatus2 === 1) {
        cardImg2.style.backgroundImage = "url('../images/card2_second.jpg')";
        card2Title.innerHTML = "가장 가까운 병원은 어디에";
        card2Content.innerHTML =
            "산부인과와 응급실 등 필수 의료 인프라의 부재는 지역 주민들의 삶의 질을 직접적으로 위협합니다.";
        cardStatus2 = 2;
    } else {
        cardImg2.style.backgroundImage = "url('../images/card2.jpg')";
        card2Title.innerHTML = "주거 지원만으론 실패";
        card2Content.innerHTML =
            "청년들이 지방을 떠나는 진짜 이유는 주택 문제보다 '양질의 일자리와 산업 부족'때문입니다.";
        cardStatus2 = 1;
    }
}

function card3Change() {
    if (cardStatus3 === 1) {
        cardImg3.style.backgroundImage = "url('../images/card3_second.jpg')";
        card3Title.innerHTML = "다시 반짝이는 로컬의 불빛";
        card3Content.innerHTML =
            "청년 농부와 지역 특산물의 만남, 그리고 스마트 팜 기술 도입을 통해 시골은 새로운 기회의 땅으로 변모합니다.";
        cardStatus3 = 2;
    } else {
        cardImg3.style.backgroundImage = "url('../images/card3.jpeg')";
        card3Title.innerHTML = "이주 대신 '생활인구'";
        card3Content.innerHTML =
            "주민등록상 인구 집착을 버리고 주말 관광객이나 체류 인구를 늘리는 생존 전략이 대세입니다.";
        cardStatus3 = 1;
    }
}

cardImg1.addEventListener("click", () => {
    card1Change();
});

cardImg2.addEventListener("click", () => {
    card2Change();
});

cardImg3.addEventListener("click", () => {
    card3Change();
});
