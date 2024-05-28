import { apple } from './apple';
import { arrowLeft } from './arrowLeft';
import { arrowRight } from './arrowRight';
import { bascula } from './bascula';
import { drop } from './drop';
import { estetoscopio } from './estetoscopio';
import { fatDouble } from './fatDouble';
import { fatSingle } from './fatSingle';
import { heart } from './heart';
import { logo } from './logo.svg';
import { machine } from './machine';
import { thermo1 } from './thermo1';
import { thermo2 } from './thermo2';
import { thumbsDown } from './thumbsDown';
import { thumbsUp } from './thumbsUp.svg';
import { whiteArrowRight } from './whiteArrowRight';

export type TTotalSvg = {
  logo: string;
  thumbsUp: string;
  thumbsDown: string;
  fatSingle: string;
  fatDouble: string;
  arrowRight: string;
  whiteArrowRight: string;
  arrowLeft: string;
  apple: string;
  bascula: string;
  drop: string;
  estetoscopio: string;
  heart: string;
  machine: string;
  thermo1: string;
  thermo2: string;
};
export const svgTotal = {
  logo: logo,
  thumbsUp: thumbsUp,
  thumbsDown: thumbsDown,
  fatSingle: fatSingle,
  fatDouble: fatDouble,
  arrowRight: arrowRight,
  whiteArrowRight: whiteArrowRight,
  arrowLeft: arrowLeft,
  apple: apple,
  bascula: bascula,
  drop: drop,
  estetoscopio: estetoscopio,
  heart: heart,
  machine: machine,
  thermo1: thermo1,
  thermo2: thermo2,
};
