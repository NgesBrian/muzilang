import React from 'react';
import muzikol from './../../muzikol.png';
/*import PropTypes from 'prop-types';*/

export default class Home extends React.Component {
    render() {
        return (
        	<div>
	            <header className="">
					<nav class="navbar navbar-dark bg-dark justify-content-between">
					    <a class="navbar-brand" href="#">Navbar</a>
					    <form class="form-inline my-1">
					        <div class="md-form form-sm my-0">
					            <input class="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search Muzikol" aria-label="Search" />
					        </div>
					        <button class="btn btn-outline-white btn-sm my-0" type="submit">Search</button>
					    </form>
					</nav>
	            </header>
	            <div class="container">
		            <div class="row">
			            <div class="col-md-4" style={{backgroundColor: "red"}}>
				            <img src={muzikol} className="" alt="muzikol's logo" width="100%" height="100%" />
						</div>
			            <div class="col-md-4" style={{backgroundColor: "red"}}>
				            <img src={muzikol} className="" alt="muzikol's logo" width="100%" height="100%" />
						</div>
					</div>
				</div>
			</div>
        );
    }
}