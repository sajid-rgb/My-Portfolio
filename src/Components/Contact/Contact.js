import React from 'react';
const Contact = ({sendEmail}) => {
    return (
        <div>
              <form className="contact-form " onSubmit={sendEmail}>
                   <input type="hidden" name="contact_number" /><br/>
                   <input type="text" placeholder="Enter your name" name="user_name" required/> <br/>
                   <input type="email" placeholder="Enter your email" name="user_email" required/><br/>
                   <textarea name="message" placeholder="Say Something here" required/> <br/>
                   <input type="submit"  value="Send" class="btn btn-danger"/>
                 </form>
        </div>
    );
};

export default Contact;