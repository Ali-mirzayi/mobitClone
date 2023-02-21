const products = require('../../../src/data.json');
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { category } = req.query;
    const pro = products.filter((i:any)=>i.category.id==category);
  if (req.method === 'GET') {
    res.status(200).json(pro);
  }
}
