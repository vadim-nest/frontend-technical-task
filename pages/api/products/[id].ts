import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../../data'
import { Product } from '../../../interfaces'

type ResponseError = {
  message: string
}

export default function productHandler(
  req: NextApiRequest,
  res: NextApiResponse<Product | ResponseError>
) {
  const { query } = req
  const { url } = query
  const filtered = products.filter((p) => p.url === url)

  // Product with url exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Product with url: ${url} not found.` })
}