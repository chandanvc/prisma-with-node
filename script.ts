import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const preference = await prisma.userPreference.create({
  //   data: {
  //     emailUpdates: true,
  //   },
  // });
  // console.log(preference);
  // const user = await prisma.user.update({
  //   where: {
  //     email: "ram@gmail.com",
  //   },
  //   data: {
  //     userPreference: {
  //       connect: {
  //         id: "8f7dd548-dff1-4bbc-be50-2cf8bb5666f0",
  //       },
  //     },
  //   },
  // });
  // const user = await prisma.user.findFirst({
  //   where: { email: "ram@gmail.com" },
  //   select: { userPreference: {  } }
  // });
  // console.log(user);

  // const user = await prisma.user.deleteMany();
  // console.log(user);
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
