import {NextRequest, NextResponse} from "next/server";
import {prisma} from "../../../../prisma/prisma-client";

export async function GET() {
    // const pizda = req.nextUrl.s earchParams.get('pizda');
    // if (pizda === null) throw new Error("No pizda provided");
    // if (Number(pizda) > 100) {
    //     const random = Math.floor(Math.random() * Number(pizda));
    //     await prisma.user.create({
    //             data: {
    //                 fullName: `Test_${random}`,
    //                 email: `${random}@test.ru`,
    //                 password: hashSync('111111', 10),
    //                 verified: new Date(),
    //             }
    //         }
    //     )
    // }
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    const data = await req.json();

    const user = await prisma.user.create({
        data
    });

    return NextResponse.json(user);

}