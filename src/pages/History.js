import React, { useState, useEffect } from "react";
import { history, historyComment } from "../services/api";
import moment from "moment";
import { Link } from "react-router-dom";

const History = () => {
  const [historyItem, setHistoryItem] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    history()
        .then(({ data }) => {
          setHistoryItem(data.data.docs);
        });
    historyComment()
        .then(({ data }) => {
          setComments(data.data.docs);
        });
      },[]);
  return (
    <>
    <section style={{background: '#f5deb3', paddingTop: '50px', minHeight: '750px'}}>
      <div className="container mt-5">
        <div className="p-3 mb-2 bg-light text-dark">
          <h1>History Order</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Date purchased</th>
                <th scope="col">Total Price</th>
                <th scope="col">Status</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
            {historyItem.map((items, index) => (
              <>
              <tr>
                <td>{items._id}</td>
                <td>{moment(items.createdAt).format('DD/MM/YYYY')}</td>
                <td>{items.totalPrice}$</td>
                <td>{items.status}</td>
                <td><Link className="btn btn-primary" role="button" to={`/CartInfor-${items._id}`}>Details</Link></td>
              </tr>
              </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container mt-5">
        <div className="p-3 mb-2 bg-light text-dark">
          <h1>History Comments</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" style={{width: '20%'}}>Product name</th>
                <th scope="col" style={{width: '20%'}}>Rating</th>
                <th scope="col" style={{width: '60%'}}>Content</th>                
              </tr>
            </thead>
            <tbody>
            {comments.map((items, index) => (
              <>
              <tr>
                <td>{items.product_id.name}</td>
                <td>{items.rating}</td>
                <td>{items.content}</td>                
              </tr>
              </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
};

export default History;


