import React, { ReactElement } from 'react';
import { useEffect,useState,useRef } from 'react';
import Message, {get_old_messages, clean_old_messages} from './message';
import "../Style/terminal.css"
let rerender:boolean = false;
let old_messages:string[] = []
function process_command(command:string){ 
    const parsedCommand : string[] = command.split(" ");
    switch(parsedCommand[0].substring(1)){
        case "help": {
            return [
              " about-----Everything you need to know about me",
              " projects-----Yeah, I've made some cool stuff before",
              " skills------I'm pretty good at some things",
              " cv------Check out my CV [pdf - 197KB]",
              " contact------Feel free to write me an email!",
              " website------How I built this",
              " clear------Clears the terminal of all output"
            ]; 
        }
        case "projects": {
            return [" Physilance", "Medsos", "RayTracing", "BFP calculator"] ;
        }
        case "about":{
          return ["With a strong passion for this field, I delve into in-depth exploration of Java features that are often overlooked in", 
            "university programs, including Java streams, optionals, and functional programming in Java. I have a solid command of using ",
            "Git for version control and hands-on experience in the Software Development Life Cycle (SDLC). Over the summer,", 
            "I actively contributed to the Physilance project, working on both the Java Spring back-end and React front-end."]
        }
        case "skills" :{
          return ["Java Python JavaScript TypeScript C C++",
          "React Java SpringBoot Linux MySQL PostgreSQL REST", 
          "Git Linux Software Design"] ; 
        }
        case "website":{
          return ["https://github.com/jafaraliyev/personal_website"]
        }
        case "contact":{
          return ["My email:", "jafaraliyevv@gmail.com",
           "My GitHub:", "https://github.com/jafaraliyev",
           "My LinkedIn:", "https://www.linkedin.com/in/jafar-aliyev/",
          "Phone:","+1(438)458-40-95"]
        }
        case "cv":
          return[""]
        case "clear":{
          clean_old_messages();
          old_messages = [];
          return[""]
        }
        default:{
            return [" Incorrect command. If you need help type 'help'\n"];
        }
    }
}
function Terminal() {
  const [messages, setMessages] = useState<string[][]>([]);
  const [command, setCommand] = useState('$');

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      rerender = true;
      const processedMessage = process_command(command);
      setMessages([...messages, [command + "\n", ...processedMessage]]); // Update messages state
      setCommand('$'); //Clear command input
    }
  };
  const handleChange  = (e : React.ChangeEvent<HTMLInputElement>) => {
    old_messages = get_old_messages();
    // Prevent deleting the dollar sign
    if (e.target.value.startsWith('$')) {
      setCommand(e.target.value);
    } else {
      setCommand('$' + e.target.value);
    }
  };

  useEffect(() => {
    console.log("Effect ", messages);
    scrollToBottom()
  }, [messages]);
  return (
    <div ref={scrollRef}>
      {old_messages.map(m=><div className='old_message'> {m} </div>)}
      <Message messages={messages} rerender={rerender}/>
      <input type="text" className="input_line" value={command} onChange={(event) => handleChange(event)} onKeyDown={(e) => onKeyDown(e) }/>
    </div>
  );
  }
  export function rerender_off(){
    rerender = false;
  }
  export default Terminal;