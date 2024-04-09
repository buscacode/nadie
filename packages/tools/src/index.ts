//import {isEven} from 'nadie/utils'
import { isEven } from 'utils'

export const sayIsEvent = (num: number) => {
  return isEven(num)? "isEven!!" : "is not Even"
}