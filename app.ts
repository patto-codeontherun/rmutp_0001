import prisma from "./prisma/middleware";



async function main() {
  await prisma.phoneNumber.create({
    data: { mobile: '0123456789aa' } // ✅ works
  });

  await prisma.cardId.create({
    data: { cardId: '1234567890123' } // ✅ works
  });

  await prisma.phoneNumber.create({
    data: { mobile: '12345' } // ❌ will throw
  });
}

main().catch(console.error);
