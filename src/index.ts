import axios from 'axios'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Company } from './entity/Company'

const opts = {
  pageindex: 1,
  pagesize: 20,
  orderby: 'dim_scode',
}
const url = 'http://api.dataide.eastmoney.com/data/gethglist'

interface HgMap {
  [key: string]: string | number | null
}

axios.get(url, { params: opts }).then((resp): void => {
  const rcd: HgMap[] = resp.data.data.map(
    (x: HgMap): HgMap => {
      return {
        lbrq: x.lbrq,
        code: x.companycode,
        shortname: x.securityshortname,
      }
    }
  )
  createConnection()
    .then(
      async (connection): Promise<void> => {
        await connection
          .createQueryBuilder()
          .insert()
          .into(Company)
          .values(rcd)
          .onConflict(`DO NOTHING`)
          .execute()
      }
    )
    .catch((error): void => console.log(error))
})
