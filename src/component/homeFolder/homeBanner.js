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
		to: [{left: location? openSide ? "-5%" : "1%" : openSide ? "1%" : "-5%"}],
		from: {left:"-5%"},
		config: {
			duration: 500
		}
	})
	

	
	// console.log(props.computedMatch.isExact)
	console.log(props)

// container height animation------------------

	const container = useSpring({
		to: [{height: width <= 768 ? location ? "350px" : '400px':
				location ? "550px" : '550px',

				zIndex: location? openSide? -5 : 0 : openSide? 0 : -5
				}],
		from: {height: width === 768 ?  location ? "400px" :'550px':
				location ? "400px" :'550px',
			
				
			}
	})

// banner text animation -------------------------

	const bannerStyleText = useSpring({
		to: [{
			top: width <= 991 ? location ?
			openSide? '60%' : '14%' : 
			openSide? '14%' : '60%' :
			location ?
			openSide? '430px' : '110px' : 
			openSide? '110px' : '430px' 
			,

			fontSize: location ? openSide? '25px' : '15px' : openSide? '15px' : '25px'
		}],
		from: {top: '80px'},
		config: {
			duration: 500
		}
	})

// banner style animation------------------------------

	const bannerStyleLogo = useSpring({
		to: [{top: width <= 991 ? location?
				 openSide? '0%' : '-27%' : 
				 openSide? '-27%' : '0%' :
				 location?
				 openSide? '0px' : '-170px' : 
				 openSide? '-170px' : '0px' ,


				paddingTop: location? openSide? '20px' : '0px': openSide? '0px' : '20px' ,
	}],
		from: {top: location? '-290px' : '0px'},
		config: {
			duration: 500
		}
	})

// leaf img animation----------------------------------

	const leafimg = useSpring({
		to: [{left: location? openSide? '39%' : '30%' : openSide? '30%' : '39%' ,

			
				top: width <= 991 ? location? 
				openSide ? '45%' : '24%' : 
				openSide ? '24%' : '45%' :
				location? 
				openSide ? '300px' : '160px' : 
				openSide ? '160px' : '300px' ,


		width: location? openSide ? '8%' : '15%' : openSide ? '15%' : '8%'
		}],
  	from: {left: location? 
			location.name === 'fromNavication' ? 
			'30%' : location.name === 'fromTechnology' ?
			'0%' : location.name ==="fromEnvironment" ?  
			"50%" : location.name === 'fromSkill'? 
			'0%' : '0%' : '35%',


			top: location? location.name === 'fromNavication' ? 
			"-200px" : location.name === 'fromEnvironment' ? 
			'-90px' : '117px' :  '117px'
		},
			config: {
				duration: 500
			}
		})

// brush img animation --------------------

		const brushimg = useSpring({
			to: [{
				left: location? openSide? '61%' : '70%' : openSide? '70%' : '61%' ,
				
				top: width <= 991 ? location? 
				openSide ? '45%' : '24%' : 
				openSide ? '24%' : '45%' :
				location? 
				openSide ? '300px' : '160px' : 
				openSide ? '160px' : '300px' ,

				width: location? openSide ? '8%' : '15%' : openSide ? '15%' : '8%'
			}],
				from: {left: location? 	
				location.name === 'fromNavication' ?
				'70%' : location.name === 'fromEnvironment'?
				'100%' : location.name === 'fromTechnology' ? 
				'100%' : location.name === 'fromSkill'? 
				'50%' : '30%' : '70%',


				top: location? location.name === 'fromNavication' ? 
						"-200px" : location.name === 'fromSkill' ? 
						'-90px' : '117px' :  '117px'},
				config: {
					duration: 500
				}
			})

//  circle img animation -----------------------

			const circleimg = useSpring({
				to: [{
					left: '50%',

					top: width <= 991 ? location? 
					openSide ? '45%' : '24%' : 
					openSide ? '24%' : '45%' :
					location? 
					openSide ? '300px' : '160px' : 
					openSide ? '160px' : '300px' ,


					width: location? openSide ? '8%' : '15%' : openSide ? '15%' : '8%'
					}],
					from: {left: location? 
					location.name === 'fromNavication' ?
					'50%' : location.name === 'fromTechnology' ?
					'50%' :  location.name === 'fromEnvironment'? 
					'0%' : location.name === 'fromSkill'? 
					'100%' : '0%' :  '50%',


					top: location? location.name === 'fromNavication' ? 
						"-200px" : location.name === 'fromTechnology' ? 
						'-90px' : '117px' :  '117px',},
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
							<p>Skill</p>
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
