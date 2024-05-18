import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Explore-Menu/Menu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Appdownload from '../../Components/App-Download/App-download'

const Home = () => {
    const [category, setCategory] = useState("All")
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Menu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <Appdownload />
        </>

    )
}

export default Home
