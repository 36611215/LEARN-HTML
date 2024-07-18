

document.getElementById('job-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let searchInput = document.getElementById('search-input').value;
    
    let searchResults = document.getElementById('search-results');
    searchResults.innerHTML = `<p>Showing results for: ${searchInput}</p>`;
});
