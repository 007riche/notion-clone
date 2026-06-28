'use client';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from '@/lib/types';
import Logo from "@/public/cypresslogo.svg";
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

function LoginPage() {
    // const router = useRouter();
    const [submitError, setSubmitError] = useState('');

    const form = useForm<z.infer<typeof FormSchema>>(
        {
            mode: 'onChange',
            resolver: zodResolver(FormSchema),
            defaultValues: { email: '', password: '' }
        }
    );

    const isLoading = form.formState.isSubmitting;
    const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> =
        async (formData) => {

        };
    return (
        <form onSubmit={form.handleSubmit(onSubmit)}
            onChange={() => {
                if (submitError) setSubmitError('');
            }
            }
            className='w-full sm:justify-center
         sm:w-100 space-y-6 flex flex-col'
        >
            <Link
                href="/"
                className="w-full 
            flex 
            justify-left 
            items-center"
            >
                <Image
                    src={Logo}
                    alt='Cypress app logo'
                    width={50}
                    height={50} />
                <span className='font-semibold
                    dark:text-white 
                    text-4xl 
                    first-letter:ml-2'>
                    {' '}Cypress
                </span>
            </Link>

        </form>
    );
}

export default LoginPage;
