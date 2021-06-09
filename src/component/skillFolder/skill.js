import React from 'react'
import { Link} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import circle from '../../images/circle.png'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import FooterSection from './footerSection'





const SkillBanner =(props)=>{

	let location = props.location.aboutProps
	const { innerWidth: width} = window;
	console.log(location)
	

	const container = useSpring({
			to: [{height: width <= 768 && width >= 480 ? location?  
			'250px' : '300px' : width < 480 ? location?
			'200px' : '200px' :'400px' }],

  		from: {height: width <= 768 && width > 480 ? location?  
			'250px' : '400px' : width < 480 ? location? 
			'200px' : '400px' : location? '400px' : '550px'  }
		})

	// Leaf animation --------------

	const leafimg = useSpring({
	to: [{ 
	left:location ? location.name === 'fromEnvironment'? 
	'0%': '0%' : '0%' ,
	
	top: width <= 768 ? '37px' : '117px'
	 }],


	from: { left: location ?
		location.name === 'fromEnvironment'? 
		'50%' : '0%' : '25%',

	top: width <= 768 ? 
	location ? 
	location.name === 'fromEnvironment'? 
	'-50px' : '37px' : '37px'  :  location ?
	location.name === 'fromEnvironment'? 
	'-100px' : '117px' : '117px'
},
	config: {
		duration: 500
	}
	})

	// brush animation --------------
	
	const brushimg = useSpring({
	to: [{top: '5%', right: '50%' }],


	from: {top:  '25%' ,
	right: location ? location.name === 'fromEnvironment'?
	'0%' :  '-5%' : '23%' },
	config: {
		duration: 500
	}
	})

	// Gear animation --------------

	const gearimg= useSpring({
		to: [{ 
			right:location ? 
			location.name === 'fromEnvironment'? 
			'0%' : '0%': '0%',


			top: width <= 768 ?
			location ? location.name === 'fromEnvironment'? 
			'37px' : '37px' : '37px' : location ?
			location.name === 'fromEnvironment'? 
			'117px' : '117px' : '117px'
		}],
		from: { 
			right:  location ? 
			location.name === 'fromEnvironment' ? 
			'100%' : '50%' : '50%' ,



			top: width <= 768 ?
			location ? location.name === 'fromEnvironment'? 
			'37px' : '-97px' : '37px' : location ? 
			location.name === 'fromEnvironment'? 
			'117px' : '-117px' : '117px'
		 },
	config: {
		duration: 500
	}
	})


    return(
			<div className="skill-section">

					<animated.div className="skill-img3" style={brushimg} >
					

					<Link to={{
						pathname:'/homeBanner',
						aboutProps:{
							name: 'fromSkill'
						}
					}}>
	
						<img className='brush-img' src={brush} alt='img' >
						</img>
	
					</Link>
						
	
	
					</animated.div>

        <animated.div className="skill-banner" style={container}>
					
				<animated.div className="skill-img1" style={leafimg}  >
						
					<Link
					to={{
						pathname:'/Environment',
						aboutProps:{
							name: 'fromSkill'
						}
					}}>
					
						<img    src={ leaf} alt='img' >
						</img>
						
					</Link>
					
				</animated.div>
				<h1>Skill</h1>
				

				{/* <animated.div className="skill-img3" style={brushimg} >
					

				<Link to={{
					pathname:'/homeBanner',
					aboutProps:{
						name: 'fromSkill'
					}
				}}>

					<img className='brush-img' src={brush} alt='img' >
					</img>

				</Link>
					


				</animated.div> */}

				<animated.div className="skill-img2" style={gearimg} >

					
				<Link to={{
					pathname:'/technology',
					aboutProps:{
						name: 'fromSkill'
					}
				}}>

						<img  src={ circle} alt='img' >
						</img>

				</Link>
					
					
				</animated.div>
				</animated.div>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<FooterSection />
			</div>
    )
}

export default SkillBanner

