import {useRef , useEffect} from 'react'
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';

const FormContactMe = () => {
    useEffect(() => {
        
        init(process.env.REACT_APP_EMAILJS_USER_ID)
    }, [])
   
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAILJS_USER_ID}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <>
        <form ref={form} onSubmit={sendEmail} style={{ display:'flex', flexDirection:'column' , alignItems:'center', width:'80%'}}>
            <label >First name :</label>
            <input type="text" id="name" value="John"/>

            <label >Email :</label>
            <input type="text" id="email" value="John@email.com"/>

            <label>Subject :</label>
            <input type="text" id="subject" value="subject"/>

            <label >Message :</label>
            <textarea id='message' rows='4' cols='45'/>

            <button type="submit" value="Submit">Send</button>
        </form>
        </>
    )
}
export default FormContactMe
