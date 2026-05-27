// components/Digital.jsx
import Clock from "./Clock";
import Calculator from "./Calculator";

function Digital() {
    return (
        <div className="section">
            <h2>시계 컴포넌트</h2>
            <p>useState()와 useEffect()로 구현합니다.</p>
            <Clock />
            <h2>계산기 컴포넌트</h2>
            <Calculator />
        </div>
    );
}

export default Digital;