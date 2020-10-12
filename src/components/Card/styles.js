import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 15px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;
`;

export const Header = styled.h2`
  position: absolute;
  top: -16px;
  left: 15px;
`;

export const P = styled.p`
  font-weight: 500;
  line-height: 20px;
`;

export const Label = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 5px;
  border-radius: 50%;
`;
