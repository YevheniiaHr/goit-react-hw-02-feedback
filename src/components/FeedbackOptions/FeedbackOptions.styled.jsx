import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const Button = styled.button`
  width: 100%;
  height: 30px;
  border: solid 2px lightgrey;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
    background-color: darkgrey;
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
`;
