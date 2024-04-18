import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBook = () => {
    const [form, setForm] = useState({})
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();    
        axios
          .post('/',form)
          .then((res) => {
            navigate("/")
          });
      };

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link
                            to='/'
                            className='btn btn-info float-left'
                        >
                            Show Book List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">Create new book</p>
                        <form novalidate="" onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Title of the Book"
                                name="title"
                                className="form-control"
                                value={form.title}
                                onChange={(e) => setForm({...form, title: e.target.value})}
                                spellcheck="false"
                                data-ms-editor="true"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Author"
                                name="author"
                                className="form-control"
                                value={form.author}
                                onChange={(e) => setForm({...form, author: e.target.value})}
                                spellcheck="false"
                                data-ms-editor="true"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Describe this book"
                                name="description"
                                className="form-control"
                                value={form.description}
                                onChange={(e) => setForm({...form, description: e.target.value})}
                                spellcheck="false"
                                data-ms-editor="true"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Pages"
                                name="pages"
                                className="form-control"
                                value={form.pages}
                                onChange={(e) => setForm({...form, pages: e.target.value})}
                                spellcheck="false"
                                data-ms-editor="true"
                                />
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default CreateBook;