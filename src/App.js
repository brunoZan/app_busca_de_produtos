import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

const PRODUCTS = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

class App extends Component {
	render()
	{
		return (
			<FilterableProductTable products={PRODUCTS}/>
		);
	}
}

class FilterableProductTable extends Component {
	render() {
		return (
			<div className="App">
				<SearchBar />
				<ProductTable products={this.props.products} />
			</div>
		)
	}
}

function SearchBar() {
	return (
		<header>
			<form>
				<input type="text" placeholder="Search..."/>
				
				<span id="span">
					<input type="checkbox" id="checkbox"/>
					<span>Only in stock</span>
				</span>
			</form>
		</header>
	);
}

class ProductTable extends Component {
	render() {
	  const rows = [];
	  let lastCategory = null;
	  
	  this.props.products.forEach((product) => {
		if (product.category !== lastCategory) {
		  rows.push(
			<ProductCategoryRow
			  category={product.category}
			  key={product.category} />
		  );
		}
		rows.push(
		  <ProductRow
			product={product}
			key={product.name} />
		);
		lastCategory = product.category;
	  });
  
	  return (
		<table>
		  <thead>
			<tr>
			  <th>Name</th>
			  <th>Price</th>
			</tr>
		  </thead>
		  <tbody>{rows}</tbody>
		</table>
	  );
	}
  }
function ProductCategoryRow() {
	return (
		<th>Gênero products</th>
	);
}

class ProductRow extends Component {
	render() {
	  const product = this.props.product;
	  const name = product.stocked ?
		product.name :
		<span style={{color: 'red'}}>
		  {product.name}
		</span>;
  
	  return (
		<tr>
		  <td>{name}</td>
		  <td>{product.price}</td>
		</tr>
	  );
	}
  }



export default App;