const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.shipment.create({
    data: {
      from: 1,
      to: 1,
      status: '',
      out_date: new Date(),
      shipment_details: {
        create: [
          { pack: '1', qty: 1 },
          { pack: '2', qty: 2 },
        ],
      },
    },
  })
  const allShips = await prisma.shipment.findMany({
    include: {
      shipment_details: true,
    },
  })
  console.dir(allShips, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
