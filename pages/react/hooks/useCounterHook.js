import { useState } from 'react'

export default function useCounterHook({ defaultValue = 0, incrementVal = 1, decrementVal = 1 }) {
    const [counterValue, setCounterValue] = useState(defaultValue);

    const increaseValue = () => {
        setCounterValue(counterValue + incrementVal);
    }

    const decreaseValue = () => {
        setCounterValue(counterValue - decrementVal);
    }

    const resetValue = () => {
        setCounterValue(defaultValue);
    }

    return [counterValue, increaseValue, decreaseValue, resetValue];
}
