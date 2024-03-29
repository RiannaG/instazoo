import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import habitats from '../assets/habitats.json';
import editImg from '../assets/icon-edit.svg';

export function Edit({ show, onHide, currentAnimal, token }) {
  const [reqStatus, setReqStatus] = useState();
  const [file, setFile] = useState();

  const [fileName, setFileName] = useState('');
  const [input, setInput] = useState({
    name: '',
    latin_name: '',
    animal_type: '',
    habitat_id: '',
    diet: '',
    geo_range: '',
    image_link: '',
  });

  function handleInputChange(event) {
    const { name, type, value } = event.target;

    setInput((input) => {
      return {
        ...input,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    setInput({
      name: currentAnimal?.name,
      latin_name: currentAnimal?.latin_name,
      animal_type: currentAnimal?.animal_type,
      habitat_id: currentAnimal?.habitat_id,
      diet: currentAnimal?.diet,
      geo_range: currentAnimal?.geo_range,
      image_link: currentAnimal?.image_link,
    });
  }, [currentAnimal]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    // const { image } = input;

    setInput((input) => {
      return {
        ...input,
        image_link: event.target.files[0].name,
      };
    });
  };

  useEffect(() => {
    const number = parseInt(input.habitat_id);
    input.habitat_id = number;
    console.log(input.habitat_id);
  }, [input.habitat_id]);

  // useEffect(() => {
  //   setInput((input.image_link = file.name));
  // }, [file]);

  function checkData() {
    if (fileName) {
      // console.log(input);
      uploadPhoto();
    }
    console.log(input);
    editData();
    // console.log(event.target.files[0]);
  }

  function editData() {
    console.log(input);
    // const pluto = JSON.stringify(input);
    fetch(`http://localhost:3000/animals/${currentAnimal?.id}`, {
      // method: 'PATCH',
      // headers: {
      //   // boundary: 'name',
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      //   Authorization: token,
      // },
      method: 'PATCH', // or 'PUT'
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => setReqStatus(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function uploadPhoto(event) {
    // event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    fetch(`http://localhost:3000/animals/image/${currentAnimal?.id}`, {
      method: 'PATCH',
      headers: {
        'Access-Control-Allow-Origin': '*',
        // boundary: 'name',
        // 'content-type': 'multipart/form-data',
        Authorization: token,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setReqStatus(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <img className='edit-icon' src={editImg} />
        <Modal.Title className='fredoka edit-title'>Edit Animal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='fredoka'>
          <div className='px-3 my-4'>
            <label className='edit-label' for='animal-name'>
              Animal Name :
            </label>
            <input
              className='edit-input'
              id='animal-name'
              name='name'
              type='text'
              value={input.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='px-3 my-4'>
            <label className='edit-label' for='animal-latin'>
              Animal Latin Name :
            </label>
            <input
              className='edit-input'
              id='animal-latin'
              name='latin_name'
              type='text'
              value={input.latin_name}
              onChange={handleInputChange}
            />
          </div>
          <div className='px-3 my-4'>
            <label className='edit-label' for='animal-type'>
              Animal Type :
            </label>
            <input
              className='edit-input'
              id='animal-type'
              name='animal_type'
              value={input.animal_type}
              onChange={handleInputChange}
            />
          </div>
          <div className='px-3 my-4'>
            <label className='edit-label' for='animal-habitat'>
              Animal Habitat :
            </label>
            <select
              className='edit-input'
              id='animal-habitat'
              name='habitat_id'
              value={input.habitat_id}
              onChange={handleInputChange}>
              {habitats.map((habitat, index) => (
                <option key={index} value={index + 99}>
                  {habitat.name}
                </option>
              ))}
            </select>
          </div>
          <div className='px-3 my-4'>
            <label className='edit-label' for='animal-diet'>
              Animal Diet :
            </label>
            <input
              className='edit-input'
              id='animal-diet'
              name=''
              value={input.diet}
              onChange={handleInputChange}
            />
          </div>
          <div className='px-3 my-4'>
            <label className='edit-label' for='animal-range'>
              Animal Geo Range :
            </label>
            <input
              className='edit-input'
              id='animal-range'
              name='geo_range'
              value={input.geo_range}
              onChange={handleInputChange}
            />
          </div>
          <div className='vai'>
            <label className='edit-label' for='anim-img'>
              Animal Image :
            </label>

            <input
              id='anim-img'
              type='file'
              name='image'
              accept='image/*'
              onChange={
                handleFileChange
                //handleInputChange();
              }
            />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer className='edit-footer gradient-header'>
        <button
          className='fredoka rounded-pill submitBtn'
          variant='primary'
          onClick={checkData}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}
