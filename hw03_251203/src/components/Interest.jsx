// components/Interest.jsx
function Interest() {
    return (
        <div className="section">
            <h2>AI, 인류의 마지막 발명품?</h2>
            <p>저는 인공지능과 철학적 문제에도 관심이 많습니다! 아래 소개 영상을 볼까요?</p>
            
            <iframe 
                src="https://www.youtube.com/embed/fa8k8IQ1_X0" 
                width="640" 
                height="360" 
                title="AI Video"
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <h2>Artificial Intelligence</h2>
            <p><b>인공지능</b>은 인간의 지능적 기능을 컴퓨터로 구현한 기술로, 아래는 그 AI 혁신의 주역들입니다.</p>
            <p><small>(클릭하면 영문 위키피디아가 새 창에서 열립니다!)</small></p>

            <div className="grid-container">
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Geoffrey_Hinton" target="_blank" rel="noreferrer">
                    Geoffrey Hinton
                    <p>The Godfather of AI</p>
                </a>
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Yann_LeCun" target="_blank" rel="noreferrer">
                    Yann LeCun
                    <p>Founder of CNN</p>
                </a>
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Yoshua_Bengio" target="_blank" rel="noreferrer">
                    Yoshua Bengio
                    <p>LM, GAN</p>
                </a>
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Fei-Fei_Li" target="_blank" rel="noreferrer">
                    Fei-Fei Li
                    <p>ImageNet Project</p>
                </a>
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Andrew_Ng" target="_blank" rel="noreferrer">
                    Andrew Ng
                    <p>Google Brain</p>
                </a>
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Demis_Hassabis" target="_blank" rel="noreferrer">
                    Demis Hassabis
                    <p>DeepMind CEO</p>
                </a>
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Jeff_Dean" target="_blank" rel="noreferrer">
                    Jeff Dean
                    <p>TensorFlow Leader</p>
                </a>
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Ilya_Sutskever" target="_blank" rel="noreferrer">
                    Ilya Sutskever
                    <p>ChatGPT Leader</p>
                </a>
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Sam_Altman" target="_blank" rel="noreferrer">
                    Sam Altman
                    <p>OpenAI CEO</p>
                </a>
                <a className="grid-item" href="https://en.wikipedia.org/wiki/Dario_Amodei" target="_blank" rel="noreferrer">
                    Dario Amodei
                    <p>Anthropic CEO</p>
                </a>
            </div>
        </div>
    );
}

export default Interest;