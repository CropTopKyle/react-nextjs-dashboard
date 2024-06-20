'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormDescription,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
	name: z.string().min(1, {
		message: 'Please enter your name.',
	}),

	email: z
		.string()
		.min(1, {
			message: 'A valid email is required',
		})
		.email({
			message: 'Please enter a valid email',
		}),

	password: z.string().min(1, {
		message: 'A valid password is required',
	}),

	confirmPassword: z.string().min(1, {
		message: 'Please re-enter your password',
	}),
});

const RegisterForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const handleSubmit = (post: z.infer<typeof formSchema>) => {
		router.push('/');
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Create an Account</CardTitle>
				<CardDescription>Sign up Today!</CardDescription>
			</CardHeader>
			<CardContent className='space-y-2'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className='space-y-8'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 dark:text-white'>
										Name
									</FormLabel>
									<FormControl>
										<Input
											className='bg-slate-100 dark:bg-slate-100 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
											placeholder='Enter your Name'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 dark:text-white'>
										Email
									</FormLabel>
									<FormControl>
										<Input
											type='input'
											className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
											placeholder='Enter your Email'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 dark:text-white'>
										Password
									</FormLabel>
									<FormControl>
										<Input
											type='password'
											className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
											placeholder='Enter your Password'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='confirmPassword'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 dark:text-white'>
										Confirm your Password
									</FormLabel>
									<FormControl>
										<Input
											type='password'
											className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
											placeholder='Enter your Password again'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className='w-full'>Sign In</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default RegisterForm;
