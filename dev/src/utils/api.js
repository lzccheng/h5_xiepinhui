import * as user from './api_modules/user'
import * as center from './api_modules/center'
import * as wx from './api_modules/wx'
import * as comm from './api_modules/comm'
import * as myshop from './api_modules/myshop'
import * as draw from './api_modules/draw'
export const api = {
  ...user,
  ...center,
  ...wx,
  ...comm,
  ...myshop,
  ...draw
}
