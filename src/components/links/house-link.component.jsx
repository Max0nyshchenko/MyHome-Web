import React, { Component } from "react";
import Link from "./link.component";

class HouseLink extends Component {
  render() {
    return (
      <Link link={`/house/${this.props.id}`}>
        {this.props.name}
      </Link>
    )
  }
}

export default HouseLink;
