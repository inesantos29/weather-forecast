import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  margin: 50px auto 50px auto;
  position: relative;
  flex-grow: 1;
  min-width: 400px;
  max-width: 50%;
  
    .search__input {
      flex-grow: 1;
      background: #323544;
      width: 100%;
      padding: 20px 50px 20px 20px;
      color: #999999;
      border: none;
      border-radius: 30px;
      font-size:14px;
    }
    
    .search__input:focus {
      outline: 0;
      background: #fff;
      box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
    }
    
    .search__input::-webkit-input-placeholder {
      color: #ffffff;
      font-weight: normal;
      font-style: italic;
    }
    
    .search__input:-moz-placeholder {
      color: #ffffff;
      font-weight: normal;
      font-style: italic;
    }
    
    .search__input:-ms-input-placeholder {
      color: #ffffff;
      font-weight: normal;
      font-style: italic;
    }
  
    .button--default{
      position: absolute;
      top: 5px;
      right: 5px;
      bottom: 5px;
      padding: 0 30px;
      font-size:14px;
    }
  }
`;
