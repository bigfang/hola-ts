import axios from 'axios'

const opts = {
  pageindex: 1,
  pagesize: 20,
  orderby: 'dim_scode',
}
const url = 'http://api.dataide.eastmoney.com/data/gethglist'

axios.get(url, { params: opts }).then(resp => {
  console.log(resp.data.data)
})
