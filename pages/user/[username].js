import { useRouter } from 'next/router'

const User = () => {
    const router = useRouter();

    const { username } = router.query;

    return (
        <div>
            New User = {username}
        </div>
    );
}

export default User;
