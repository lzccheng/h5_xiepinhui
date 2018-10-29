import * as user from './api_modules/user'
import * as center from './api_modules/center'
import * as wx from './api_modules/wx'
import * as comm from './api_modules/comm'
import * as myshop from './api_modules/myshop'
import * as draw from './api_modules/draw'
import * as wallet from './api_modules/wallet'
import * as index from './api_modules/index'
export const api = {
  ...user,
  ...center,
  ...wx,
  ...comm,
  ...myshop,
  ...draw,
  ...wallet,
  ...index
}
