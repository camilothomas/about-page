import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'popper.js/dist/popper.js'
import './index.css';
import music from './music.jpg';
import art from './art.jpg';
import travel from './travel.jpg';
import me from './me.jpg';
import german from './german.jpg';
import spanish from './spanish.jpg';
import left from './left-100.png';
import right from './right-100.png';
import close from './close.svg';
import pyramids from './pyramids.jpg';
import kammweg from './kammweg.jpg';
import meckPo from './meckPo.jpg';
import malinche from './malinche.jpg';
import field from './field.jpg';
import huasteca from './huasteca.jpg';
import schloss from './schloss.jpg';
import church from './church.jpg';
import helmet from './helmet.jpg';
import angels from './angels.jpg';
import painting from './painting.jpg';
import folkArt from './folkArt.jpg';
import houston from './houston.jpg';
import atlanta from './atlanta.jpg';
import berlin from './berlin.jpg';
/*
<a target='_blank' rel='noopener noreferrer' href="https://live.staticflickr.com/3456/3767419326_b439301075_b.jpg">
<img className='horizontal' src={malinche} alt="" />
*/
function Picture(props) {
	return(
		<div className='imgHolder'>
		  <a target='_blank'  href={props.href}>
		 	  <img className={props.orientation} src={props.src} alt={props.alt} />
		 	</a>
		</div>
		)
}

function CloseBtn(props) {
	return(
		<img
		  src={close}
		  alt='close button'
		  className='close'
		  onClick={props.onClick}
		/>
	);
}

function Arrow(props) {
	return(
	  <img
	    src={props.whichArrow}
	    alt="arrow"
	    className={props.whichClass}
	    onClick={props.onClick}
	  />
	);
}

function Interest(props) {
	return(
		<div className={props.clsLoc} onClick={props.onClick}>
			<p className={props.clsTxt}>{props.head}</p>
  	  <img
  	    className={props.clsNm}
  	    src={props.imgNm}
  	    alt={props.altMsg}
  	  />
  	</div>
  );
}

class Display extends React.Component {
	
	render() {
		return(
	  <div className={this.props.clss}>  
	  	<div className='display'>  
	  	  <p className='tvTitle'>{this.props.title}</p>
	  	  <CloseBtn onClick={this.props.onClick} />
	  	  {this.props.content}
	  	</div>
	  </div>
		);
  }
}

