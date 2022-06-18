import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter();

    const { postId } = router.query;

    return (
        <>
            Post id = {postId}
        </>
    );
}

export default Post;