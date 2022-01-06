import './App.css';
import SlotM from './SlotM';

const App  = ()=>{
return <>
  <h4 className='heading_style'>WELCOME TO 🎰 <span style = {{ fontWeight:'bold' , color :'black'}}> SLOT MACHINE GAME </span>🎰</h4>
  
  <div className='slotMachine'>
    <SlotM x="😀" y="😀" z="😀"/><hr/>
    <SlotM x="😁" y="🙂" z="😀"/><hr/>
    <SlotM x="😆" y="😶" z="😀"/><hr/>
    <SlotM x="😀" y="😊" z="😋"/><hr/>
  </div>
</>
}

export default App;
