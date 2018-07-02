import axios from "axios"

export function getXiaozhan() {
  return axios.get(
    "/api/v4/questions/273612872/similar-questions?include=data%5B*%5D.answer_count%2Cauthor%2Cfollower_count&limit=5"
  )
}
export function getZhuyilong() {
  return axios.get(
    "/api/v4/questions/63821120/similar-questions?include=data%5B*%5D.answer_count%2Cauthor%2Cfollower_count&limit=5"
  )
}
