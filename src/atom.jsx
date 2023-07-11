import { atom } from "recoil";

export const testObj = atom({
  key: "testObj",
  default: [
    {
      testid: 1,
      questions: [
        {
          id: 1,
          dropped: false,
          question: "대화를 할 때 잘 듣지 않는 경우가 있다. ",
          content: "집중도",
        },
        {
          id: 2,
          dropped: false,
          question:
            "과제나 업무를 수행하는 데 있어서 집중을 잘 못하고, 부주의로 인한 실수가 종종 있다. ",
          content: "집중도",
        },
        {
          id: 3,
          dropped: false,
          question: "활동에 필요한 물건들을 종종 잃어버린다. ",
          content: "주의력 부족",
        },
        {
          id: 4,
          dropped: false,
          question: "일상적인 일들을 종종 잊어버린다.",
          content: "주의력 부족",
        },
        {
          id: 5,
          dropped: false,
          question:
            "지시를 잘 따르지 않거나 숙제, 임무 등을 완수하지 못하는 경우가 종종 있다. ",
          content: "업무 완성도",
        },
        {
          id: 6,
          dropped: false,
          question:
            "지속적으로 정신력이 필요한 과제에 몰두하는 것을 피하거나, 거부하는 경우가 종종 있다.",
          content: "업무 완성도",
        },
        {
          id: 7,
          dropped: false,
          question: "외부 자극에 의해 종종 산만해진다.",
          content: "산만스러움",
        },
        {
          id: 8,
          dropped: false,
          question:
            "손발이 가만히 있지 않으며, 자리에 앉아서는 계속 몸을 꿈틀거리는 일이 종종 있다.",
          content: "산만스러움",
        },
        {
          id: 9,
          dropped: false,
          question: "지나치게 말을 많이 하는 경우가 종종 있다.",
          content: "수다쟁이",
        },
        {
          id: 10,
          dropped: false,
          question: "주변 사람들에게 지나치게 말이 많다는 소리를 종종 듣는다.",
          content: "수다쟁이",
        },
      ],
    },
    {
      testid: 2,
      questions: [
        {
          id: 1,
          dropped: false,
          question: "나는 성미가 급하다. ",
          content: "참을성 부족",
        },
        {
          id: 2,
          dropped: false,
          question: "나는 불같은 성질을 지녔다. ",
          content: "참을성 부족",
        },
        {
          id: 3,
          dropped: false,
          question: "나는 격해지기 쉬운 사람이다. ",
          content: "충동성",
        },
        {
          id: 4,
          dropped: false,
          question: "나는 쉽게 화를 낸다.",
          content: "충동성",
        },
        {
          id: 5,
          dropped: false,
          question:
            "나는 다른 사람이 잘못해서 내 일이 늦어지게 되면 화가 난다. ",
          content: "관용 부족",
        },
        {
          id: 6,
          dropped: false,
          question:
            "나는 일을 잘하고도 다른 사람으로부터 인정받지 못하면 분통이 터진다.",
          content: "관용 부족",
        },
        {
          id: 7,
          dropped: false,
          question: "나는 화가 나면 욕을 한다. ",
          content: "폭력성",
        },
        {
          id: 8,
          dropped: false,
          question: "나는 내 일이 막히면, 누군가를 때려주고 싶다. ",
          content: "폭력성",
        },
        {
          id: 9,
          dropped: false,
          question: "나는 다른 사람 앞에서 비판을 받게 되면 격분한다.",
          content: "수용력 부족",
        },
        {
          id: 10,
          dropped: false,
          question:
            "나는 일을 잘 했는데도 나쁜 평가를 받게 되면 격분을 느낀다.",
          content: "수용력 부족",
        },
      ],
    },
    {
      testid: 3,
      questions: [
        {
          id: 1,
          dropped: false,
          question: "스트레스를 술로 해결한다. ",
          content: "의존성",
        },
        {
          id: 2,
          dropped: false,
          question: "혼자 술을 마신다. ",
          content: "의존성",
        },
        {
          id: 3,
          dropped: false,
          question: "술 마신 다음 날 해장 술을 마신다. ",
          content: "욕구 통제불가",
        },
        {
          id: 4,
          dropped: false,
          question: "술에 대한 욕구를 참을 수 없다.",
          content: "욕구 통제불가",
        },
        {
          id: 5,
          dropped: false,
          question: "최근 6개월 간 2회 이상 블랙아웃을 경험했다. ",
          content: "참을성 부족",
        },
        {
          id: 6,
          dropped: false,
          question: "취기가 오르면 술을 계속 마시고 싶어진다. ",
          content: "참을성 부족",
        },
        {
          id: 7,
          dropped: false,
          question: "대인관계, 사회생활에 지장이 있다.",
          content: "사회 영향",
        },
        {
          id: 8,
          dropped: false,
          question: "술로 인해 일하는 데 어려움이 많다.",
          content: "사회 영향",
        },
        {
          id: 9,
          dropped: false,
          question: "술이 깨면 진땀, 손떨림, 불안을 느끼거나 잠을 못 이룬다.",
          content: "증상 발현 위험",
        },
        {
          id: 10,
          dropped: false,
          question: "술로 인한 심리적, 신체적 질병을 치료 받은 적이 있다.",
          content: "증상 발현 위험",
        },
      ],
    },
    {
      testid: 4,
      questions: [
        {
          id: 1,
          dropped: false,
          question: "일하는 것이 즐겁거나, 보람 있다는 생각이 들지 않는다.",
          content: "에너지 부족",
        },
        {
          id: 2,
          dropped: false,
          question: "하루 중 기분이 가장 좋은 때가 별로 없다. ",
          content: "에너지 부족",
        },
        {
          id: 3,
          dropped: false,
          question: "활동에 요즈음 체중이 줄었다. ",
          content: "신체적 변화",
        },
        {
          id: 4,
          dropped: false,
          question: "식사를 잘 하지 못하는 편이다. (식욕이 없다)",
          content: "신체적 변화",
        },
        {
          id: 5,
          dropped: false,
          question: "밤에 잠을 설칠 때가 있다. ",
          content: "자기통제 불가",
        },
        {
          id: 6,
          dropped: false,
          question: "갑자기 얼마 동안 울음을 터뜨리거나 울고 싶을 때가 있다.",
          content: "자기통제 불가",
        },
        {
          id: 7,
          dropped: false,
          question: "별 다른 이유 없이 자주 피곤하다.",
          content: "피로감",
        },
        {
          id: 8,
          dropped: false,
          question: "항상 머리가 무겁고 멍한 기분이다.",
          content: "피로감",
        },
        {
          id: 9,
          dropped: false,
          question: "내 인생은 좋지 않은 일만 있는 것 같다.",
          content: "무기력증",
        },
        {
          id: 10,
          dropped: false,
          question: "매사에 의욕이 없고 우울하거나 슬플 때가 있다.",
          content: "무기력증",
        },
      ],
    },
  ],
});

export const testResult = atom({
  key: "testResult",
  default: [
    {
      idx: 1,
      score: 5,
    },
    {
      idx: 2,
      score: 5,
    },
    {
      idx: 3,
      score: 5,
    },
    {
      idx: 4,
      score: 5,
    },
    {
      idx: 5,
      score: 5,
    },
    {
      idx: 6,
      score: 5,
    },
    {
      idx: 7,
      score: 5,
    },
    {
      idx: 8,
      score: 5,
    },
    {
      idx: 9,
      score: 5,
    },
    {
      idx: 10,
      score: 5,
    },
  ],
});

export const testName = atom({
  key: "testName",
  default: 2,
});
