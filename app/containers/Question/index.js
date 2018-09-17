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
import { connect } from 'react-redux';
import A from './A';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';







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
  
 
  constructor(props) {
    super(props);
    this.elements=[];
    this.state = {
      components: []
    };
  }




  componentDidMount() {
    for(let i=0;i<4;i++){
      let item = `item${i}`
      let clear = `clear${i}`
      // push the component to elements!
      this.elements.push(<ChoiceItem key={item} />,<Clearfix key={ clear }/>);
      this.setState({components: this.state.components.concat(this.elements)}, function () {
        console.log(this.state.components);
    });
    }
  }

  


  addMore(elements) {

    console.log("fbfgn"+this.state.components);
    let item = `item${elements.length}`;
    let clear = `clear${elements.length}`;
    let y = []
    y.push(<ChoiceItem key={item} />,<Clearfix key={ clear }/>);
    this.setState({components: this.state.components.concat(y)}, function () {
      console.log(this.state.components);
  });
   
  }

 

  renderChoiceList() {
    if(this.state.components.lenght > 0) {
      return (
        <div>
        {this.state.components}
        </div>
      );
    }
    else {
      
      
        for(let i=0;i<1;i++){
             let item = `item${i}`
             let clear = `clear${i}`
             // push the component to elements!
             this.elements.push(<ChoiceItem key={item} />,<Clearfix key={ clear }/>);
            
        }
      return (
      <div>
        {this.elements}
      </div>
      );
    }
  }

  render() {
    
        
    return (
      
        <div>
       
        <HR/>
        <FormattedMessage {...messages.questionTitle} />
        <QuestTextarea>
        <Editor apiKey= '5jtb3hg0rgj206c0iig5xkvtvcf5goadlbeoce6traxfawiz' inline  initialValue="[This is the stem.]"  init={{menubar: false}} />
        </QuestTextarea>
      
       <div>
       <FormattedMessage {...messages.list} />
       {this.state.components}
       </div>
       <A href="javascript:void(0)" onClick={() => this.addMore(this.elements)}>
       <FontAwesomeIcon icon={faPlus} />
          Add
        </A>
      
        </div>
     
    );
  }
}
