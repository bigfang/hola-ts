import request, { Response } from 'request'

const url =
  'http://api.dataide.eastmoney.com/data/gethglist?pageindex=1&pagesize=830&orderby=dim_scode'

request.get(
  'https://baidu.com',
  (_err: any, _resp: Response, body: any): any => {
    console.log(body)
  }
)
