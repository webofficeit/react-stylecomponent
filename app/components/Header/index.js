import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppHeader from './header';
import HeaderSection from './headertitle';
import HeaderTitleIcon from './headertitleicon';
import ActionButton from './actionbutton';
import Anchor from './anchor';
import messages from './messages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faRedo, faListUl, faQuestionCircle, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import H2 from 'components/H2';


/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
    
        <AppHeader>
        <HeaderSection>
          <HeaderTitleIcon>
          <FontAwesomeIcon icon={faListUl} />
          </HeaderTitleIcon>
        
              <FormattedMessage {...messages.orderList} />
              </HeaderSection>
              <ActionButton>
                <Anchor href="">
                <FontAwesomeIcon icon={faUndo} />
                <FormattedMessage {...messages.undo} />
                </Anchor>
              
                <Anchor href="">
                <FontAwesomeIcon icon={faRedo} />
                <FormattedMessage {...messages.redo} />
                </Anchor>

                <Anchor href="">
                <FontAwesomeIcon icon={faQuestionCircle} />
                <FormattedMessage {...messages.help} />
                </Anchor>

                <Anchor href="">
                <FontAwesomeIcon icon={faEdit} />
                <FormattedMessage {...messages.edit} />
                </Anchor>
                <Anchor href="">
                <FontAwesomeIcon icon={faEye} />
                <FormattedMessage {...messages.preview} />
                </Anchor>

              </ActionButton>
        
        </AppHeader>
     
    );
  }
}

export default Header;
