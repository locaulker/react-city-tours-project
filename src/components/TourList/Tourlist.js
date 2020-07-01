import React, { Component } from "react"
import Tour from "../Tour/Tour"
import "./TourList.scss"
import { tourData } from "../../tourData"

class Tourlist extends Component {
  state = {
    tours: tourData
  }

  removeTour = id => {
    console.log(id)
  }

  render() {
    // console.log(this.state.tours)

    const { tours } = this.state

    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    )
  }
}

export default Tourlist