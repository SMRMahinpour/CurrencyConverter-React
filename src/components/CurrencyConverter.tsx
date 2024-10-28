import React, { useState, useEffect } from 'react';

type Currency = 'USD' | 'IRR';

const CurrencyConverter: React.FC = () => {

  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [exchangeRate, setExchangeRate] = useState<number>(600000); 

  useEffect(() => {
    const result = currency === 'USD'
      ? amount * exchangeRate
      : amount / exchangeRate;
    setConvertedAmount(result);
  }, [amount, currency, exchangeRate]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div style={{ padding: '20px', lineHeight: '2' , textAlign: 'center'}}>


      <label>
        Exchange Rate (USD to IRR): 
        <input
          type="number"
          value={exchangeRate}
          onChange={(e) => setExchangeRate(parseFloat(e.target.value))}
          placeholder="Set exchange rate"
        />
      </label>

      <br />

      <label>
        Amount in {currency}: 
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder={`Enter amount in ${currency}`}
        />
      </label>

      <br />

      <div>
        <button onClick={() => setCurrency(currency === 'USD' ? 'IRR' : 'USD')}>
          Switch to {currency === 'USD' ? 'IRR' : 'USD'}
        </button>
      </div>

      <p>
        Converted Amount: {formatNumber(convertedAmount)} {currency === 'USD' ? 'IRR' : 'USD'}
      </p>
    </div>
  );
};

export default CurrencyConverter;
