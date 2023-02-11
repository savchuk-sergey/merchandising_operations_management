const { PrismaClient } = require('@prisma/client')

const createPack = async (
  pack,
  supplier_id,
  pack_qty,
  item_id,
  description,
  cost
) => {
  const prisma = new PrismaClient()

  try {
    return await prisma.pack.create({
      data: {
        pack,
        supplier_id,
        pack_qty,
        item_id,
        description,
        cost,
      },
    })
  } catch (error) {
    throw error
  }
}

const deletePack = async (pack) => {
  const prisma = new PrismaClient()

  try {
    return await prisma.pack.delete({
      where: {
        pack,
      },
    })
  } catch (error) {
    throw error
  }
}

const getPack = async () => {
  const prisma = new PrismaClient()

  try {
    return await prisma.pack.findMany({})
  } catch (error) {
    throw error
  }
}

module.exports = { createPack, getPack, deletePack }
