import React from 'react'

const NewsLetter = () => {
  return (
    <>
      <section id="newsletter">
            <div className="container">
                <h1>Subscribe to our Newsletter</h1>
                <form>
                    <input type="email" placeholder="Enter Email..." />
                    <button type="submit" className="button-1">Subscribe</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default NewsLetter
