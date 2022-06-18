import { useRouter } from 'next/router'

const FillPost = () => {
    const router = useRouter();

    // const { postId } = router.query;

    console.log(router);

    return (
        <>
            Post id =
            {/* {postId} */}
        </>
    );
}

export default FillPost;