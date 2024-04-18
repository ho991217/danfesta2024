import adjectives from './adjectives';
import data from './data';

export type NicknameType = 'animals' | 'characters' | 'heros' | 'monsters';

function getRandomInteger(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandom4digitNumber() {
  return String(Math.floor(Math.random() * (9999 - 1000) + 1000));
}

export default function getRandomNickname() {
  const type = Object.keys(data)[
    getRandomInteger(Object.keys(data).length)
  ] as NicknameType;
  const adjective = adjectives[getRandomInteger(adjectives.length)];
  const noun = data[type][getRandomInteger(data[type].length)];
  const number = getRandom4digitNumber();

  return `${adjective} ${noun}_${number}`;
}
