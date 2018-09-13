/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import ChoiceItem from 'components/ChoiceItem';
import H3 from 'components/H3';







const QuestTextarea = styled.div`
height: 100%;
width: 100%;
padding: 15px;
margin: 10px 0 15px;
outline: 2px solid #2276d2;
`;
const Clearfix = styled.div`
clear: both; 
`;






export default class Question extends React.Component {
  

  render() {
    return (
      
        <div>
        
        <FormattedMessage {...messages.questionTitle} />
        <QuestTextarea>
        <Editor inline  initialValue="[This is the stem.]"  init={{menubar: false}} />
        </QuestTextarea>
      
       <div>
       <FormattedMessage {...messages.list} />
       <div>
         <ChoiceItem/>
         <Clearfix/>
         <ChoiceItem/>
         <Clearfix/>
       </div>
       </div>
        </div>
     
    );
  }
}
