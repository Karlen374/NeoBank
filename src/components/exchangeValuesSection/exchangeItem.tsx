import React, { useEffect, useState } from 'react';
import useExchangeServices from '../../services/exchangeValueService';

interface IExchangeItem{
  value:string;
}

const ExchangeItem = ({ value }:IExchangeItem) => {
  const { getExchangeValue } = useExchangeServices();
  const [rate, setRate] = useState<number | null>(null);
  const getCurrentExchangeRate = async () => {
    const res = await getExchangeValue(value, 'RUB');
    setRate(res);
  };
  useEffect(() => {
    getCurrentExchangeRate();
  }, []);

  return (
    <div className="exchange-section__rateBlock_item">
      <p>
        {value}
      </p>
      <div>
        {rate?.toFixed(2)}
      </div>
    </div>
  );
};
export default ExchangeItem;
