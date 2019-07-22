import HttpUtils from './http'
import api from './api'
class Https {
  type = (parmas = {}) => (HttpUtils.get(api.type,parmas))
}
export default new Https()
