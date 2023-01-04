const { PrismaClient } = require('@prisma/client')

const getOrder = async () => {
  try {
    const prisma = new PrismaClient()

    return await prisma.order.findMany({
      include: {
        order_details: true,
      },
    })
  } catch (error) {
    throw error
  }
}

const receiveOrder = async (id) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.order.update({
      where: {
        id,
      },
      data: {
        status: 'Received',
        receive_date: new Date(),
      },
    })
  } catch (error) {
    throw error
  }
}

const createOrder = async (
  supplier_id,
  wh_id,
  order_date = new Date(),
  pack,
  qty
) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.order.create({
      data: {
        wh_id,
        supplier_id,
        order_date,
        status: 'Created',
        order_details: {
          create: {
            pack,
            qty,
          },
        },
      },
    })
  } catch (error) {
    throw error
  }
}

module.exports = { createOrder, receiveOrder, getOrder }
