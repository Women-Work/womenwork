import Category from './Category'

interface Course{
    id: number;
    title: string;
    description: string;
    price: number;
    category?: Category|null;
}

export default Course;