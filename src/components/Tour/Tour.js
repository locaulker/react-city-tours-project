import React, { Component } from "react"
import "./Tour.scss"

class Tour extends Component {
  state = {
    showInfo: false,
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    })
  }

  render() {
    const { id, city, img, name, info } = this.props.tour
    const { removeTour } = this.props

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <div className="close-btn" onClick={() => removeTour(id)}>
            <i className="far fa-times-circle"></i>
          </div>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
            click icon to Show more
          </h5>
          {this.state.showInfo && (
            <>
              <hr style={{ margin: ".5rem 0" }} />
              <p>{info}</p>
            </>
          )}
        </div>
      </article>
    )
  }
}

export default Tour
