import {useState} from 'react';
import './App.css';

export default function Questions({questions}){
    return (
        <div>
            {questions.map((el,i)=><Accordion title={el.title} text={el.text} key={i} num={i}></Accordion>)}
        </div>
    );
};

function Accordion({title,text,key,num}){
    const [isOpen,setOpen] = useState(false);

    function handleOpen(){
        setOpen((open)=>!open);
    }

    return (
    <div className="items">
        <p className="question">{title}  <button onClick={handleOpen}>+</button> </p>
        {isOpen ? <p>{text}</p>:null}
    </div>
    );
}