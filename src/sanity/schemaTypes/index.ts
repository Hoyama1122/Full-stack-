import { type SchemaTypeDefinition } from 'sanity'
import { promotionCode } from './schema/promotion-codes'
import { productCategory } from './schema/product-category'
import { promotionCampaign } from './schema/promotion-campaign'
import { product } from './schema/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    promotionCode,
    productCategory,
    promotionCampaign,
    product,
  ],
}
