import React, { Component } from "react";

class Search extends Component {
	constructor() {
		super();
	}


	render() {
		return (
			<div className="card">
				<h4 className="card-header bg-primary text-white">Search</h4>
				<form className="card-body" onSubmit={this.props.handleFormSubmit}>
					<div className="form-row">
						<div className="form-group col-sm-10">
							<input
								name="searchTerm"
								type="text"
								className="form-control"
								onChange={this.props.handleInputChange}
								id="formGroupExampleInput"
								placeholder="Search Query"
							/>
						</div>
						<div className="form-group col-sm-2">
							<button type="submit" className="btn btn-primary">
								Search
							</button>
						</div>
					</div>
					<div className="form-row">
						<div className="col form-group">
							<label
								className="form-control-label"
								htmlFor="startYear"
							>
								From:
							</label>
							<input
								name="startYear"
								type="number"
								onChange={this.props.handleInputChange}
								className="form-control"
								placeholder="Start Year"
							/>
						</div>
						<div className="col form-group">
							<label className="form-control-label" for="endYear">
								To:
							</label>
							<input
								name="endYear"
								htmlFor="number"
								onChange={this.props.handleInputChange}
								className="form-control"
								placeholder="End Year"
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
