// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const products = require('../../../src/data.json');
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { product } = req.query;
    const pro = products.filter((i:any)=>i.id==product);
  if (req.method === 'GET') {
    res.status(200).json(pro);
  }
}
