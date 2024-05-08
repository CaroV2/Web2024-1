import React, { useState } from 'react';
import "./Search.css"

export function Search() {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-search">
                <label htmlFor="query-input">
                    Gif query word
                </label>
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}
