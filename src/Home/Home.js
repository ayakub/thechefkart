import React, { useEffect, useState } from 'react';

const Home = () => {
    const [list, setList] = useState('')
    useEffect(() => {
        fetch('list.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Home;