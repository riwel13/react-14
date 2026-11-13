const API_KEY = "38856318-f5f33f554c3f8142940e8ba83"
export function fetchImages (searchValue, page = 1) {
    const url = `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    return fetch(url).then((res) => res.json()).then((res) => res.hits)
}