import prismaClient from "../../prisma";

class ListOrderService {
  async execute() {
    const order = prismaClient.order.findMany({
      where: {
        draft: false,
        status: false
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return order;
  }
}

export { ListOrderService }