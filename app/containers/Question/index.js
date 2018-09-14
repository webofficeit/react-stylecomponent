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
import HR from 'components/HR';







const QuestTextarea = styled.div`
height: 100%;
width: 100%;
padding: 15px;
margin: 10px 0 15px;
outline: 1px solid #696969;
`;
const Clearfix = styled.div`
clear: both; 
`;






export default class Question extends React.Component {
  

  render() {
    return (
      
        <div>
        <Clearfix/>
        <HR/>
        <FormattedMessage {...messages.questionTitle} />
        <QuestTextarea>
        <Editor apiKey= '5jtb3hg0rgj206c0iig5xkvtvcf5goadlbeoce6traxfawiz' inline  initialValue="[This is the stem.]"  init={{menubar: false}} />
        </QuestTextarea>
      
       <div>
       <FormattedMessage {...messages.list} />
       <div>
         <ChoiceItem/>
         <Clearfix/>
         <ChoiceItem/>
         <Clearfix/>
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
