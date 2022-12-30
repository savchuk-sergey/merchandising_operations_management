const os = require('os')
const { PrismaClient } = require('@prisma/client')

const deleteItem = async (item) => {
  try {
    const prisma = new PrismaClient()
    const deleteUser = await prisma.item.delete({
      where: {
        item: item,
      },
    })

    return deleteUser
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
  const prisma = new PrismaClient()

  try {
    const createdItem = await prisma.item.create({
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

    return createdItem
  } catch (error) {
    throw error
  }
}

const getItems = async () => {
  try {
    const prisma = new PrismaClient()
    const allItems = await prisma.item.findMany()

    return allItems
  } catch (error) {
    throw error
  }
}

module.exports = { deleteItem, getItems, createItem }
