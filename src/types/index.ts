import { RawAxiosRequestHeaders } from "axios";

enum HTTP_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface WordState {
  definition: string;
  pronunciation: string;
  word: string;
}

export interface CustomRequest {
  normalizer?: <T>(d: T) => any;
  states: [loading: string, success: string, failure: string];
  method?: HTTP_METHOD;
  data?: any;
  url: string;
  alertMessages?: string[];
  headers?: Partial<RawAxiosRequestHeaders>;
}
