// components/Analysis.jsx
import React from "react";

function Analysis({ scoreData }) {
  if (!scoreData || scoreData.length === 0) return null;

  const subjects = ["java", "js", "python", "cplus", "react", "solidity"];

  const sortedData = [...scoreData]
    .map(s => {
      const total = s.java + s.js + s.python + s.cplus + s.react + s.solidity;
      const average = total / subjects.length;
      
      return {
        ...s,
        total: total,
        average: average
      };
    })
    .sort((a, b) => b.total - a.total);

  const count = Math.floor(sortedData.length * 0.3);

  const top30 = sortedData.slice(0, count);
  const bottom30 = sortedData.slice(sortedData.length - count);

  const renderTable = (title, data) => (
    <div style={{ marginTop: "20px" }}>
      <h3>{title}</h3>
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
            <th>총점</th>
            <th>평균</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.java}</td>
              <td>{s.js}</td>
              <td>{s.python}</td>
              <td>{s.cplus}</td>
              <td>{s.react}</td>
              <td>{s.solidity}</td>
              <td>{s.total}</td>
              <td>{s.average.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <h2>Analysis 컴포넌트</h2>
      <p>Ajax 컴포넌트로부터 받은 데이터를 분석하여 표현합니다.</p>

      {renderTable("상위 30% 학생", top30)}

      {renderTable("하위 30% 학생", bottom30)}

      <div style={{ marginTop: "20px" }}>
        <h3>과목별 평균 점수</h3>
        <table border="1" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#eee" }}>
              {subjects.map(sub => <th key={sub}>{sub.toUpperCase()}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              {subjects.map(sub => {
                const avg = scoreData.reduce((acc, cur) => acc + cur[sub], 0) / scoreData.length;
                return <td key={sub}>{avg.toFixed(2)}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Analysis;