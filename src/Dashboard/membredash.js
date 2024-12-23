import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import { membersData } from "../Members/members"; 

export default function Membredash() {
    const [members, setMembers] = useState(membersData);
    const [showForm, setShowForm] = useState(false);
    const [newMember, setNewMember] = useState({ id: '', name: '', description: '', image: '' });
    const [isUpdating, setIsUpdating] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const membersPerPage = 5;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMember({ ...newMember, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewMember({ ...newMember, image: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const method = isUpdating ? 'PUT' : 'POST';
            const url = isUpdating ? `http://localhost:8000/members/${newMember.id}` : 'http://localhost:8000/members';
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMember),
            });
            if (response.ok) {
                const updatedMember = await response.json();
                if (isUpdating) {
                    setMembers(members.map(member => member.id === updatedMember.id ? updatedMember : member));
                } else {
                    setMembers([...members, updatedMember]);
                }
                setShowForm(false);
                setIsUpdating(false);
                setNewMember({ id: '', name: '', description: '', image: '' });
            } else {
                console.error('Failed to save member');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/members/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setMembers(members.filter(member => member.id !== id));
            } else {
                console.error('Failed to delete member');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleUpdate = (member) => {
        setNewMember(member);
        setShowForm(true);
        setIsUpdating(true);
    };

    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);
    const totalPages = Math.ceil(members.length / membersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="d-flex mt-5">
            <Sidebar />
            <div className="members-table-container mt-3">
                <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
                    {showForm ? 'Cancel' : 'Add New Member'}
                </button>
                {showForm && (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="id"
                            placeholder="ID"
                            value={newMember.id}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={newMember.name}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={newMember.description}
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
                        <button type="submit" className="btn btn-success mt-2">{isUpdating ? 'Update' : 'Submit'}</button>
                    </form>
                )}
                <table className="members-table table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentMembers.map((member) => (
                            <tr key={member.id}>
                                <td>{member.id}</td>
                                <td>{member.name}</td>
                                <td><img src={member.image} alt={member.name} className="memberdash-photo" /></td>
                                <td>{member.description}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => handleUpdate(member)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(member.id)}>Delete</button>
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
