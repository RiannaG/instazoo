
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap"

export const CreateAnimal = ({ show, onHide }) => {
    const [dataForm, setDataForm] = useState({
        name: '',
        latinName: '',
        animalType: '',
        animalHabitat: '',
        animalDiet: '',
        animalGeoRange: '',
        animalImage: '',
    })

    const handleInput = (e) => {
        const { name, value } = e.target;

        setDataForm((dataForm) => {
            return {
                ...dataForm,
                [name]: value,
            }
        })
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="px-3 my-4">
                        <h6>Animal Name</h6>
                        <input name="name" type='text' value={dataForm.name} className="px-5" onChange={handleInput} />
                    </div>
                    <div className="px-3 my-4">
                        <h6>Animal Latin Name</h6>
                        <input name="latinName" type='text' value={dataForm.latinName} className="px-5" onChange={handleInput} />
                    </div>
                    <div className="px-3 my-4">
                        <h6>Animal Type</h6>
                        <input name="animalType" value={dataForm.animalType} className="px-5" onChange={handleInput} />
                    </div>
                    <div className="px-3 my-4">
                        <h6>Animal Habitat</h6>
                        <input name="animalHabitat" value={dataForm.animalHabitat} className="px-5" onChange={handleInput} />
                    </div>
                    <div className="px-3 my-4">
                        <h6>Animal Diet</h6>
                        <input name="animalDiet" value={dataForm.animalDiet} className="px-5" onChange={handleInput} />
                    </div>
                    <div className="px-3 my-4">
                        <h6>Animal Geo Range</h6>
                        <input name="animalGeoRange" value={dataForm.animalGeoRange} className="px-5" onChange={handleInput} />
                    </div>
                    <div className="px-3 my-4">
                        <h6>Animal Image</h6>
                        <input name="animalImage" value={dataForm.animalImage} className="px-5" onChange={handleInput} />
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button variant="primary" onClick={onHide}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
    )
}