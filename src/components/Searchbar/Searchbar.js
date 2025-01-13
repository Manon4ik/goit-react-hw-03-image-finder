//import PropTypes from 'prop-types';
export default function Searchbar({ handleSubmitForm }) {
    return (
        <header class="searchbar Searchbar">
            <form class="form SearchForm" onSubmit={handleSubmitForm}>
                <button type="submit" class="button SearchForm-button">
                    <span class="button-label SearchForm-button-label">Search</span>
                </button>

                <input
                    name="search"
                    class="input SearchForm-input"
                    type="text"
                    //autocomplete="off"
                    //autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}