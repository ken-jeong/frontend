// components/Home.jsx
function Home() {
    const myImagePath = `${import.meta.env.BASE_URL}images/ce.jpg`; 
    
    return (
        <div className="section home">
            <h2>안녕하세요!</h2>
            <p>저는 컴퓨터공학을 전공하는 <b>John Doe</b>입니다.</p>
            
            <img src={myImagePath} width="640" height="360" alt="컴퓨터공학" style={{maxWidth: '100%', height: 'auto'}} />
            
            <p>저는 <b>컴퓨터공학</b>을 현실 세계의 문제를 계산 가능한 모델로 표현하고, 효율적인 해결 방법을 설계/구현하는 학문이라고 생각합니다.</p>
        </div>
    );
}

export default Home;
