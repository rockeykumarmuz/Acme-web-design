import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/logo_html.png'
import image2 from '../images/logo_css.png'
import image3 from '../images/logo_brush.png'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
	return (
		<>
				<section id='showcase'>
					<div className='container'>
						<h1>Affordable and Professional Web Design</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero dolorum illum, repudiandae voluptates
							laboriosam aperiam.
						</p>
					</div>
				</section>

        <NewsLetter />
				<section id='boxes'>
					<div className='container'>
						<div className='box'>
							<img src={image1} alt='html logo' />
							<h3>HTML5 Markup</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, placeat! Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Eius, id.
							</p>
						</div>
						<div className='box'>
							<img src={image2} alt='css logo' />
							<h3>CSS3 Styling</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, eius? Lorem ipsum dolor, sit amet
								consectetur adipisicing elit. Labore, nulla?
							</p>
						</div>
						<div className='box'>
							<img src={image3} alt='graphic lo go' />
							<h3>Graphic Designing</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ut. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Perferendis, quo.
							</p>
						</div>
					</div>
				</section>
		</>
	)
}

export default Home