class InterestMap extends React.Component {
	constructor(props) {
  	super(props);
  	this.state = {
  		interestArray: [
			  ['Music', 'ltablet', 'component-img', music, 'art of andean panflute player', 'interest-nm'],
			  ['Travel', 'ctablet', 'c-component-img', travel, 'waterfall', 'c-interest-nm'],
			  ['Art', 'rtablet', 'component-img', art, 'drawing of two people', 'interest-nm']
		  ],
		  allInterests: [
		    ['Music', music, 'art of andean panflute player'],
		    ['Travel', travel, 'waterfall'],
		    ['Art', art, 'drawing of two people'],
		    ['Bio', me, 'me'],
		    ['German', german, 'old German handwriting'],
		    ['Spanish', spanish, 'mural']
		  ],
		  leftBack: 'dummy1',
		  rightBack: 'dummy2',
		  displayClass: 'xdisplay',
		  lArrowClass: 'l-arrow',
		  rArrowClass: 'r-arrow',
		  contentNumber: 1,
		 	displayTitle: '',
		 	content: [
		 					 <div className='content'>
							   <p>Hello</p>
		 					   <p>I am content</p>
		 					   <p>What's your name?</p>
		 					   <p>Good night, sleep well.</p>
		 					 </div>,
		 					 <div className='content'>
							   <p>Content coming soon [see Travel]</p>
		 					 </div>,
		 					 <div className='content'>
		 					   <p>
		 					     Travelling has been my second nature.
							     Now it is time to settle down.  I haven't been on an airplane since May 2017.
							     I accept the change, but
							     I love to look at the pictures and remember the good times.
		 					   </p>  
		 					   <h5>Long Hikes</h5>
			 				   <div className='imgContainer'>
		 					     {this.renderPicture('8837/28011244154_c8256a6c66_b.jpg', 'horizontal', kammweg, 'picturesque German town')}
		 					     {this.renderPicture('5339/30837289785_737aa406bb_b.jpg', 'horizontal', meckPo, 'big tree in rural field')}
		 					     {this.renderPicture('8612/28474496892_d6f286762c_b.jpg', 'horizontal', field, 'rural field')}
			 				   </div>
		 					   <h5>High Peaks</h5>
		 					   <div className='imgContainer'>
		 					     {this.renderPicture('3456/3767419326_b439301075_b.jpg', 'horizontal', malinche, 'volcano')}
		 					     {this.renderPicture('7921/39660619443_022b51ce4d_b.jpg', 'horizontal', huasteca, 'mountain')}
			 				   </div>
			 				   <h5>History</h5>
			 				   <div className='imgContainer'>
				 				   {this.renderPicture('8301/28215564154_6a1fedb573_b.jpg', 'vertical', church, 'damaged German church')}
				 				   {this.renderPicture('8137/27977673254_2dde1a9723_b.jpg', 'horizontal', schloss, 'German castle')}
			 					   {this.renderPicture('8644/28551459980_e1640bdcbf_b.jpg', 'vertical', helmet, 'ancient European helmet')}
			 					   {this.renderPicture('2769/4109746479_bbe84aac1b_b.jpg', 'horizontal', pyramids, 'Mexican pyramids')}
			 				   </div>
			 				   <h5>Art</h5>
			 				   <div className='imgContainer'>
			 				   	 {this.renderPicture('8820/29470760406_974b3ce22c_b.jpg', 'horizontal', angels, 'angel sculpture')}
			 					   {this.renderPicture('7896/47446411491_9fd76d9d12_b.jpg', 'vertical', folkArt, 'Mexican folk art')}
			 					   {this.renderPicture('2775/5790733229_aac299fbb3_b.jpg', 'horizontal', painting, 'modern painting')}
			 				   </div>
			 				   <h5>Big Cities</h5>
			 				   <div className='imgContainer'>
				 				   {this.renderPicture('7912/46723225014_00262f4b45_b.jpg', 'vertical', atlanta, 'skyscraper in Atlanta')}
				 				   {this.renderPicture('5695/30127202203_cfed0962ef_b.jpg', 'horizontal', berlin, 'Potzdamer Platz')}
			 					   {this.renderPicture('2843/9284111707_8b4f4b9d36_b.jpg', 'vertical', houston, 'skyscrapers of Houston')}
			 				   </div>
		 				   </div>
		 					 ],
  	};
  }

  renderPicture(link, orientation, src, alt) {
  	return(
  		<Picture
  		  href={'https://live.staticflickr.com/' + link}
  		  orientation={orientation}
  		  src={src}
  		  alt={alt}
  		/>
  	);
  }

  renderArrow(whichArrow, whichClass) {
		return(
			<Arrow
			  whichArrow={whichArrow}
			  whichClass={whichClass}
			  onClick={e => this.handleClick(e)}
			/>
		);
	}

	renderInterest(head, clsLoc, clsNm, imgNm, altMsg, clsTxt) {
		return(
		  <Interest
		  	head={head}
			  clsLoc={clsLoc}
			  clsNm={clsNm}
			  imgNm={imgNm}
			  altMsg={altMsg}
			  clsTxt={clsTxt}
			  onClick={e => this.interestClick(e)}
		  />
		);
	}

	renderDisplay(clss) {
		return(
			<Display
				onClick={e => this.handleClose(e)}
				clss={clss}
				title={this.state.displayTitle}
				content={this.state.content[this.state.contentNumber]}
			/>
		);
	}

