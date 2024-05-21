import React from 'react'
import NewsLetter from '../components/NewsLetter'

const Services = () => {
  return (
    <>
    <NewsLetter />
      <section id="main">
            <div className="container">
                <article id="main-col">
                    <h1 className="page-title">Services</h1>
                    <ul id="services">
                        <li>
                            <h3>Website Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis maxime laborum accusamus praesentium voluptates tenetur quibusdam illum.</p>
                            <p className="dark">Pricing: ₹40,000 - ₹1,20,000</p>
                        </li>
                        <li>
                            <h3>Website Maintainance</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora minima totam assumenda ad ullam ex modi ipsa numquam.</p>
                            <p className="dark">Pricing: ₹17,500 per month</p>
                        </li>
                        <li>
                            <h3>Website Hosting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis, aperiam facilis commodi explicabo aliquid ipsa earum facere?</p>
                            <p className="dark">Pricing: ₹2,000 per month</p>
                        </li>
                    </ul>
                </article>

                <aside id="sidebar">
                    <div className="dark">
                        <h3>Get A Quote</h3>
                        <form className="quote">
                            
                            <div className="form-group">
                                <label>Name:</label> <br />
                                <input type="text" placeholder="Enter Name" />
                            </div>
                            
                            <div className="form-group">
                                <label>Email:</label> <br />
                                <input type="email" placeholder="Enter Email" />
                            </div>
                            
                            <div className="form-group">
                                <label>Message:</label> <br />
                                <textarea placeholder="Enter Message"></textarea>
                            </div>
                            <button type="submit" className="button-1">Send</button>
                        </form>
                    </div>
                </aside>

            </div>
        </section>
    </>
  )
}

export default Services
