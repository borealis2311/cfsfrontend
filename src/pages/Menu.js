import React, { useEffect, useState } from 'react';
import { getCategories, getProducts } from "../services/api";
import { Link } from "react-router-dom";
import { baseAPI } from "../shared/api/app";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({});


  useEffect(() => {
    getCategories().then(({ data }) => { return setCategories(data.data.docs) });
    getProducts(filter).then(({ data }) => { return setProducts(data.data.docs) });
  }, [filter]);

  const filterOptions = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, params: { ...filter.params, [name]: value }});
  }

  return (
    <section style={{ background: '#f5deb3', paddingTop: 20, minHeight: 800 }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header"><span>Filter</span></div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="category">Category</label>
                    <select onChange={filterOptions} name="category" className="form-select form-select" id="category">
                      <option value="">All</option>
                      {categories.map((category) => (
                        <option value={`${category._id}`} key={category._id}>{category.title}</option>
                      ))}
                    </select></div>
                  <div className="mb-3 row">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="minPrice">Min</label>
                      <input onChange={filterOptions} name="minPrice" className="form-control form-control" type="number" min="0" id="minPrice" placeholder="Minimum price" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="maxPrice">Max</label>
                      <input onChange={filterOptions} name="maxPrice" className="form-control form-control" type="number" min="0" id="maxPrice" placeholder="Maximum price" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="search">Search</label>
                    <input onChange={filterOptions} name="search" className="form-control form-control" type="text" id="search" placeholder="Search" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {products.map(product => {                    
                    return (
                      <div className="col-md-4 mb-3" key={product._id}>
                        <div className="card">
                          <Link to={`/ProductDetails-${product._id}`}>
                            <img
                              className="card-img-top w-100 d-block card-img-top"
                              src={`${baseAPI}/assets/upload/products/${product.image}`}
                              alt={product.name}
                              style={{ width: '256px', height: '176px' }}
                            />
                          </Link>
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">
                                <span className="col-md-4 mb-3">{product.price}$</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu;
