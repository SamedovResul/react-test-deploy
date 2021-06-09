import  {React, useState } from 'react'
import {useSpring, animated} from 'react-spring'
import { Link} from 'react-router-dom'
import SectionOne from './sectionOne'
import circle from '../../images/circle.png'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import logo from '../../images/logoicon.png'
import mainLogo from '../../images/mainLogo.png'
import ets from '../../images/ets.png'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'
import SectionFive from './sectionFive'
import SectionSix from './sectionSix'
import SectionSeven from './sectionSeven'
import FooterSection from './footerSection'


const HomeBanner = (props) =>{
	let location = props.location.aboutProps
	const [openSide, setopenSide ] = useState(false);
	const { innerWidth: width} = window;
	const handlerSide = function(){
		if(openSide === false){
			setopenSide(true)
		}else{
			setopenSide(false)
		}
		
	}
	console.log(openSide)
	const sideanimation = useSpring({
		to: [{left: width <= 400 ? location? openSide ? 
				"-12%" : "1%" : openSide ? "1%" : "-12%":
				location? 
				openSide ? "-12%" : "1%" : openSide ? "1%" : "-12%"
				}],
		from: {left:"-5%"},
		config: {
			duration: 500
		}
	})
	

	
	// console.log(props.computedMatch.isExact)
	console.log(props)

// container height animation------------------

	const container = useSpring({
		to: [{height: width <= 1800 && width >= 1400 ?
			 	"700px" : width <= 991 && width >= 768 ?
			  "500px" : width >= 390 && width <= 768 ? 
				"300px" : width <= 390 ? "240px" : "550px"  ,

				zIndex: location? openSide? -5 : 0 : openSide? 0 : -5
				}],
		from: {height: width === 767 ?  location ? "400px" :'550px':
				location ? "400px" :'550px',
			
				
			}
	})

// banner text animation -------------------------

	const bannerStyleText = useSpring({
		to: [{
			top: width <= 991 && width >= 769 ? location ?
			openSide? '74%' : '16%' : 
			openSide? '16%' : '74%' :
			width <= 769 &&  width >= 450 ?  location ?
			openSide? '75%' : '19%' : 
			openSide? '19%' : '75%' :
			width <= 450 && width >= 390 ? location ? 
			openSide? '72%' : '17%' : 
			openSide? '17%' : '72%' :
			width <= 390 ? location ? 
			openSide? '75%' : '20%' : 
			openSide? '20%' : '75%' :
			location ? 
			openSide? '75%' : '17%' : 
			openSide? '17%' : '75%' ,

			fontSize: width >= 1400 && width <= 1800 ?
			location ? 
			openSide? '2.2vw' : '1.2vw' :
			openSide? '1.2vw' : '2.2vw':
			width <= 991 && width >= 769 ? 
			location ? 
			openSide? '2.2vw' : '1.6vw' :
			openSide? '1.6vw' : '2.2vw': 
			width <= 767 &&  width >= 600 ? 
			location ?
			openSide? '2.5vw' : '1.6vw' :
			openSide? '1.6vw' : '2.5vw': 
			width <= 600 && width >= 450 ? 
			location ? 
			openSide? '2.8vw' : '2.2vw':
			openSide? '2.2vw' : '2.8vw':
			width <= 450 ?
			location ? 
			openSide? '3.3vw' : '2.2vw':
			openSide? '2.2vw' : '3.3vw':
			location ? 
			openSide? '2.2vw' : '1.2vw':
			openSide? '1.2vw' : '2.2vw'  ,

		}],
		from: {top: '75%'},
		config: {
			duration: 500
		}
	})

// banner style animation------------------------------

	const bannerStyleLogo = useSpring({
		to: [{top: width <= 991 && width >= 768 ? location?
				openSide? '8%' : '-25%' : 
				openSide? '-25%' : '8%' :
				width <= 768 &&  width >= 390 ?
				location?
				openSide? '0%' : '-25%' : 
				openSide? '-25%' : '0%' :
				width <= 390 ? location?
				openSide? '0%' : '-20%' : 
				openSide? '-20%' : '0%' :
				location?
				openSide? '0%' : '-30%' : 
				openSide? '-30%' : '0%' ,


				paddingTop: location? openSide? '20px' : '0px': openSide? '0px' : '20px' ,
	}],
		from: {top: location? '-60%' : '0%'},
		config: {
			duration: 500
		}
	})

// leaf img animation----------------------------------

	const leafimg = useSpring({
		to: [{left: width <= 767 && width >= 600 ?
					location? 
					openSide? '37%' : '30%' : openSide? '30%' : '37%': 
				 	width <= 600 && width >= 430 ? location? 
					openSide? '36%' : '30%' : openSide? '30%' : '36%':
					width <= 430 ? 
					location? 
					openSide? '33%' : '30%' : openSide? '30%' : '33%':
					location? 
					openSide? '39%' : '30%' : openSide? '30%' : '39%',

			
				top: width <= 991 && width >= 768 ? location? 
				openSide ? '55%' : '24%' : 
				openSide ? '24%' : '55%' :
				width >= 400 && width <= 767 ?  location ?
				openSide ? '51%' : '35%' : 
				openSide ? '35%' : '51%' :
				width <= 400 ? location ? 
				openSide ? '50%' : '35%' : 
				openSide ? '35%' : '50%' :
				location ?
				openSide ? '55%' : '30%' : 
				openSide ? '30%' : '55%' ,


				width: width <= 700 && width >= 600?  
				location? 
				openSide ? '10%': '15%' : openSide ? '15%' : '10%' :
				width <= 600 && width >= 430?
				location? 
				openSide ? '12%': '15%' : openSide ? '15%' : '12%':
				width <= 429 ? 
				location?
				openSide ? '13%': '15%' : openSide ? '15%' : '13%':
				location ?
				openSide ? '8%': '15%' : openSide ? '15%' : '8%'

		
		
		}],
  	from: {left: location? 
			location.name === 'fromNavication' ? 
			'30%' : location.name === 'fromTechnology' ?
			'0%' : location.name ==="fromEnvironment" ?  
			"50%" : location.name === 'fromSkill'? 
			'0%' : '0%' : '35%',


			top: location? location.name === 'fromNavication' ? 
			"-50%" : location.name === 'fromEnvironment' ? 
			'-15%' : '30%' :  '55%'
		},
			config: {
				duration: 500
			}
		})

// brush img animation --------------------

		const brushimg = useSpring({
			to: [{
				left: width <= 767 && width >= 600 ?
					location? 
					openSide? '63%' : '70%' : openSide? '70%' : '63%':
					width <= 600 && width >= 430 ?
					location? 
					openSide? '64%' : '70%' : openSide? '70%' : '64%':
					width <= 430?
					location? 
					openSide? '67%' : '70%' : openSide? '70%' : '67%':
					location?
					openSide? '61%' : '70%' : openSide? '70%' : '61%',

				
				top: width <= 991 && width >= 768 ? location? 
				openSide ? '55%' : '24%' : 
				openSide ? '24%' : '55%' :
				width >= 400 && width <= 767 ?  location ?
				openSide ? '51%' : '35%' : 
				openSide ? '35%' : '51%' :
				width <= 400 ? location ? 
				openSide ? '50%' : '35%' : 
				openSide ? '35%' : '50%' :
				location ?
				openSide ? '55%' : '30%' : 
				openSide ? '30%' : '55%' ,

				width: width <= 700 && width >= 600?  
				location? 
				openSide ? '10%': '15%' : openSide ? '15%' : '10%' :
				width <= 600 && width >= 430?
				location? 
				openSide ? '12%': '15%' : openSide ? '15%' : '12%':
				width <= 429 ? 
				location?
				openSide ? '13%': '15%' : openSide ? '15%' : '13%':
				location ?
				openSide ? '8%': '15%' : openSide ? '15%' : '8%'
			}],
				from: {left: location? 	
				location.name === 'fromNavication' ?
				'70%' : location.name === 'fromEnvironment'?
				'100%' : location.name === 'fromTechnology' ? 
				'100%' : location.name === 'fromSkill'? 
				'50%' : '30%' : '70%',


				top: location? location.name === 'fromNavication' ? 
						"-50%" : location.name === 'fromSkill' ? 
						'-15%' : '30%' :  '55%'},
				config: {
					duration: 500
				}
			})

//  circle img animation -----------------------

			const circleimg = useSpring({
				to: [{
					left: '50%',

				top: width <= 991 && width >= 768 ? location? 
				openSide ? '55%' : '24%' : 
				openSide ? '24%' : '55%' :
				width >= 400 && width <= 767 ?  location ?
				openSide ? '51%' : '35%' : 
				openSide ? '35%' : '51%' :
				width <= 400 ? location ? 
				openSide ? '50%' : '35%' : 
				openSide ? '35%' : '50%' :
				location ?
				openSide ? '55%' : '30%' : 
				openSide ? '30%' : '55%' ,


				width: width <= 700 && width >= 600?  
				location? 
				openSide ? '10%': '15%' : openSide ? '15%' : '10%' :
				width <= 600 && width >= 430?
				location? 
				openSide ? '12%': '15%' : openSide ? '15%' : '12%':
				width <= 429 ? 
				location?
				openSide ? '13%': '15%' : openSide ? '15%' : '13%':
				location ?
				openSide ? '8%': '15%' : openSide ? '15%' : '8%'
					}],
					from: {left: location? 
					location.name === 'fromNavication' ?
					'50%' : location.name === 'fromTechnology' ?
					'50%' :  location.name === 'fromEnvironment'? 
					'0%' : location.name === 'fromSkill'? 
					'100%' : '0%' :  '50%',


					top: location? location.name === 'fromNavication' ? 
						"-50%" : location.name === 'fromTechnology' ? 
						'-15%' : '35%' :  '55%',},
					config: {
						duration: 500
					}
				})


	//  banner text img animatios
	
	return(
		<div>
			<div className="click-div" onClick={handlerSide}>
			<animated.img style={sideanimation} className="logo-image" src={logo} alt="logo"></animated.img>
				<animated.div style={container} className='main-banner'>
					<div className='banner-container' >
						
					<animated.div style={bannerStyleLogo} className="banner-style-logo">
						<img className="logo-img" src={mainLogo} alt="logo" ></img>
						<div className="logo-text">
							<img src={ets} className="text-img"  alt="logo"></img>
						</div>
					</animated.div>
						
						<animated.div style={bannerStyleText} className="banner-style-text" >
							<p>Environment</p>
							<p>Technology</p>
							<p>Skills</p>
						</animated.div>

							<Link  className='link environment' to='/environment'>
								<animated.img  src={ leaf} alt='img'  style={leafimg} className=''></animated.img>
							</Link >

							<Link className='link technology' to='/technology'>
								<animated.img src={ circle} alt='img' className='centerimg'style={circleimg} ></animated.img>
							</Link>

							<Link className='link skill' to='/skill'>
								<animated.img src={brush} alt='img' style={brushimg} ></animated.img>
							</Link>
							
						
					</div>
				</animated.div>
			</div>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
			<SectionSix />
			<SectionSeven />
			<FooterSection />
		</div>
	)
}


export default HomeBanner
