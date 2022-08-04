import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import habitats from '../assets/habitats.json';

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
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className='px-3 my-4'>
            <h6>Animal Name</h6>
            <input
              name='name'
              type='text'
              value={input.name}
              className='px-3'
              onChange={handleInputChange}
            />
          </div>
          <div className='px-3 my-4'>
            <h6>Animal Latin Name</h6>
            <input
              name='latin_name'
              type='text'
              value={input.latin_name}
              className='px-3'
              onChange={handleInputChange}
            />
          </div>
          <div className='px-3 my-4'>
            <h6>Animal Type</h6>
            <input
              name='animal_type'
              value={input.animal_type}
              className='px-3'
              onChange={handleInputChange}
            />
          </div>
          <div className='px-3 my-4'>
            <h6>Animal Habitat</h6>

            <select
              name='habitat_id'
              value={input.habitat_id}
              className='px-3'
              onChange={handleInputChange}>
              {habitats.map((habitat, index) => (
                <option key={index} value={index + 99}>
                  {habitat.name}
                </option>
              ))}
            </select>
          </div>
          <div className='px-3 my-4'>
            <h6>Animal Diet</h6>
            <input
              name='diet'
              value={input.diet}
              className='px-3'
              onChange={handleInputChange}
            />
          </div>
          <div className='px-3 my-4'>
            <h6>Animal Geo Range</h6>
            <input
              name='geo_range'
              value={input.geo_range}
              className='px-3'
              onChange={handleInputChange}
            />
          </div>
          <div className='px-3 my-4'>
            <h6>Animal Image</h6>

            <input
              type='file'
              name='image'
              className='px-3'
              onChange={
                handleFileChange
                //handleInputChange();
              }
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button variant='primary' onClick={checkData}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}
