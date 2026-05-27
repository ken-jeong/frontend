// components/Ajax.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Analysis from "./Analysis";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Ajax() {
  // React Hooks - const [state, setState] = useState(초기값);
  const [scoreList, setScoreList] = useState([]);

  // React Hooks - useEffect(() => { ... }, []); // 최초 마운트 시 1회만 실행
  useEffect(() => {
    axios.get(`${API_BASE_URL}/frontend/task/score`)          // axios.get("URL")
      .then((res) => setScoreList(res.data))                  // .then((res) => console.log(res.data))
      .catch((err) => console.error(err));                    // .catch((err) => console.error(err));
  }, []);

  return (
    <div className="section">
      <h2>Ajax 컴포넌트</h2>
      <p>AXIOS를 통해 서버로부터 성적 정보를 받아 테이블로 표현합니다.</p>

      <h3>전체 학생 성적</h3>
      <table border="1" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#eee" }}>
            <th>이름</th>
            <th>Java</th>
            <th>JS</th>
            <th>Python</th>
            <th>C++</th>
            <th>React</th>
            <th>Solidity</th>
          </tr>
        </thead>
        <tbody>
          {scoreList.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.java}</td>
              <td>{s.js}</td>
              <td>{s.python}</td>
              <td>{s.cplus}</td>
              <td>{s.react}</td>
              <td>{s.solidity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Analysis scoreData={scoreList} />
    </div>
  );
}

export default Ajax;
