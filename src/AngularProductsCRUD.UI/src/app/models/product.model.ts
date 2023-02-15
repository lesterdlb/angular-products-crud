export interface Product {
    id: string;
    title: string;
    categoryId: string;
    category: string;
    price: number;
}

export interface ProductRequest
    extends Pick<Product, 'title' | 'categoryId' | 'price'> {
}
