// atom.js
import { atom } from "recoil";

export const handleState = atom({
  key: "handleState",
  default: '',
});


export const apidataState = atom({
  key: "apidataState",
  default:[],
});
