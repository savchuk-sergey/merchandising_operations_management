const os = require('os')
const { PrismaClient } = require('@prisma/client')

const deleteItem = async (item) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.item.delete({
      where: {
        item,
      },
    })
  } catch (error) {
    throw error
  }
}

const createItem = async (
  item,
  item_type,
  description,
  start_retail,
  uom,
  created_at = new Date(),
  created_by = os.userInfo().username,
  updated_at = new Date(),
  updated_by = os.userInfo().username,
  selling_currency = 'RUB'
) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.item.create({
      data: {
        item,
        item_type,
        description,
        start_retail,
        uom,
        created_at,
        created_by,
        updated_at,
        updated_by,
        selling_currency,
      },
    })
  } catch (error) {
    throw error
  }
}

const getItems = async () => {
  try {
    const prisma = new PrismaClient()

    return await prisma.item.findMany()
  } catch (error) {
    throw error
  }
}

module.exports = { deleteItem, getItems, createItem }
