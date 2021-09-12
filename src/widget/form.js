import { useForm } from 'react-hook-form';
import React from 'react';
import { useState } from 'react';

const Form = () => {
    
    const {register, handleSubmit} = useForm();
    var [n, setName] = useState(' ');

    const onClick = (data) => {
        let name = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
        setName(name);
    };
   
        return(
            <div className='Form' onSubmit={handleSubmit(onClick)}>
                <form>
                    First Name  &nbsp;&nbsp;&nbsp;&nbsp;: <input {...register('firstName')} type="text" name='firstName'  /> <br /> <br />
                    Middle Name &nbsp;: <input {...register('middleName')} type="text" name='middleName'  /> <br /> <br />
                    Last Name   &nbsp;&nbsp;&nbsp;&nbsp;: <input {...register('lastName')} type="text" name='lastName'  /> <br /> <br />
                    Skills &nbsp;&nbsp;&nbsp;&nbsp;: <input type="checkbox" name='java' {...register('java')} /> &nbsp;Java &nbsp; <input type="checkbox" name='python' {...register('python')} /> &nbsp; Python <br /> <br />
                    <button type='submit' > SUBMIT </button>
                </form>

                <br /><br /><br />

                <table border='1' align='center'>
            <tr>
                <td>name</td>
                <td>{n}</td>
            </tr>
                </table>

                </div>
              
            
              );
    
                   
                    
};

export default Form