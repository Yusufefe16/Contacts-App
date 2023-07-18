import {useState } from 'react'

function Form({addContact, contacts}) {
    const [form,setForm]= useState({fullname:"", phone_number:""})

    const onChanceInput = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === "" || form.phone_number ===""){
            return false;
        }
        addContact([...contacts, form]);
        setForm({fullname:"",phone_number:""});
        console.log(form);
    }

  return (  
    <div>
        <form onSubmit={onSubmit}>
        <div>
        <input 
            name="fullname" 
            placeholder='Full name' 
            onChange={onChanceInput} 
            value={form.fullname}/>
        </div>

        <div>
        <input 
            name="phone_number" 
            placeholder='Phone Number' 
            onChange={onChanceInput} 
            value={form.phone_number}/>
        </div>

        <div className='btn'>
            <button >Add</button>
        </div>
    </form>
    </div>
  ) 
}

export default Form 