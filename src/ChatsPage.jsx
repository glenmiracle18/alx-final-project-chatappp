// import { PrettyChatWindow } from 'react-chat-engine-pretty'
// const ChatsPage = (props) => {
//     return (
//       <div className="background">
//         <PrettyChatWindow
//           projectId='2e456c19-e1a7-44fc-b45e-60e3197373a2'
//           username={props.user.username}
//           secret={props.user.secret}
//           style={{height: '100%'}}
//         />
//       </div>
//     );
//   };
  
//   export default ChatsPage;

import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '2e456c19-e1a7-44fc-b45e-60e3197373a2', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
        </div>
    )
}

export default ChatsPage
