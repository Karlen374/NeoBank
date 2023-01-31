import React from 'react';
import './codeForm.scss';

interface ICodeItem{
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  st: string;
}

const CodeItem = ({ value, onChange, st } : ICodeItem) => {
  return (
    <div className={st}>
      <input type="number" onChange={onChange} value={value} />
    </div>
  );
};

export default CodeItem;
