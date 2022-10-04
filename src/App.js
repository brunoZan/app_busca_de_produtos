import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component {
	render()
	{
		return (
			<div className="App">
				<header>
					<input type="text" placeholder="Search..."/>
					<span id="span">
					<input type="checkbox" id="checkbox"/>
					<span>Only in stock</span>
					</span>
				</header>
				<section className="ProductTable">
					<table>
					  <tr>					
							<th>Name</th>
							<th>Price</th>
						</tr>
						<tr>
							<th>Gênero products</th>
						</tr>
						<td>products</td>
						<td>34,98</td>
						<tr>
							<th>Gênero products</th>
						</tr>
						<td>products</td>
						<td>34,98</td>
						<tr>
						<td>products</td>
						<td>34,98</td>
						</tr>
					</table>
				</section>
			</div>
		);
	}
}

export default App;
