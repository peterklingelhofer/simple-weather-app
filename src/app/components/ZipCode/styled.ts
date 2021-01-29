import styled from 'styled-components';

export const ZipCodeContainer = styled.div`
  .zipCode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #424242;
    font-size: 18px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 5px 10px;
    transition: all 0.2s ease-in-out;
  }
  .zipCode:hover {
    transform: scale(1.01);
  }
`;
