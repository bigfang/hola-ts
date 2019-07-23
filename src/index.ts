import axios from 'axios'

const opts = {
  pageindex: 1,
  pagesize: 2,
  orderby: 'dim_scode',
}
const url = 'http://api.dataide.eastmoney.com/data/gethglist'

axios.get(url, { params: opts }).then((resp): void => {
  console.log(resp.data.data)
})
