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
import languages from './languages.png';
import left from './left-100.png';
import right from './right-100.png';
import penguin from './Card_back_12.svg';
import joker from './Atlas_djb.svg';

function Arrow(props) {
	
	return(
	  <img src={props.whichArrow} alt="arrow" className={props.whichClass} onClick={props.onClick}>
	  </img>
	);
}

class Interest extends React.Component {
	render() {
		return(
			<div className={this.props.clsLoc}>
				<p className={this.props.clsTxt}>{this.props.head}</p>
    	  <img className={this.props.clsNm} src={this.props.imgNm} alt={this.props.altMsg}>
    	  </img>
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
		    ['Languages', languages, 'old German handwriting']
		  ],
		  leftBack: 'dummy1',
		  rightBack: 'dummy2',
  	};
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
		  />
		);
	}

	handleClick(e) {
		/*
		if (this.state.leftBack === 'dummy1') {
			this.setState({leftBack: 'dummy3', rightBack: 'dummy4'});
		} else {
			this.setState({leftBack: 'dummy1', rightBack: 'dummy2'});
		}*/
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
			y-1===-1?yless=4:yless=y-1;
			newArray[0][0] = this.state.allInterests[yless][0];
			newArray[0][3] = this.state.allInterests[yless][1];
			newArray[0][4] = this.state.allInterests[yless][2];
			newArray[1][0] = this.state.allInterests[y][0];
			newArray[1][3] = this.state.allInterests[y][1];
			newArray[1][4] = this.state.allInterests[y][2];
			y+1===5?ymore=0:ymore=y+1;
			newArray[2][0] = this.state.allInterests[ymore][0];
			newArray[2][3] = this.state.allInterests[ymore][1];
			newArray[2][4] = this.state.allInterests[ymore][2];
		} else {
			y+1===5?ymore=0:ymore=y+1;
			newArray[0][0] = this.state.allInterests[ymore][0];
			newArray[0][3] = this.state.allInterests[ymore][1];
			newArray[0][4] = this.state.allInterests[ymore][2];
			let ymomo;
			ymore+1===5?ymomo=0:ymomo=ymore+1;
			newArray[1][0] = this.state.allInterests[ymomo][0];
			newArray[1][3] = this.state.allInterests[ymomo][1];
			newArray[1][4] = this.state.allInterests[ymomo][2];
			let ymomomo;
			ymomo+1===5?ymomomo=0:ymomomo=ymomo+1;
			newArray[2][0] = this.state.allInterests[ymomomo][0];
			newArray[2][3] = this.state.allInterests[ymomomo][1];
			newArray[2][4] = this.state.allInterests[ymomomo][2];
		}
		this.setState({interestArray: newArray});
	}

	arrayOfContent() {
		return(
			<div className='iMap'>
  			{this.renderArrow(left, 'l-arrow')}
  		  {this.renderInterest(...this.state.interestArray[0])}
  		  <div className={this.state.leftBack}></div>
  		  {this.renderInterest(...this.state.interestArray[1])}
  	    <div className={this.state.rightBack}></div>
  	    {this.renderInterest(...this.state.interestArray[2])}
  			{this.renderArrow(right, 'r-arrow')}
  			<p className='buffer'>' '</p>
    	</div>

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

  render() {
    return(
    	<div>
    	  <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    	    <div className="container">
    	      <a className="navbar-brand" href="../index.html">Camilo Embree-Lowry</a>
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