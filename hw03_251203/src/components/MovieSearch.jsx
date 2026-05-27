// components/MovieSearch.jsx
import { useState } from "react";

function MovieSearch({ onSearch }) {
    // React Hooks - const [state, setState] = useState(초기값);
    const [type, setType] = useState("title");
    const [keyword, setKeyword] = useState("");

    const onClickSearch = () => {
        onSearch(type, keyword);
    };

    return (
        <div className="search-box">
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="title">영화 제목</option>
                <option value="supervisor">영화 감독</option>
            </select>
            <input 
                type="text" 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)} 
                placeholder="검색어 입력"
            />
            <button onClick={onClickSearch}>검색</button>
        </div>
    );
}

export default MovieSearch;