import Link from 'next/link';
import React from 'react';

const Navigation = ({ navColor }) => {
    return (
        <>
            <style>
                {`
                    a{
                        display: 'inline-block';
                        color: ${navColor};
                        margin: 10px 20px;
                        font-weight: bolder;
                    }
                `}
            </style>

            <div>
                <Link href={`/`}>
                    <a>Home</a>
                </Link>

                <Link href={`/user`}>
                    <a>user</a>
                </Link>

                <Link href={`/post`}>
                    <a>post</a>
                </Link>
            </div>
        </>
    );
}

export default Navigation;