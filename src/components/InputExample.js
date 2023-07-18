import {useState} from "react";

function InputExample() {
    const [name,setName] = useState('asd');
    
    return <div>
        <p>bir isim gir.</p>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <br/>
        {name}
    </div>
}

export default InputExample;