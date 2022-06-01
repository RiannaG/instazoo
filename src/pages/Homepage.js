import { FooterShared } from "../components/FooterShared";
import { HeaderShared } from "../components/HeaderShared";
import { CardShared } from "../components/CardShared";
import { useState } from "react";
import { useEffect } from "react";
import { Details } from "../components/Details";
import notFound from "../assets/not-found.svg";
import PreferredShared from "../components/PreferredShared";

export function Homepage() {
  const [animals, setAnimals] = useState([]);
  const [detail, setOpenDetail] = useState(false);
  const [preferred, setOpenPreferred] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState();
  const [preferredAnimals, setPreferredAnimals] = useState([]);
  const [searchedAnimals, setSearchedAnimals] = useState([]);
  const [input, setInput] = useState();
  const [selection, setSelection] = useState("name");

  useEffect(() => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/8")
      .then((response) => response.json())
      .then((data) => setAnimals(data));
  }, []);

  useEffect(() => {
    animals.map((animal) => (animal.liked = false));
  }, [animals]);

  const openDetail = (currentAnimal) => {
    setOpenDetail(true);
    setCurrentAnimal(currentAnimal);
  };
  const openPreferred = () => {
    setOpenPreferred(true);
  };

  const closeModal = (modalSet) => {
    modalSet(false);
  };

  const addLike = (currentAnimal) => {
    setPreferredAnimals([...preferredAnimals, currentAnimal]);
    currentAnimal.liked = true;
  };

  const removeAnimal = (id) => {
    const removedPreferred = preferredAnimals.filter(
      (animal) => animal.id !== id
    );
    setTimeout(() => setPreferredAnimals(removedPreferred), 300);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSelection = (event) => {
    setSelection(event.target.value);
  };

  useEffect(() => {
    const pippo = animals.filter((animal) =>
      selection === "name"
        ? animal.name.toLowerCase().includes(input)
        : animal.geo_range.toLowerCase().includes(input)
    );
    setSearchedAnimals(pippo);
  }, [input, animals, selection]);

  return (
    <div className="fredoka">
      <HeaderShared
        openPreferred={openPreferred}
        preferredAnimals={preferredAnimals}
      />
      <div className="h-100 background-home padding-bottom">
        <div className="d-flex bg-feed shadow">
          <h1 className="py-3 px-4 font-color">Feed</h1>
          <div className="d-flex gap-4 align-items-center">
            <input
              className="rounded-pill py-2 ps-4 pe-5 border-0  button-dark  fs-5"
              placeholder="Search animals"
              onChange={handleInput}
            />
            <div className="d-flex gap-2 fs-4" onChange={handleSelection}>
              Filter by:
              <label>
                <input
                  className="me-2"
                  name="filter"
                  type="radio"
                  value="name"
                  defaultChecked
                />
                <span>Name</span>
              </label>
              <label>
                <input
                  className="me-2"
                  name="filter"
                  type="radio"
                  value="geo_range"
                />
                <span>Geo range</span>
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex max-width gap-4 m-auto justify-content-evenly align-items-around flex-wrap pt-5">
          {!input &&
            animals.map((animal) => (
              <li key={animal.id}>
                <CardShared animal={animal} openDetail={openDetail} />
              </li>
            ))}

          {input &&
            searchedAnimals.map((animal) => (
              <li key={animal.id}>
                <CardShared animal={animal} openDetail={openDetail} />
              </li>
            ))}

          {input && searchedAnimals.length < 1 && (
            <img src={notFound} alt="Not found" />
          )}
        </div>
      </div>
      <Details
        show={detail}
        onHide={() => closeModal(setOpenDetail)}
        add_like={addLike}
        current_animal={currentAnimal}
      />

      <PreferredShared
        preferred_animals={preferredAnimals}
        show={preferred}
        onHide={() => closeModal(setOpenPreferred)}
        remove_animal={removeAnimal}
      />

      <FooterShared />
    </div>
  );
}
