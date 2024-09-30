import { useNavigate } from "react-router-dom"
import './Map.css'
import Level from "../Level"
import { useEffect } from "react"

export default function Map () {

    // useEffect(() => {
    //     // if (localStorage.getItem("playerLevel"))
    //     localStorage.setItem("playerLevel", 1)
    // }, [])

    const levels = [
        {
            image: '/Level-one.jpeg',
            // isBlocked: false
        },
        {
            image: '/Level-two.jpeg',
            // isBlocked: false
        },
        {
            image: '/Level-three.jpeg',
            // isBlocked: true
        },
        {
            image: '/Level-four.jpeg',
            // isBlocked: true
        },
        {
            image: '/Level-five.jpeg',
            // isBlocked: true
        },
    ]

    return (
        <div className="map-container">
            <div className="levelHolder">
                {
                levels.map((level, index) => (
                    <Level 
                        image={level.image} 
                        level={index+1} 
                        key={index+1}
                        // isBlocked={level.isBlocked}
                    />
                ))
            }
            
            </div>
        </div>
    )
}
