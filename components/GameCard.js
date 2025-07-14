import React from 'react';
import styled from 'styled-components/native';

export default function GameCard({
  title,
  metacritic,
  coverUri,
  oldPrice,
  price,
}) {
  return (
    <CardWrapper>
      <InfoArea>
        <Title>{title}</Title>
        <Description numberOfLines={2}>{metacritic}</Description>

        <PriceRow>
          {oldPrice ? <OldPrice>${oldPrice.toFixed(2)}</OldPrice> : null}
          <Price> $ {price.toFixed(2)}</Price>
        </PriceRow>
      </InfoArea>

      <Cover source={{ uri: coverUri }} resizeMode="cover" />
    </CardWrapper>
  );
}

/* ---------- styled components ---------- */

const CardWrapper = styled.View`
  flex-direction: row;
  align-items: center;


  background-color: ${(props) => props.theme.colors.lightCream || '#FFF'}; 
  border-radius: 8px;
  padding: 12px;
  gap: 12px;
  margin-bottom: 12px;


  shadow-color: ${(props) => props.theme.colors.offBlack || '#000'}; 
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 3;
`;

const InfoArea = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 4px;

  color: ${(props) => props.theme.colors.textPrimary || '#333'}; 
`;

const Description = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.textSecondary || '#666'}; 
`;

const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

const OldPrice = styled.Text`
  text-decoration-line: line-through;
  font-size: 12px;
  color: ${(props) => props.theme.colors.priceOld || '#999'}; 
`;

const Price = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.priceCurrent || '#000'}; 
`;

const Cover = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.mutedLavender || '#CCC'}; 
`;