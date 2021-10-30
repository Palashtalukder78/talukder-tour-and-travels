import { useEffect, useState } from 'react';

const useRegisteredTourist = () => {
    const [registeredTourists, setRegisteredTourists] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/registered-tourist')
            .then(res => res.json())
            .then(data => setRegisteredTourists(data))
    }, [registeredTourists])
    return { registeredTourists, setRegisteredTourists }
};

export default useRegisteredTourist;