import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  description: string;
  banner: string;
  price: string
  category_id: string;
}

class CreateProductService {
  async execute({ name, description, banner, price, category_id }: ProductRequest) {

    return { ok: true }
  }
}

export { CreateProductService }