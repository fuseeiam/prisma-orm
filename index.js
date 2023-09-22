const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const run = async () => {
    console.log('RUN');
    try {
        // CREATE 
        // const result = await prisma.user.create({
        //     data: {
        //         username: 'John',
        //         password: '123456'
        //     }
        // });

        // const result = await prisma.category.createMany({
        //     data: [
        //         { name: 'Food' },
        //         { name: 'Transport' }
        //     ]
        // });

        // const result = await prisma.transaction.create({
        //     data: {
        //         payee: '7-11',
        //         amount: 20,
        //         date: new Date('2023-09-02'),
        //         userId: 1,
        //         categoryId: 1
        //     }
        // });

        // const result = await prisma.transaction.create({
        //     data: {
        //         payee: 'Lotus',
        //         amount: 60,
        //         date: new Date('2023-09-03'),
        //         user: {
        //             create: {
        //                 username: 'Jane',
        //                 password: '654321'
        //             }
        //         },
        //         category: {
        //             create: {
        //                 name: 'Grocery'
        //             }
        //         }
        //     }
        // });

        // const result = await prisma.transaction.create({
        //     data: {
        //         payee: 'Safari World',
        //         amount: 500,
        //         date: new Date('2023-09-03'),
        //         user: {
        //             create: {
        //                 username: 'Kelly',
        //                 password: '654321'
        //             }
        //         },
        //         category: {
        //             create: {
        //                 name: 'Travel'
        //             }
        //         }
        //     },
        //     include: {
        //         user: true,
        //         category: true
        //     }
        // });

        // const result = await prisma.user.create({
        //     data: {
        //         username: 'Ha',
        //         password: '889889',
        //         transactions: {
        //             create: [
        //                 { payee: '7-11', amount: 10, date: new Date('2023-09-04'), categoryId: 1 },
        //                 { payee: 'Big-C', amount: 55, date: new Date('2023-09-04'), categoryId: 2 }
        //             ]
        //         }
        //     },
        //     include: {
        //         transactions: true
        //     }
        // });

        const result = await prisma.user.create({
            data: {
                username: 'Emily',
                password: '1122334455',
                transactions: {
                    create: {
                        payee: '7-11',
                        amount: 89,
                        date: new Date('2023-09-05'),
                        category: {
                            create: {
                                name: 'Beverage'
                            }
                        }
                    }
                }
            },
            include: {
                transactions: true
            }
        });

        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

run();
