import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    const { pets, onAdoptPet } = this.props;
    return (
      <div className="ui cards">
        {pets.map(pet => (
          <Pet key={`pet-${pet.id}`} onAdoptPet={onAdoptPet} pet={pet} />
        ))}
      </div>
    );
  }
}

export default PetBrowser;
