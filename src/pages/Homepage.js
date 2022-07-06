import { FooterShared } from "../components/FooterShared";
import { HeaderShared } from "../components/HeaderShared";
import { CardShared } from "../components/CardShared";
import { useState } from "react";
import { useEffect } from "react";
import { Details } from "../components/Details";
import notFound from "../assets/not-found.svg";
import PreferredShared from "../components/PreferredShared";
import { CreateAnimal } from "../components/CreateAnimal";

export function Homepage() {
  const URL = "https://zoo-animal-api.herokuapp.com/animals/rand/8";
  const [animals, setAnimals] = useState([]);
  const [detail, setOpenDetail] = useState(false);
  const [preferred, setOpenPreferred] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState();
  const [preferredAnimals, setPreferredAnimals] = useState([]);
  const [searchedAnimals, setSearchedAnimals] = useState([]);
  const [input, setInput] = useState();
  const [filterSelection, setFilterSelection] = useState("name");
  const [newAnimal, setNewAnimal] = useState(false);

  // **** GET DATA AND HAD LIKE KEY ****
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setAnimals(data));
  }, []);

  useEffect(() => {
    animals.map((animal) => (animal.liked = false));
  }, [animals]);

  // **** FUNCTIONS TO OPEN/CLOSE MODALS ****
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

  // **** ADD AND REMOVE LIKE ****
  const addLike = (currentAnimal) => {
    setPreferredAnimals([...preferredAnimals, currentAnimal]);
    currentAnimal.liked = true;
  };

  const removeAnimal = (currentAnimal) => {
    const removedPreferred = preferredAnimals.filter(
      (animal) => animal.id !== currentAnimal.id
    );
    currentAnimal.liked = false;
    //function waits the ending of the deleting animation before removing item actually
    setTimeout(() => setPreferredAnimals(removedPreferred), 300);
  };

  const handleToggle = (currentAnimal) => {
    if (currentAnimal.liked) {
      removeAnimal(currentAnimal);
    } else {
      addLike(currentAnimal);
    }
  };

  // **** SEARCH-BAR FUNCTIONS ****
  const handleInput = (event) => {
    //handle user input
    setInput(event.target.value);
  };

  const handleSelection = (event) => {
    //handle radio button
    setFilterSelection(event.target.value);
  };

  useEffect(() => {
    //for every change in 'input' or 'selection' filter array
    const matched = animals.filter((animal) =>
      filterSelection === "name"
        ? animal.name.toLowerCase().includes(input)
        : animal.geo_range.toLowerCase().includes(input)
    );
    setSearchedAnimals(matched);
  }, [input, animals, filterSelection]);

  // **** CREATE ANIMAL **** 
  const openCreateAnimal = () => {
    setNewAnimal(true);
  }


  return (
    <div>
      <div className={"fredoka"}>
        {/*
       **** HEADER SECTION ****
       */}
        <HeaderShared
          openPreferred={openPreferred}
          preferredAnimals={preferredAnimals}
        />

        {/*
       **** MAIN SECTION ****
       */}
        <div className="h-100 background-home padding-bottom">
          {/* FEED AND SEARCH-BAR */}
          <div className="d-flex justify-content-between bg-feed shadow">
            <div className="d-flex bg-feed">
              <h1 className="py-3 px-4 font-color">Feed</h1>
              <div className="d-flex gap-4 align-items-center">
                <input
                  className="rounded-pill py-2 ps-4 pe-5 border-0 search-bar fs-5"
                  placeholder="Search animals"
                  onChange={handleInput}
                />

                {/* RADIO BUTTONS DIV */}
                <div className="d-flex gap-2 fs-5" onChange={handleSelection}>
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
            <button className="rounded border-0" onClick={openCreateAnimal}>create animal</button>
          </div>

          {/* CARDS CONTAINER */}
          <div className="d-flex max-width gap-4 m-auto justify-content-evenly align-items-around flex-wrap pt-5">
            {/* if search-bar is empty*/}
            {!input &&
              animals.map((animal) => (
                <li key={animal.id}>
                  <CardShared animal={animal} openDetail={openDetail} />
                </li>
              ))}

            {/* if search-bar has some content and at least one element is matched*/}
            {input &&
              searchedAnimals.map((animal) => (
                <li key={animal.id}>
                  <CardShared animal={animal} openDetail={openDetail} />
                </li>
              ))}

            {/* if search-bar has some content but nothing matching it */}
            {input && searchedAnimals.length < 1 && (
              <img src={notFound} alt="Not found" />
            )}
          </div>
        </div>

        {/*   DETAIL MODAL */}
        <Details
          show={detail}
          onHide={() => closeModal(setOpenDetail)}
          handleToggle={handleToggle}
          currentAnimal={currentAnimal}
        />

        {/* PREFERREDS MODAL */}
        <PreferredShared
          preferredAnimals={preferredAnimals}
          show={preferred}
          onHide={() => closeModal(setOpenPreferred)}
          remove_animal={removeAnimal}
        />
        {/** CREATE MODAL */}
        <CreateAnimal show={newAnimal} onHide={() => closeModal(setNewAnimal)} />
        {/*
       **** FOOTER SECTION ****
       */}
        <FooterShared />
      </div>
    </div>
  );
}
