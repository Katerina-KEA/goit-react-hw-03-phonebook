import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  border: 2px solid #555585;
  border: none;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;