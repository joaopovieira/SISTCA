
import './App.css';
import React, {useState} from 'react';
function App() {
  const [ects, setects] = useState("");
  const [note, setnote] = useState("");
  const [uc, setuc] = useState("");
  const [list, setlist] = useState([]);
  var existuc=0;
  var media=0;
  var ectsXnote=0;
  var ectsT=0;
  const adduc= ()=>{
          setlist([
              ...list, 
              {
                uc: uc,
                note: note,
                ects: ects
              },
            ]);
        };
    function deleteuc(){
        const newlist = list.filter((val)=> val.uc !==uc);
        setlist(newlist);
    }
  return (
    <div className="division">
       <div>
            <div className="subdivision">
                <h1>Mean Grade</h1>
                <label>Uc</label>
                <input type="text"
                    onChange={(v)=>{setuc(v.target.value);}}
                />
                
                <label>Grade</label>
                <input type="number" min="0"
                       onChange={(v)=>{setnote(v.target.value);}}
                />
                
                <label>ECTS</label>
                <input type="number" min="0"
                       onChange={(v)=>{setects(v.target.value);}}
                />
                {uc==="" ?
                    <input disabled type="text" id="alertred" 
                       value="Required Uc"/> 
                    : ""
                }
                {()=>existuc=0}
                {list.map((val)=>{ 
                  if (uc === val.uc){
                    { existuc=1};
                    return( <input disabled type="text" 
                            id="alertyellow" 
                            value="Existent Uc"/>)
                    }
                })} 
                { note ==="" && uc!=="" && existuc===0?
                    <input disabled type="text" id="alertred" 
                        value="Required Grade"
                    /> 
                    : ""
                }      
                { ects ==="" && note !=="" && uc !==""  && existuc===0?
                    <input disabled type="text" id="alertred"
                         value="Required ECTS"
                    /> 
                    : ""
                }
                {uc !=="" && note !=="" && ects !=="" && existuc===0?
                        <input disabled type="text" id="alertgreen" 
                            value="Good"
                        /> 
                        : ""
                } 
                <div>
                    { uc !=="" && note !=="" && ects !==""  && existuc===0 ?
                        <button enabled onClick={adduc}> Add Uc</button> 
                        : <button disabled> Add Uc</button>                  
                    } 
                   
                    { uc !=="" && note !=="" && ects !==""  && existuc===0 ?
                        <button disabled > Delete </button> 
                        : <button enabled onClick={deleteuc} > Delete</button>
                    } 
                    <button onClick={()=>{setects(""); 
                                          setnote(""); 
                                          setuc(""); }}
                    > 
                            Cancel
                    </button>
                </div>       
            </div>

            <div className="subdivision">
                {list.map((val)=>{
                    ectsXnote+=val.note*val.ects;
                    ectsT+=1*val.ects;
                    media=ectsXnote/ectsT;
                })}
                <div>
                     Mean Grade:  {media}
                </div>
                <div>
                     ECTS: {ectsT}
                </div>
               
            </div>
        </div>
        
        
        <div className="table">
            <div className="row">
                <div className="tabletitle" >Uc</div>
                <div className="tabletitle" >Grade</div>
                <div className="tabletitle" >ECTS</div>
            </div>

            {list.map((val)=>{
                return (
                     <div className= "row">
                        <div className="tablerow" >{val.uc} </div>
                        <div className="tablerow" >{val.note}</div>
                         <div className="tablerow" >{val.ects}</div>
                         </div>
                ) 
            })} 
        </div>
    </div>
  );
}

export default App;