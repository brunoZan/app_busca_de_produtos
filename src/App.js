import './App.css';
import React, {Component} from 'react';
//import ReactDOM from 'react-dom/client';

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
	constructor(props) {
   	super(props);
    	this.state = {
	      filterText: '',
	      inStockOnly: false
	    };
     	this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    	this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }




	render() {
		return (
			<div className="App">
				<SearchBar 
					filterText={this.state.filterText}
          		inStockOnly={this.state.inStockOnly}
          		onFilterTextChange={this.handleFilterTextChange}
          		onInStockChange={this.handleInStockChange}
          	/>
				<ProductTable
					filterText={this.state.filterText}
          		inStockOnly={this.state.inStockOnly}
           		products={this.props.products}
           	/>
			</div>
		)
	}
}

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}

	handleInStockChange(element) {
		this.props.onInStockChange(element.target.checked);
	}


	handleFilterTextChange(element) {
		this.props.onFilterTextChange(element.target.value);
	}

	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;
		

		return (
			<header>
					<form>
					<input
						type="text" 
						placeholder="Search..."
						value= {filterText} 
						onChange={this.handleFilterTextChange}
						/>
					
					<span id="span">
						<input 
							type="checkbox" 
							id="checkbox"
							checked={inStockOnly}
							onChange={this.handleInStockChange}
							/>
							{' '}
						<span>Only in stock</span>
					</span>
				</form>
			</header>
	);
	}
}

class ProductTable extends Component {
	render() {
	  const rows = [];
	  let lastCategory = null;

	  const filterText = this.props.filterText;
	  const inStockOnly = this.props.inStockOnly;
	  
	  this.props.products.forEach((product) => {
	  	if (product.name.indexOf(filterText) === -1) {
	  		return <td>Nada encontrado</td>;
	  	}
	  	if (inStockOnly && !product.stocked) {
	  		return <td>Nada encontrado</td>;
	  	}
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

function ProductCategoryRow(props) {
	return (
		<th>{props.category}</th>
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