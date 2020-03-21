import styled from 'styled-components';

export const Search = styled.div`
 display: flex;
 width: 100%;
 margin: 50px 0 50px;
 
  .search {
    position: relative;
    margin-bottom: 20px;
    flex-grow: 1;
    min-width: 400px;
    max-width: 50%;
    margin: 0 auto;
   
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

    
    .button{
      position: absolute;
      top: 5px;
      right: 5px;
      bottom: 5px;
      padding: 0 40px;
      font-size:14px;
    }
  }
  
  .button{
    outline: none;
    background: #009ad8;
    padding: 10px 20px;
    border-radius: 30px;
    color: white;
    border:none;
    cursor:pointer;
  }
`;

