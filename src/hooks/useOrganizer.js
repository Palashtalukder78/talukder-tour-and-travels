import { useEffect, useState } from 'react';

const useOrganizer = () => {
    const [organizers, setOrganizer] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-anchorage-91551.herokuapp.com/organizer')
            .then(res => res.json())
            .then(data => setOrganizer(data))
    }, [])
    return { organizers, setOrganizer }
};

export default useOrganizer;