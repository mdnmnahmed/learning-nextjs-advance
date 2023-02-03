import React, { useState } from 'react'
import CustomHookComp from './component/CustomHookComp';

export default function CustomHook() {


    return (
        <div className="container px-2 mx-auto mt-16">
            <div className="mb-20 text-center">
                <h1 className="mb-4 text-xl font-medium text-white title-font sm:text-2xl">Custom Hooks</h1>
            </div>

            <div align="center">
                <h1 className="mb-4 text-xl font-medium text-orange-400 title-font sm:text-2xl">Default Counter</h1>
                <CustomHookComp />

                <h1 className="mb-4 text-xl font-medium text-orange-400 title-font sm:text-2xl">Customized Counter</h1>
                <CustomHookComp
                    defaultValue={10}
                    incrementVal={5}
                    decrementVal={2}
                />

                <h1 className="mb-4 text-xl font-medium text-orange-400 title-font sm:text-2xl">Stock Options Counter</h1>
                <CustomHookComp
                    defaultValue={50}
                    incrementVal={50}
                    decrementVal={50}
                />
            </div>



        </div>

    )
}
