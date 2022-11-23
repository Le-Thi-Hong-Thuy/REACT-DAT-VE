import React, { Component } from 'react'
import BookedPlace from './BookedPlace'
import ChairList from './ChairList'
import "./chair.css"

 class MovieBooking extends Component {
  render() {
    return (
        <div style={{ backgroundColor: "black" }}>
        <div className="container">
          <h2 className="text-center fw-bold p-3 text-white mb-5">
            Đặt vé xem phim Cyberlearn.vn
          </h2>
          <div className="row">
            <div className="col-7">
              <div className="screen w-100 mb-4 ">
                <p className="position-absolute w-100 text-center mt-1 ">
                  Màn hình
                </p>
              </div>
              <ChairList/>
            </div>
            <div className="col-4 ms-4">
              <BookedPlace/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieBooking
