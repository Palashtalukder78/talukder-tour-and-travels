import { useEffect, useState } from 'react';

const useRegisteredTourist = () => {
    const [registeredTourists, setRegisteredTourists] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-anchorage-91551.herokuapp.com/registered-tourist')
            .then(res => res.json())
            .then(data => setRegisteredTourists(data))
    }, [registeredTourists])
    return { registeredTourists, setRegisteredTourists }
};

export default useRegisteredTourist;