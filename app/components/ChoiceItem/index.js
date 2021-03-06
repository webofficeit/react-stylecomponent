import React from 'react';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import messages from './messages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Editor } from '@tinymce/tinymce-react';
import Choicetext from './choicetext';
import P from './p';


const Choiceitemlist = styled.div`
    margin-top: 10px;
    width: 100%;
`;

const Choiceiconlist = styled.div`
        border: 1px solid #ccc;
        cursor: all-scroll;
        float: left;
        padding: 10px 0;
        width: 40px;
        text-align: center;
`;



const Choicedel = styled.div`
cursor: pointer;
background: #eee;
padding: 11px 0;
float: right;
text-align: center;
width: 40px;  
`;
const Clearfix = styled.div`
clear: both; 
`;

/* eslint-disable react/prefer-stateless-function */
export default class ChoiceItem extends React.Component {
  render() {
    return (
    
       <Choiceitemlist>
           <Choiceiconlist>
           <FontAwesomeIcon icon={faBars} />
           </Choiceiconlist>
           <Choicetext>
               
               <Editor inline tagName="div"  initialValue=""   init={{menubar: false}} />
               
           
           </Choicetext>
           
           <Choicedel>
           <FontAwesomeIcon icon={faTrash} />
           </Choicedel>
       </Choiceitemlist>
       
     
    );
  }
}


