import {z} from 'zod';

export const insertProductsSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    slug: z.string().min(3, 'Slug must be at least 3 characters'),
    category: z.string().min(3, 'Category must be at least 3 characters'),
    brand: z.string().min(3, 'Brand must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'Product must be at least 1 image'),
    isFeatured: z.boolean(),
    banner: z.string().optional(),
    price: z.number().positive("Price must be greater than 0"),


});