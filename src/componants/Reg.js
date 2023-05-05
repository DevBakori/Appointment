import React from "react";
const img1=require("../registernow.gif");

function Register() {
        return (
            <>
                <section id='main-section'>
                    <div className='content-1'>
                        <img src={img1} alt='bookimg' />
                    </div>
                    <div className='content-2'>
                        <h1>Book Your Appointment</h1>
                        <hr align="left" /><br />
                        <form>
                            <input type="text" name="name" placeholder="Your Name *" required />
                            <br /><br />
                            <input type="email" name="name" placeholder="Email *" required />
                            <br /><br />
                            <input type="number" name="name" placeholder="Phone *" required />
                            <br /><br />
                            <textarea type="message" name="name" placeholder="Message *" required />
                            <br /><br />
                            <input type="submit" value="Book Appointment" />
                            <input type="reset" value="Reset" />
                            <br /><br />
                        </form>
                    </div>
                </section>
            </>
        )
    }
export default Register;