import "../Style/message.css"
import { ReactTyped } from "react-typed";
import { rerender_off } from "./terminal";
export type Message_props={
    messages:string[][]
    rerender:boolean
};

let old_messages : string[]=[];
function Message(props:Message_props) {
  if(props.messages.length !=0 && props.rerender){
  rerender_off();
  const command = props.messages[props.messages.length-1][0];
  const message = props.messages[props.messages.length-1].slice(1);
  let cumulativeDelay = 200;

  debugger;
  if (command == "$cv\n"){
    debugger;
    return (
    <div >
      <div className="command">{command}</div> 
      <a href={"CV.pdf"} download="Jafar Aliyev 2023.pdf">download</a>
    </div>
    )
  }
  const message_list = message.map((m, i) => {
    cumulativeDelay += i * 250; // Calculate cumulative delay;
    return (
      <div key={i}>
      <ReactTyped
        key={i}
        strings={[m]}
        typeSpeed={40}
        backSpeed={50}
        className="response"
        startDelay={cumulativeDelay} // Use cumulative delay for each message
        showCursor={false}
      /></div>
    );
  });
  old_messages = [...old_messages, command, ...message];
    return (
      <div >
        <div className="command">{command}</div> 
        {message_list}
      </div>
    );
}
  return null;
}

export function get_old_messages(){
  return old_messages;
}
export function clean_old_messages(){
  old_messages = [];
}
  export default Message;