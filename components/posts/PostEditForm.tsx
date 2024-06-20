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
import BackButton from '../BackButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import posts from '@/data/posts';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
	title: z.string().min(1, {
		message: 'Title is required.',
	}),
	body: z.string().min(1, {
		message: 'Body is required.',
	}),
	author: z.string().min(1, {
		message: 'Author is required.',
	}),
	date: z.string().min(1, {
		message: 'Date is required.',
	}),
});

interface PostEditPageProps {
	params: {
		id: string;
	};
}

const PostEditForm = ({ params }: PostEditPageProps) => {
	const post = posts.find((post) => post.id == params.id);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: post?.title || '',
			body: post?.body || '',
			author: post?.author || '',
			date: post?.date || '',
		},
	});

	const { toast } = useToast();

	const handleSubmit = (post: z.infer<typeof formSchema>) => {
		toast({
			title: 'The post has been updated successfully!',
			description: `Updated by ${post?.author} on ${post?.date}`,
		});
	};

	return (
		<>
			<BackButton
				text='Back To Posts'
				link='/posts'
			/>
			<h3 className='text-2xl mb-4'>Edit Post</h3>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className='space-y-8'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 dark:text-white'>
									Title
								</FormLabel>
								<FormControl>
									<Input
										className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
										placeholder='Enter the Title'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='body'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 dark:text-white'>
									Body
								</FormLabel>
								<FormControl>
									<Textarea
										className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
										placeholder='Enter the Body'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='author'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 dark:text-white'>
									Author
								</FormLabel>
								<FormControl>
									<Input
										className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
										placeholder='Enter the Author'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						className='w-full mt-10 dark:bg-slate-800 dark:text-white'>
						Update Post
					</Button>
				</form>
			</Form>
		</>
	);
};

export default PostEditForm;
