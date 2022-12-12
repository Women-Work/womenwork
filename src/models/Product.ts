import Category from './Category'

interface Product{
    id: number;
    title: string;
    text: string;
    category?: Category|null
}

export default Product;