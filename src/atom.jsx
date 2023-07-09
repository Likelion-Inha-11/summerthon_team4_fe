import { atom } from "recoil";

export const testId = atom({
  key: "testId",
  default: 0,
});

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
  ],
});

export const testResult = atom({
  key: "testResult",
  default: [
    {
      testid: 1,
      scores: [
        {
          idx: 1,
          score: 0,
        },
        {
          idx: 2,
          score: 0,
        },
        {
          idx: 3,
          score: 0,
        },
        {
          idx: 4,
          score: 0,
        },
        {
          idx: 5,
          score: 0,
        },
        {
          idx: 6,
          score: 0,
        },
        {
          idx: 7,
          score: 0,
        },
        {
          idx: 8,
          score: 0,
        },
        {
          idx: 9,
          score: 0,
        },
        {
          idx: 10,
          score: 0,
        },
      ],
    },
  ],
});
