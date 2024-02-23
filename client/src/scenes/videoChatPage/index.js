import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function VideoChat() {
    const [roomId, setRoomId] = useState('');
    const navigate = useNavigate();
    const handleJoin = () => { 
        navigate(`/videochat/${roomId}`)
    };



    return (
        <div>
            <input type='text' placeholder='Enter Room Id' value={roomId}
                onChange={(e) => setRoomId(e.target.value)} />
            <button onClick={handleJoin}>Join</button>
        </div>
    );
}

export default VideoChat