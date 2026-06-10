import { prisma } from '../lib/prisma'
import seed from '../../prisma/seed.json' with { type: 'json' };

const main = async () => {
  try {
   for (const category of seed.data) {
  await prisma.category.upsert({
    where: { name: category.name },
    update: {},
    create: {
      name: category.name,
      procedures: {
        create: category.procedures
      }
    }
  });
}

    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }
};

main();
