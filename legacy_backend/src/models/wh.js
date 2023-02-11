const { PrismaClient } = require('@prisma/client')

const createWh = async (
  wh_name,
  wh_manager,
  wh_address
) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.wh.create({
      data: {
        wh_name,
        wh_manager,
        wh_address,
      },
    })
  } catch (error) {
    throw error
  }
}

const getWh = async () => {
  try {
    const prisma = new PrismaClient()

    return prisma.wh.findMany()
  } catch (error) {
    throw error
  }
}

module.exports = { getWh, createWh }
