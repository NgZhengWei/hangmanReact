import img0 from '../media/0.jpeg';
import img1 from '../media/1.jpeg';
import img2 from '../media/2.jpeg';
import img3 from '../media/3.jpeg';
import img4 from '../media/4.jpeg';
import img5 from '../media/5.jpeg';
import img6 from '../media/6.jpeg';
import img7 from '../media/7.jpeg';
import img8 from '../media/8.jpeg';

const Person = (props) => {
  const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className='person'>
      <img src={images[props.error]} alt='hangman' />
    </div>
  );
};

export default Person;
