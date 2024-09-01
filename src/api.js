import axios from "axios";
import { LANGUAGE_VERSION } from "./constant";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSION[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
