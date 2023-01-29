import { prisma } from "../src/database/db.js"

async function main() {
    await prisma.users.create({
        data: {
                name: "Daniel",
                photo: "https://yt3.googleusercontent.com/ytc/AL5GRJWF9DhK1icziCNSd-0dyRCDbOU3_op5GLtFSJo0WA=s900-c-k-c0x00ffffff-no-rj"
            }
    })

    await prisma.categorie.create
}