import React from 'react';
import Nature from '../../Component/Nature/Nature';
import News from '../../Component/News/News';
import Placess from '../../Component/Placess/Placess';

const Home = () => {
    return (
        <div>
            <News></News>
            <Nature></Nature>
            <Placess></Placess>
        </div>
    );
};

export default Home;