export interface Category {
    id: string;
    name: string;
}

export interface CategoryRequest extends Pick<Category, 'name'> {
}
