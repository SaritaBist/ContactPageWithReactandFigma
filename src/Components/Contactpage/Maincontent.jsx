import styles from "./Maincentact.module.css";
import Button from '../Button/Button'
import {BiMessageAltDetail} from "react-icons/bi"
import {MdOutlineCall} from "react-icons/md"

const Maincontent = () => {
  
  return (
   
    <div className={styles.container}>
       <div className={styles.contactform}>
           <div className={styles.top_btn}>
           <Button text="Via Support chat " icon={<BiMessageAltDetail/>} />
           <Button text="Via Call " icon={<MdOutlineCall/>} />
           </div>
           <Button  isOutline={true} text="Via Email Message " icon={<BiMessageAltDetail/>} />
           <form>
             
           <div class={styles.form_control}>
            <label htmlFor="name">Name</label>
             <input type="text" name="name" />
           </div>
           <div class={styles.form_control}>
           <label htmlFor="email">Email</label>
             <input type="email" name="email" />
            
           </div>
           <div class={styles.form_control}>
           <label htmlFor="text">Text</label>
            <textarea name="Text" id="" cols="30" rows="3"></textarea>
           </div>
           <div style={{
             display:"flex",
             justifyContent:"end"
           }}>
           <Button text="Submit"/>
           </div>
           </form>
       </div>
       <div className={styles.contactimage}>
        <img src="/Images/service.png" alt="" />
       </div>
    </div>
  )
}

export default Maincontent