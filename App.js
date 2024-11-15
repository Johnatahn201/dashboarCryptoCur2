// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoList from './components/CryptoList';
import CryptoChart from './components/CryptoChart';
import './styles.css';

const App = () => {
    const [cryptos, setCryptos] = useState([]);
    const [selectedCrypto, setSelectedCrypto] = useState(null);
    const [historicalData, setHistoricalData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('market_cap');

    useEffect(() => {
        const fetchCryptos = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
                setCryptos(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCryptos();
    }, []);

    const fetchHistoricalData = async (id) => {
       
