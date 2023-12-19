import { PostMetadata } from './PostMetadata';
import getFormattedDate from './getFormattedDate';
import getPostContent from './getPostContent';

const PostHeader = (props: { slug: string }) => {
    const post = getPostContent(props.slug);
    return (
        <>
            <h1 className='text-4xl font-bold'>{post.data.title}</h1>
            <h2 className='text-xl text-slate-700'>{post.data.subtitle}</h2>
            <div className='text-sm text-slate-500'>
                Published on {getFormattedDate(post.data.date)}
            </div>
            <div className='text-sm text-slate-500'>By {post.data.author}</div>
        </>
    );
};

export default PostHeader;