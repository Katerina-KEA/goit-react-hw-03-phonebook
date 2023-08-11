import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  min-width: 400px;
  border: 3px solid #727295;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 35px;
`
export const Label = styled.label`
  font-size: 20px;
  color: #727295;
  margin-bottom: 14px;
`
export const Input = styled.input`
  margin-bottom: 28px;
  max-width: 260px;
  padding: 10px;
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
`

export const Button = styled.button`
  padding: 14px 10px;
  display: inline-block;
  max-width: 120px;
  outline: none;
  border: 2px solid #e8e8e8;
  border-radius: 14px;
  background-color: #25255c;
  color: white;
  font-size: 16px;
  &:active {
    background-color: #67648b;
  }
`
