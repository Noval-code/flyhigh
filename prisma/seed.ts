const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

async function main() {
    const passwordHash = bcrypt.hashSync("admin123", 10);

    const userSeed = await prisma.user.upsert({
        where: { email: "admin@gmail.com" },
        update: {
            name: "Admin",
            role: "ADMIN",
            password: passwordHash,
            passport: "A12345678"
        },
        create: {
            email: "admin@gmail.com",
            name: "Admin",
            role: "ADMIN",
            password: passwordHash,
            passport: "A12345678"
        }
    });

    console.log({ userSeed });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });