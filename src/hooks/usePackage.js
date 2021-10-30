import { useEffect, useState } from 'react';

const usePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-anchorage-91551.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [packages])
    return { packages, setPackages }
};

export default usePackage;