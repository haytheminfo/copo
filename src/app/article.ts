import { Provider } from "./provider";
export interface Article {
  label:string;
  price:number;
  picture:string;
  provider ?:Provider
}

