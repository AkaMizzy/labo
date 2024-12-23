import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import { initialEvenementR } from "../Evenement/evenementRecent";

export default function Evenementdash() {
    const [evenements, setEvenements] = useState(initialEvenementR);
    const [showForm, setShowForm] = useState(false);
    const [newEvenement, setNewEvenement] = useState({ id: '', titre: '', date: '', description: '', image: '', pdf: '', link: '' });
    const [isUpdating, setIsUpdating] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const evenementsPerPage = 5;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvenement({ ...newEvenement, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewEvenement({ ...newEvenement, image: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handlePdfChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewEvenement({ ...newEvenement, pdf: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = isUpdating ? 'PUT' : 'POST';
        const url = isUpdating ? `http://localhost:8000/evenements/${newEvenement.id}` : 'http://localhost:8000/evenements';
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvenement),
        });
        if (response.ok) {
            const updatedEvenement = await response.json();
            if (isUpdating) {
                setEvenements(evenements.map(eve => eve.id === updatedEvenement.id ? updatedEvenement : eve));
            } else {
                setEvenements([...evenements, updatedEvenement]);
            }
            setShowForm(false);
            setIsUpdating(false);
            setNewEvenement({ id: '', titre: '', date: '', description: '', image: '', pdf: '', link: '' });
        } else {
            console.error('Failed to save event');
        }
    };

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:8000/evenements/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            setEvenements(evenements.filter(eve => eve.id !== id));
        } else {
            console.error('Failed to delete event');
        }
    };

    const handleUpdate = (evenement) => {
        setNewEvenement(evenement);
        setShowForm(true);
        setIsUpdating(true);
    };

    const indexOfLastEvenement = currentPage * evenementsPerPage;
    const indexOfFirstEvenement = indexOfLastEvenement - evenementsPerPage;
    const currentEvenements = evenements.slice(indexOfFirstEvenement, indexOfLastEvenement);
    const totalPages = Math.ceil(evenements.length / evenementsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="d-flex mt-5">
            <Sidebar />
            <div className="evenements-table-container mt-5">
                <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
                    {showForm ? 'Cancel' : 'Add New Event'}
                </button>
                {showForm && (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="id"
                            placeholder="ID"
                            value={newEvenement.id}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                        />
                        <input
                            type="text"
                            name="titre"
                            placeholder="Title"
                            value={newEvenement.titre}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                        />
                        <input
                            type="text"
                            name="date"
                            placeholder="Date"
                            value={newEvenement.date}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={newEvenement.description}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                        />
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                            className="form-control"
                        />
                        <input
                            type="file"
                            name="pdf"
                            accept="application/pdf"
                            onChange={handlePdfChange}
                            required
                            className="form-control"
                        />
                        <input
                            type="text"
                            name="link"
                            placeholder="Link"
                            value={newEvenement.link}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                        />
                        <button type="submit" className="btn btn-success mt-2">{isUpdating ? 'Update' : 'Submit'}</button>
                    </form>
                )}
                <table className="evenements-table table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>PDF</th>
                            <th>Link</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEvenements.map((evenement) => (
                            <tr key={evenement.id}>
                                <td>{evenement.id}</td>
                                <td>{evenement.titre}</td>
                                <td>{evenement.date}</td>
                                <td>{evenement.description}</td>
                                <td><img src={evenement.image} alt={evenement.titre} className="evenementdash-photo" /></td>
                                <td><a href={evenement.pdf} download>Télécharger PDF</a></td>
                                <td><a href={evenement.link}>Lire la suite</a></td>
                                <td>
                                    <button className="btn btn-info" onClick={() => handleUpdate(evenement)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(evenement.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="btn btn-secondary"
                    >
                        Précédent
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-light'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="btn btn-secondary"
                    >
                        Suivant
                    </button>
                </div>
            </div>
        </div>
    );
}