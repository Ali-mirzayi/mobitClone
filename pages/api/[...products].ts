// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sharp = require('sharp');
const products = require('../../src/data.json');
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

// sharp("url.png")
//   .webp({ lossless: true })
//   .then((data:string)=>console.log(data))
//   .catch((err:string)=>console.log(err))

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  }
}
