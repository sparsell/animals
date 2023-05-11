import { useState } from 'react';
import './AnimalShow.css';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
  bird, 
  cat, 
  cow, 
  dog, 
  gator, 
  horse,  
};

function AnimalShow( { type } ) {

    const [likes, setLikes] = useState(0);
    const [likeCount, setLikeCount] = useState(0);

    const handleAnimalClickCount = () => {
        setLikeCount(likeCount + 1);
    };

const handleAnimalClick = () => {
    setLikes(likes + 1);
    handleAnimalClickCount();
};

    return (
    <div className="animal-show" onClick={handleAnimalClick}>
        <img className="animal" alt="animal" src={svgMap[type]} style={{ width: 60 }} />
        <img className="heart"alt="heart" 
            src={heart}
            style={{ width: 10 + 10 * likes }}
            />
              {likeCount}
          
    </div>
    )
}

export default AnimalShow;