// components/Culture.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Culture() {
    // React Hooks - const [state, setState] = useState(초기값);
    const [movies, setMovies] = useState([]);

    const fetchAllMovies = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/frontend/movie/list`);
            setMovies(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    // React Hooks - useEffect(() => { ... }, []); // 최초 마운트 시 1회만 실행
    useEffect(() => {
        fetchAllMovies();
    }, []);

    const handleSearch = async (type, keyword) => { // async
        if (!keyword) {
            fetchAllMovies();
            return;
        }

        let url = "";
        if (type === "title") {
            url = `${API_BASE_URL}/frontend/movie/title/${keyword}`;
        } else if (type === "supervisor") {
            url = `${API_BASE_URL}/frontend/movie/supervisor/${keyword}`;
        }

        try {
            const res = await axios.get(url); // await axios.get(url);
            if (Array.isArray(res.data)) {
                setMovies(res.data);
            } else {
                setMovies([res.data]);
            }
        } catch (err) {
            alert("검색 결과가 없습니다.");
            setMovies([]);
        }
    };

    return (
        <div className="section">
            <h2>영화 검색</h2>
            <MovieSearch onSearch={handleSearch} />
            <MovieList movies={movies} />
        </div>
    );
}

export default Culture;
