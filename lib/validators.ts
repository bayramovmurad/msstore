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


// ! schema for sig in

export const signInFormSchema = z.object({
    email: z.string().email("Invalid email adress"),
    password: z.string().min(6, "Password must be at least 6 charachters"),
});

// ! Schema for sign up a user
export const signUpFormSchema = z
    .object({
        name: z.string().min(3, 'Name must be at least 3 characters'),
        email: z.string().email('Invalid email address'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: z
            .string()
            .min(6, 'Confirm password must be at least 6 characters'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });