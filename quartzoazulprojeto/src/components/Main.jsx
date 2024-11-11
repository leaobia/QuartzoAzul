import { useState, useEffect } from 'react';
import '../css/main.css';

import carrosselImg1 from '../img/carrossel.png';
import carrosselImg2 from '../img/carrossel2.png';
import carrosselImg3 from '../img/carrossel3.png';

const slides = [
  { img: carrosselImg1, alt: 'Slide 1' },
  { img: carrosselImg2, alt: 'Slide 2' },
  { img: carrosselImg3, alt: 'Slide 3' },
];

const Main = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const proximoSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  useEffect(() => {
    const intervalId = setInterval(proximoSlide, 3000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <main className="main">
      <div className="main__carousel">
        <img
          src={slides[slideIndex].img} 
          alt={slides[slideIndex].alt}
          className="main__carousel-image"
        />
      </div>

      <div className="main__about poly-regular" id="main__about">
        O gerenciador de eventos Quartzo Azul permite a criação, edição e organização de um evento. Com ferramentas como agendas, listas de convidados (onde você controla quem pode ou não participar do seu evento), organizador de tarefas e orçamentos, você consegue inovar e organizar seu próximo evento de maneira muito mais eficiente.
      </div>

      <section className="main__events">
        Eventos
      </section>
    </main>
  );
};

export default Main;