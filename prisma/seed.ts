import { prisma } from "../src/database/db.js"

async function main() {
    await prisma.users.create({
        data: {
                name: "Daniel",
                photo: "https://yt3.googleusercontent.com/ytc/AL5GRJWF9DhK1icziCNSd-0dyRCDbOU3_op5GLtFSJo0WA=s900-c-k-c0x00ffffff-no-rj"
            }
    })

    await prisma.categorie.createMany({
        data: [
            {
                name: "Fácil"
            },
            {
                name: "Médio"
            },
            {
                name: "Difícil"
            }
        ]
    })

    await prisma.tasks.createMany({
        data: [
            {
                userId: 1,
                categorieId: 1,
                description: "Assistir o minicurso sobre prisma"
            },
            {
                userId: 1,
                categorieId: 2,
                description: "Terminar a POC"
            },
            {
                userId: 1,
                categorieId: 3,
                description: "Terminar a aplicação do prisma no drivent"
            }
        ]
    })
};

main()
    .then(() => {
        console.log("Registro feito com sucesso!");
    })
    .catch(e => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })