import styled from 'styled-components';
import P from './p';

export default styled.div`
outline: 1px solid #696969;  
float: left;
width: calc(100% - 90px); 
& > p {
    height: 12px;
  }
`;