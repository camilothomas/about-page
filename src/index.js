import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import music from './music.jpg';
import art from './art.jpg';
import travel from './travel.jpg';
import left from './left-100.png';
import right from './right-100.png';

function Arrow(props) {
	
	return(
	  <img src={props.whichArrow} alt="arrow" className={props.whichClass}>
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

	renderArrow(whichArrow, whichClass) {
		return(
			<Arrow
			  whichArrow={whichArrow}
			  whichClass={whichClass}
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
	    	<div className='iMap'>
	    			{this.renderArrow(left, 'l-arrow')}
	    		  {this.renderInterest('Music', 'ltablet', 'component-img', music, 'art of andean panflute player', 'interest-nm')}
	    		  <div className='dummy1'></div>
	    		  {this.renderInterest('Travel', 'ctablet', 'c-component-img', travel, 'portrait of me', 'c-interest-nm')}
	    	    <div className='dummy2'></div>
	    	    {this.renderInterest('Art', 'rtablet', 'component-img', art, 'drawing of two people', 'interest-nm')}
	    			{this.renderArrow(right, 'r-arrow')}
	    	</div>
	    </div>
    );
  }
}

// ------------

ReactDOM.render(
  <InterestMap />,
  document.getElementById('root')
);