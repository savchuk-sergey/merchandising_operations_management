const { PrismaClient } = require('@prisma/client')

const getSupplier = async () => {
  try {
    const prisma = new PrismaClient()

    return await prisma.supplier.findMany()
  } catch (error) {
    throw error
  }
}

const createSupplier = async (
  name,
  address,
  phone_number
) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.supplier.create({
      data: {
        name,
        address,
        phone_number,
      },
    })
  } catch (error) {
    throw error
  }
}

module.exports = { createSupplier, getSupplier }
