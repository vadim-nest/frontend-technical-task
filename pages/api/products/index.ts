import { NextApiResponse, NextApiRequest } from 'next'
import { products } from '../../../data'
import { Product } from '../../../interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  return res.status(200).json(products)
}