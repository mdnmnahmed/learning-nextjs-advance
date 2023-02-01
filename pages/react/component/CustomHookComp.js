import React from 'react'
import useCounterHook from '../hooks/useCounterHook';

export default function CustomHookComp({ defaultValue, incrementVal, decrementVal }) {

    const [counterValue, increaseValue, decreaseValue, resetValue] = useCounterHook({ defaultValue, incrementVal, decrementVal });


    return (
        <div>
            <div className="p-8 mt-2 mb-10 bg-gray-800 bg-opacity-50 rounded-lg md:w-1/2">
                <div className="flex justify-center mb-10">
                    <button className="inline-flex items-center px-5 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                        {counterValue}
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="px-8 py-2 mr-4 text-lg text-white border-0 rounded bg-emerald-600 focus:outline-none hover:bg-emerald-800"
                        onClick={increaseValue}
                    >Increment + {incrementVal || 1}</button>
                    <button className="px-8 py-2 mr-4 text-lg text-white bg-red-600 border-0 rounded focus:outline-none hover:bg-red-800"
                        onClick={resetValue}
                    >Reset {defaultValue || 0}</button>
                    <button className="px-8 py-2 text-lg text-white border-0 rounded bg-slate-500 focus:outline-none hover:bg-slate-600"
                        onClick={decreaseValue}
                    >Decrement - {decrementVal || 1}</button>
                </div>
            </div>
        </div>
    )
}
