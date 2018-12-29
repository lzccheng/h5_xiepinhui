import {
  domain
} from '../domain.js'
import {
  GET,
  POST,
  PUT,
  DELETE
} from "../request";

export const new_year_share = (data) => {
  const _url = `${domain}/active/new_year_share`
  return POST(_url, data)
}