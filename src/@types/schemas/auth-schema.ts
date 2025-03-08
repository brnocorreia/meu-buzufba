"use client";

import { z } from "zod";
import { isEmailAllowed } from "@/actions/email-validation";

export const signUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome não pode exceder 100 caracteres" }),

  email: z
    .string()
    .email({ message: "Por favor, insira um endereço de email válido" })
    .min(2)
    .max(50)
    .refine(
      async (email: string) => {
        return await isEmailAllowed(email);
      },
      {
        message: "Email não permitido. Entre em contato com o administrador.",
      }
    ),

  password: z
    .string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
    .max(50, { message: "A senha não pode exceder 50 caracteres" }),
});

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;

export const signInFormSchema = signUpFormSchema.pick({
  email: true,
  password: true,
});

export type SignInFormValues = z.infer<typeof signInFormSchema>;
