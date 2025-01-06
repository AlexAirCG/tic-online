import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.create({
    data: { login: "AlexAir", passwordHash: "123", reating: 1000 },
  });
  const user2 = await prisma.user.create({
    data: { login: "Оля", passwordHash: "123", reating: 5000 },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
