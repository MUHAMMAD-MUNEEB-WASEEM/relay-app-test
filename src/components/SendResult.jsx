import { useState } from "react";
import firebase from '../firebase'; 
import './SendResult.css';

function SendData() {
    const [vph1, setVph1] = useState();
    const [vph2, setvph2] = useState();
    const [vph3, setvph3] = useState();
    const [vpa1, setvpa1] = useState();
    const [vpa2, setvpa2] = useState();
    const [vpa3, setvpa3] = useState();
    const [iph1, setiph1] = useState();
    const [iph2, setiph2] = useState();
    const [iph3, setiph3] = useState();
    const [ipa1, setipa1] = useState();
    const [ipa2, setipa2] = useState();
    const [ipa3, setipa3] = useState();


  const sendData =  () => {
    const sendDataRef = firebase.database().ref('test/fault');
    const data = {
      vph1: Number(vph1),
      vph2: Number(vph2),
      vph3: Number(vph3),
      vpa1: Number(vpa1),
      vpa2: Number(vpa2),
      vpa3: Number(vpa3),


      iph1: Number(iph1),
      iph2: Number(iph2),
      iph3: Number(iph3),
      ipa1: Number(ipa1),
      ipa2: Number(ipa2),
      ipa3: Number(ipa3),
    };

    sendDataRef.set(data);
  };
    return (
        <div className="sendResult">
        
        <div className="sendResult__container">

          <div className="voltage">

              <div className="voltage__heading"><h1>ENTER VALUES OF 3 PHASE VOLTAGES</h1></div>
                <div className="voltage__input">
                <input type="number" value={vph1} onChange={(e)=>setVph1(e.target.value)} placeholder="Phase 1 Voltage Magnitude" />
                <br/>
                <br/>
                <input type="number" value={vph2} onChange={(e)=>setvph2(e.target.value)} placeholder="Phase 2 Voltage Magnitude" />
                <br/>
                <br/>
                <input type="number" value={vph3} onChange={(e)=>setvph3(e.target.value)} placeholder="Phase 3 Voltage Magnitude" />
                <br/>
                <br/>
                <input type="number" value={vpa1} onChange={(e)=>setvpa1(e.target.value)} placeholder="Phase 1 Voltage Angle" />
                <br/>
                <br/>
                <input type="number" value={vpa2} onChange={(e)=>setvpa2(e.target.value)} placeholder="Phase 2 Voltage Angle" />
                <br/>
                <br/>
                <input type="number" value={vpa3} onChange={(e)=>setvpa3(e.target.value)} placeholder="Phase 3 Voltage Angle" />

                <br/>
                  <br/>
                </div>
            </div>


            <div className="current">
              <div className="voltage__heading"><h1>ENTER VALUES OF 3 PHASE CURRENTS</h1></div>
              <div className="current__input">
                <input type="number" value={iph1} onChange={(e)=>setiph1(e.target.value)} placeholder="Phase 1 Current Magnitude" />
                <br/>
                <br/>
                <input type="number" value={iph2} onChange={(e)=>setiph2(e.target.value)} placeholder="Phase 2 Current Magnitude" />
                <br/>
                <br/>
                <input type="number" value={iph3} onChange={(e)=>setiph3(e.target.value)} placeholder="Phase 3 Current Magnitude" />
                <br/>
                <br/>
                <input type="number" value={ipa1} onChange={(e)=>setipa1(e.target.value)} placeholder="Phase 1 Current Angle" />
                <br/>
                <br/>
                <input type="number" value={ipa2} onChange={(e)=>setipa2(e.target.value)} placeholder="Phase 2 Current Angle" />
                <br/>
                <br/>
                <input type="number" value={ipa3} onChange={(e)=>setipa3(e.target.value)} placeholder="Phase 3 Current Angle" />
                <br/>
                <br/>
              </div>
            </div>
              <div className="button"><button onClick={sendData}>Send Data</button></div>
        </div>
      </div>
    )
}

export default SendData
