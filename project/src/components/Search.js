import React, {useState} from "react";
import Coin2 from "./Coin/Coin2";

function Search() {
    const [coins,setCoins]= useState([])
    const [search,setSearch] = useState('')


    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className='Coin-App'>
            <div className='coin-search'>
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
                </form>
            </div>
            {filteredCoins.map(coin => {
                return(
                    <>
                        <Coin2
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                        />
                    </>
                )
            })}
        </div>
    );
}

export default Search;
