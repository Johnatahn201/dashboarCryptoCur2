// src/components/CryptoList.js
import React from 'react';

const CryptoList = ({ cryptos, onSelect }) => {
    return (
        <div className="crypto-list">
            {cryptos.map(coin => (
                <div key={coin.id} className="crypto-item" onClick={() => onSelect(coin)}>
                    <strong>{coin.name} ({coin.symbol.toUpperCase()})</strong>
                    <span>${coin.current_price.toFixed(2)}</span>
                </div>
            ))}
        </div>
    );
};

export default CryptoList;
