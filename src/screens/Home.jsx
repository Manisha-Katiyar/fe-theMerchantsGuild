import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home () {
    const navigate = useNavigate()

    useEffect(() => {
        // if (localStorage.getItem("playerLevel"))
        localStorage.setItem("playerLevel", 1)
        localStorage.setItem("health", 2)
    }, [])

    return (
        <div className="container">
            <div className="circular-image-container" onClick={() => navigate('/map')}>
                              <img src="public/new_start.webp" alt="Description" className="circular-image" />
            </div>
            <i className="fa-solid fa-angles-right"></i>
        </div>
    )
}
