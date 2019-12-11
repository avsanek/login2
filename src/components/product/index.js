import React from 'react';
import { connect } from "react-redux";

class ProductList extends React.Component {

delete(e) {
  var id = e.target.getAttribute('data-id');
  this.props.dispatch({
    type: 'DELETE_PRODUCT',
    id: id
  });
  this.props.history.push('/');
}

edit(e) {
  var id = e.target.getAttribute('data-id');
  this.props.dispatch({
    type: 'EDIT_PRODUCT',
    id: id
  });
  this.props.history.push('/edit/' + id);
}

  render() {
    return (
      <div>
        <h3> Product Product</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map(function(product, index) {
                return <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                  <input type="button" value="Edit"
                    data-id={product.id} onClick=
                    {this.edit.bind(this)}/> | 
                    <input type="button" value="Delete"
                    data-id={product.id} onClick=
                    {this.delete.bind(this)}/>
                  </td>
                </tr>
              }, this)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList);