import { useState } from 'react';
import useSound from 'use-sound';
import music1 from './musics/relax1.mp3';
import music2 from './musics/relax2.mp3';
import music3 from './musics/relax3.mp3';
import { FaPlay, FaStop } from 'react-icons/fa';

function Player() {
    const [selectedMusic, setSelectedMusic] = useState(null);
    const [play, { stop }] = useSound(selectedMusic, {
        interrupt: true,
        volume: 0.5
    });
    const [isPlaying, setIsPlaying] = useState(false);

    function startMusic() {
        if (isPlaying) {
            setIsPlaying(false);
            stop();
        } else {
            // Select a random number from 1 to 3
            const randomNum = Math.floor(Math.random() * 3) + 1;
            // Use the corresponding music file based on the random number
            const selected = randomNum === 1 ? music1 : randomNum === 2 ? music2 : music3;
            setSelectedMusic(selected);
            play(selected);
            setIsPlaying(true);
        }
    }


    return (
        <>
            <button className={`player-button ${isPlaying ? 'player-button--stop' : ''}`} onClick={startMusic}>
                {isPlaying ? <FaStop size={24} color="red" /> : <FaPlay size={24} color="red" />}
            </button>
        </>
    );
}

export default Player;
