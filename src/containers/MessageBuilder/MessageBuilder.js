import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import MessageControls from '../../components/Message/MessageControls/MessageControls';
import AlertMessage from '../../components/Message/AlertMessage/AlertMessage';
import EvaluationMessage from '../../components/Message/EvaluationMessage/EvaluationMessage';
import EvaluationMessageTitle from '../../components/Message/EvaluationMessage/EvaluationMessageTitle/EvaluationMessageTitle';
import SituationMessage from '../../components/Message/SituationMessage/SituationMessage';
import CustomerMessage from '../../components/Message/CustomerMessage/CustomerMessage';
import ResponsibleMessage from '../../components/Message/ResponsibleMessage/ResponsibleMessage';
import OperationManagerMessage from '../../components/Message/OperationManagerMessage/OperationManagerMessage';
import SendMessageToManager from '../../components/Message/SendMessageToManager/SendMessageToManager';

class MessageBuilder extends Component {

    render() {

        return (
            <Aux>
                <div style={{ backgroundColor: "lightgrey" }}>
                    <MessageControls />
                    <AlertMessage />
                    <EvaluationMessageTitle>
                        Görüşmeyi Değerlendir
                    </EvaluationMessageTitle>
                    <EvaluationMessage />
                    <SituationMessage />
                    <CustomerMessage />
                    <ResponsibleMessage />
                    <OperationManagerMessage />
                    <SendMessageToManager />
                </div>

            </Aux>
        );
    }
}

export default MessageBuilder;