import z from "zod";

export const formSchema = z.object({
    email: z.string({ message: 'Email harus di isi' }).email({ message: "Email tidak valid" }),
    password: z.string({ message: 'Password harus di isi' }).min(5, { message: "Password harus minimal 5 karakter" })
});