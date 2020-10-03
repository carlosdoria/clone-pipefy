import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 15px;
  /* resume of flex-grow(ability of an element to stretch),
  flex-shrink (ability of an element to reduce more than its size) and
  flex-basis (determines base size of the element) */
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid  rgba(0, 0, 0, 0.09);
  }

  ul {
    margin-top: 30px;
  }
`;

export const Header = styled.div`
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 20px;
    font-weight: 700;
    padding: 0 8px;
  }

  button {
    height: 38px;
    width: 38px;
    border-radius: 15px;
    background: #3b5bfd;
    border: 0;
    cursor: pointer;
  }
`;
