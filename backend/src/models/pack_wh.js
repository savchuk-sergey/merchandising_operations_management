//Pack/warehouse link data model
// const os = require('os')
const { PrismaClient } = require('@prisma/client')

const createPackWh = async (pack, wh) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.pack_wh.create({
      data: {
        pack,
        wh,
      },
    })
  } catch (error) {
    throw error
  }
}

const deletePackWh = async (pack, wh) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.pack_wh.delete({
      where: {
        pack,
        wh,
      },
    })
  } catch (error) {
    throw error
  }
}

const getPackWh = async () => {
  try {
    const prisma = new PrismaClient()

    return await prisma.pack_wh.findMany()
  } catch (error) {
    throw error
  }
}

module.exports = { getPackWh, deletePackWh, createPackWh }
