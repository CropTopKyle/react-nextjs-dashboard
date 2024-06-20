'use client';

import PostEditForm from '@/components/posts/PostEditForm';
import { useParams } from 'next/navigation';

const PostEditPage = () => {
	const { id } = useParams();

	return (
		<div>
			{id && typeof id === 'string' && <PostEditForm params={{ id }} />}
		</div>
	);
};

export default PostEditPage;
