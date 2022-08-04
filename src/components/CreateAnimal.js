import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import habitats from '../assets/habitats.json';
import addImg from '../assets/icon-add.svg';

export const CreateAnimal = ({ show, onHide, token }) => {
  const [reqStatus, setReqStatus] = useState();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const [dataForm, setDataForm] = useState({
    name: '',
    latin_name: '',
    animal_type: '',
    habitat_id: 0,
    diet: '',
    geo_range: '',
    image_link: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setDataForm((dataForm) => {
      return {
        ...dataForm,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const number = parseInt(dataForm.habitat_id);
    dataForm.habitat_id = number;
  }, [dataForm.habitat_id]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    // const { image } = input;

    setDataForm((input) => {
      return {
        ...input,
        image_link: event.target.files[0].name,
      };
    });
  };

  function checkData() {
    uploadPhoto();
    createAnimal();
    // console.log(event.target.files[0]);
  }

  function createAnimal() {
    fetch(`http://localhost:3000/animals`, {
      // method: 'PATCH',
      // headers: {
      //   // boundary: 'name',
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      //   Authorization: token,
      // },
      method: 'POST', // or 'PUT'
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm),
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
    console.log(file);

    fetch(`http://localhost:3000/animals/image`, {
      method: 'POST',
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
        <img className='edit-icon' src={addImg} />
        <Modal.Title>Add a New Animal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className='px-3 my-4'>
            <label className='edit-label' for='name'>
              Animal Name :
            </label>
            <input
              id='animal-name'
              name='name'
              type='text'
              value={dataForm.name}
              className='edit-input'
              onChange={handleInput}
            />
          </div>
          <div className='px-3 my-4'>
            <label className='edit-label' for='latin-name'>
              Animal Latin Name :
            </label>
            <input
              id='latin-name'
              name='latin_name'
              type='text'
              value={dataForm.latin_name}
              className='edit-input'
              onChange={handleInput}
            />
          </div>
          <div className='px-3 my-4'>
            <label className='edit-label' for='animal-type'>
              Animal Type :
            </label>
            <input
              id='animal-type'
              name='animal_type'
              value={dataForm.animal_type}
              className='edit-input'
              onChange={handleInput}
            />
          </div>
          <div className='px-3 my-4'>
            <label className='edit-label' for='animal-habitat'>
              Animal Habitat :
            </label>
            <select
              id='animal-habitat'
              name='habitat_id'
              value={dataForm.habitat_id}
              className='edit-input'
              onChange={handleInput}>
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
              id='animal-diet'
              name='diet'
              value={dataForm.diet}
              className='edit-input'
              onChange={handleInput}
            />
          </div>
          <div className='px-3 my-4'>
            <label className='edit-label' for='animal-geo'>
              Animal Geo Range :
            </label>
            <input
              id='animal-geo'
              name='geo_range'
              value={dataForm.geo_range}
              className='edit-input'
              onChange={handleInput}
            />
          </div>
          <div className='my-4'>
            <label className='edit-label px-2' for='anim-img'>
              Animal Image :
            </label>

            <input
              id='anim-img'
              type='file'
              name='image'
              accept='image/*'
              //  value={dataForm.image_link}
              onChange={
                handleFileChange
                // handleInput();
              }
            />
          </div>
        </Form>
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
};
