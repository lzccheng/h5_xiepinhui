import * as user from './api_modules/user'
import * as center from './api_modules/center'
import * as wx from './api_modules/wx'
import * as comm from './api_modules/comm'
export const api = {
  ...user,
  ...center,
  ...wx,
  ...comm
}
