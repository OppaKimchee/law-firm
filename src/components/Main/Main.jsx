import React from 'react'

const Main = (props) => {
	return (
		<div className="container">

			<div className="row row-offcanvas row-offcanvas-right">

				<div className="col-xs-12 col-sm-9">
					<p className="pull-right visible-xs">
						<button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
					</p>
					<div className="jumbotron">
						<h1>Welcome</h1>
						<p>welcome to Candace's Law firm.</p>
					</div>
					<div className="row">
						<div className="col-xs-6 col-lg-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
					</div>
				</div>

				<div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
					<div className="list-group">
						<a href="#" className="list-group-item active">Link</a>
						<a href="#" className="list-group-item">Link</a>
						<a href="#" className="list-group-item">Link</a>
						<a href="#" className="list-group-item">Link</a>
						<a href="#" className="list-group-item">Link</a>
						<a href="#" className="list-group-item">Link</a>
						<a href="#" className="list-group-item">Link</a>
						<a href="#" className="list-group-item">Link</a>
						<a href="#" className="list-group-item">Link</a>
						<a href="#" className="list-group-item">Link</a>
					</div>
				</div>
			</div>

			<hr />

			<footer>
				<p>© Company 2014</p>
			</footer>

		</div>
	)
}
export default Main