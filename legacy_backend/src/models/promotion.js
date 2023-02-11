//Promotion data models
const { PrismaClient } = require('@prisma/client')

const createPromotion = async (
  item,
  store,
  discount_type,
  discount_amount,
  start_date,
  end_date
) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.promotion.create({
      data: {
        item,
        store,
        discount_type,
        discount_amount,
        start_date,
        end_date,
      },
    })
  } catch (error) {
    throw error
  }
}

const getPromotions = async () => {
  try {
    const prisma = new PrismaClient()

    return await prisma.promotion.findMany()
  } catch (error) {
    throw error
  }
}

module.exports = { getPromotions, createPromotion }
