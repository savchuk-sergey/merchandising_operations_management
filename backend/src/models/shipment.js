const { PrismaClient } = require('@prisma/client')

const createShipment = async (
  from,
  to,
  out_date,
  in_date,
  pack,
  qty,
  status = 'Created'
) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.shipment.create({
      data: {
        from,
        to,
        out_date,
        in_date,
        status,
        shipment_details: {
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

const getShipment = async () => {
  try {
    const prisma = new PrismaClient()

    return await prisma.shipment.findMany({
      include: { shipment_details: true },
    })
  } catch (error) {
    throw error
  }
}

const receiveShipment = async (shipment_id) => {
  try {
    const prisma = new PrismaClient()

    return await prisma.shipment.update({
      where: {
        id: shipment_id,
      },
      data: {
        status: 'Received',
        in_date: new Date(),
      },
    })
  } catch (error) {
    throw error
  }
}

module.exports = { receiveShipment, createShipment, getShipment }