	handleClick(e) {
		let newArray = this.state.interestArray;
		let x = this.state.interestArray[0][0];
		let y;
		let yless;
		let ymore;
		for (let a = 0; a < this.state.allInterests.length; a++) {
			if (this.state.allInterests[a].indexOf(x) !== -1) {
				y = a;
			}
		}
	  if (e.target.className === 'r-arrow') {
			y-1===-1?yless=5:yless=y-1;
			newArray[0][0] = this.state.allInterests[yless][0];
			newArray[0][3] = this.state.allInterests[yless][1];
			newArray[0][4] = this.state.allInterests[yless][2];
			newArray[1][0] = this.state.allInterests[y][0];
			newArray[1][3] = this.state.allInterests[y][1];
			newArray[1][4] = this.state.allInterests[y][2];
			y+1===6?ymore=0:ymore=y+1;
			newArray[2][0] = this.state.allInterests[ymore][0];
			newArray[2][3] = this.state.allInterests[ymore][1];
			newArray[2][4] = this.state.allInterests[ymore][2];
		} else {
			y+1===6?ymore=0:ymore=y+1;
			newArray[0][0] = this.state.allInterests[ymore][0];
			newArray[0][3] = this.state.allInterests[ymore][1];
			newArray[0][4] = this.state.allInterests[ymore][2];
			let ymomo;
			ymore+1===6?ymomo=0:ymomo=ymore+1;
			newArray[1][0] = this.state.allInterests[ymomo][0];
			newArray[1][3] = this.state.allInterests[ymomo][1];
			newArray[1][4] = this.state.allInterests[ymomo][2];
			let ymomomo;
			ymomo+1===6?ymomomo=0:ymomomo=ymomo+1;
			newArray[2][0] = this.state.allInterests[ymomomo][0];
			newArray[2][3] = this.state.allInterests[ymomomo][1];
			newArray[2][4] = this.state.allInterests[ymomomo][2];
		}
		this.setState({interestArray: newArray});
	}
  
  handleClose(e) {
  	this.setState({displayClass: 'xdisplay', lArrowClass: 'l-arrow', rArrowClass: 'r-arrow'});
  }

	interestClick(e) {
		let titleChosen;
		let cName = e.target.className;
		if (!cName.includes('tablet')) {
			cName = e.target.parentNode.className;
		}
		switch(cName[0]) {
			case 'l':
				this.setState({displayTitle: this.state.interestArray[0][0]});
				titleChosen = this.state.interestArray[0][0];
				break;
			case 'r':
				this.setState({displayTitle: this.state.interestArray[2][0]});
			  titleChosen = this.state.interestArray[2][0];
			  break;
			default:
				this.setState({displayTitle: this.state.interestArray[1][0]});
				titleChosen = this.state.interestArray[1][0];
		}
		// do more later now just travel or nothing
		if (titleChosen === 'Travel') {
			this.setState({contentNumber: 2});
		} else {
			this.setState({contentNumber: 1});
		}
		this.setState({displayClass: 'frame', lArrowClass: 'xdisplay', rArrowClass: 'xdisplay'});
	}

	arrayOfContent() {
		return(
			<div className='iMap'>
  			{this.renderArrow(left, this.state.lArrowClass)}
  		  {this.renderInterest(...this.state.interestArray[0])}
  		  <div className={this.state.leftBack}></div>
  		  {this.renderInterest(...this.state.interestArray[1])}
  	    <div className={this.state.rightBack}></div>
  	    {this.renderInterest(...this.state.interestArray[2])}
  			{this.renderArrow(right, this.state.rArrowClass)}
  			{this.renderDisplay(this.state.displayClass)}
  			<p className='buffer'></p>
    	</div>
		);
  }

  render() {
    return(
    	<div>
    	  <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
    	    <div className="container">
    	      <span class="navbar-brand mb-0 h1">Camilo Embree-Lowry</span>
    	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    	        <span className="navbar-toggler-icon"></span>
    	      </button>
    	      <div className="collapse navbar-collapse" id="navbarResponsive">
    	        <ul className="navbar-nav ml-auto">
    	          <li className="nav-item">
    	            <a className="nav-link" href="../index.html">Home
    	            </a>
    	          </li>
    	          <li className="nav-item active">
    	            <a className="nav-link" href="index.html">About
    				      <span className="sr-only">(current)</span>
    	            </a>
    	          </li>
    	        </ul>
    	      </div>
    	    </div>
    	  </nav>
	    	{this.arrayOfContent()}
	    </div>
    );
  }
}

// ------------

ReactDOM.render(
  <InterestMap />,
  document.getElementById('root')
);