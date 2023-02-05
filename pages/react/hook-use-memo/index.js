import React, { useState, useMemo } from 'react';

/**
    useCallback & useMemo both use for Memoize
    useMemo => Memoize a value
 */

const HookUseMemo = () => {

    const [counter, setCounter] = useState(1);
    const factorial = useMemo(() => {
        return getFactorial(counter);
    }, [counter]);

    const [name, setName] = useState('Num');

    function getFactorial(number) {
        console.log("getFactorial function called");
        let i = 0;
        while (i < 200000000) i++;

        if (number < 0) {
            return -1;
        }
        if (number === 0) {
            return 1;
        }

        return number * getFactorial(number - 1);
    }

    return (
        <>
            <div class="container px-5 mx-auto text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Use Memo Hook</h1>
                <div class="text-xl">Factorial of {counter} is: {factorial}</div>
                <div class="m-4">
                    <button className="p-2 mr-2 bg-teal-800 rounded"
                        onClick={() => setCounter(counter + 1)}
                    >Increment</button>
                    <button className="p-2 mr-2 bg-teal-800 rounded"
                        onClick={() => setCounter(counter - 1)}
                    >Decrement</button>
                </div>
            </div>

            <hr class="my-12" />

            <NameComp name={name} setName={setName} />
        </>
    );
}

export default HookUseMemo;


const NameComp = React.memo(({ name, setName }) => {
    console.log("NameComp rendred");
    return (
        <div class="container px-5 mx-auto">
            <div class="flex flex-col text-center w-full ">
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">My Name is: </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                    <div class="p-2  w-full">
                        <div class="relative">
                            <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})