import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter();

    const { postId, data } = router.query;

    console.log(router);

    return (
        <div className="text-white">
            Post id = {postId}
            <br />
            Post data = {data}
        </div>
    );
}

export default Post;