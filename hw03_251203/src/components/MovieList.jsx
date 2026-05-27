// components/MovieList.jsx
function MovieList({ movies }) {
    if (!movies || movies.length === 0) return <p>영화 정보가 없습니다.</p>;

    return (
        <div className="movie-list">
            <table border="1">
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>감독</th>
                        <th>장르</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, idx) => (
                        <tr key={idx}>
                            <td>{movie.title}</td>
                            <td>{movie.supervisor}</td>
                            <td>{movie.genre || "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MovieList;