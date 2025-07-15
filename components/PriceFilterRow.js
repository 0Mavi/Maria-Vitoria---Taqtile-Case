import React from 'react';
import styled from 'styled-components/native';

export default function PriceFilterRow({ min, onMin, max, onMax }) {
  return (
    <Row>
      <Input
        keyboardType="numeric"
        placeholder="Preço mínimo"
        value={min}
        onChangeText={onMin}
      />
      <Input
        keyboardType="numeric"
        placeholder="Preço máximo"
        value={max}
        onChangeText={onMax}
      />
    </Row>
  );
}

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
`;

const Input = styled.TextInput`
  flex: 1;
  background-color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  color: #000;
`;
