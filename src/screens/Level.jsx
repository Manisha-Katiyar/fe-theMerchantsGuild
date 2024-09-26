import { useNavigate } from "react-router-dom"

export default function Level (props) {
    const navigate = useNavigate()
    const {image, level, isBlocked} = props
    const playerLevel = localStorage.getItem("playerLevel")

    const handleClick = (event) => {
        if (playerLevel < level) {
            event.preventDefault(); // Prevent default behavior if blocked
            return;
        }
        navigate("/fight", {
            state: {level}
        }); // Navigate if not blocked
    };

    console.log({isBlocked})
    return (
        <button 
            className="level-img-container"
            disabled={playerLevel < level}  
            onClick={handleClick}
        >
            <div>
                <img 
                    src={image} 
                    alt="Description" 

                    className={!(playerLevel < level) ? 'level-images' : 'level-images level-images-disabled'}
                />
                <p>Level {level}</p>
            </div>
        </button>
    );
}
