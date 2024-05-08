export function Search() {
    return(
        <form>
            <div className="input_search">
                <label for="query-input">
                    Gif query word
                </label>
                <input
                    type="text"
                    placeholder="Search..."
                />
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    )
}