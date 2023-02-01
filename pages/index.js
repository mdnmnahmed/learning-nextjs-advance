import Link from 'next/link';
import topicsPagesURL from '../service_frontend/topicsPagesURL.json';

export default function Home() {
    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-2 mt-16 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">All Topics</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">All topics pages currently learning.</p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {
                            topicsPagesURL.map(topic => (
                                <Link href={topic.url}>
                                    <div class="p-2 sm:w-1/2 w-full cursor-pointer">
                                        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                            <span class="title-font font-medium text-white">{topic.topic}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
