import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"

// export default function Level (props) {
//     const navigate = useNavigate()
//     const {image, level, isBlocked} = props
//     const playerLevel = localStorage.getItem("playerLevel")

//     const handleClick = (event) => {
//         if (playerLevel < level) {
//             event.preventDefault(); // Prevent default behavior if blocked
//             return;
//         }
//         navigate("/fight", {
//             state: {level}
//         }); // Navigate if not blocked
//     };

//     console.log({isBlocked})

    // return (
    //     <div 
    //         className="level-img-container"
    //         disabled={playerLevel < level}  
    //         onClick={handleClick}
    //     >
    //         <div>
    //             <img 
    //                 src={image} 
    //                 alt="Description" 

    //                 className={!(playerLevel < level) ? 'level-images' : 'level-images level-images-disabled'}
    //             />
    //             <Button variant="contained" color="success">Level {level}</Button>
    //         </div>
    //     </div>
    // );


    // return (


export default function Level(props) {
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

    <div  
            // className="level-img-container"
            className={!(playerLevel < level) ? 'level-images' : 'level-images level-images-disabled'}
            disabled={playerLevel < level}  
            onClick={handleClick}>
                 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          level {level}
        </Typography>
      </CardContent>
    </Card>

    </div>

   
  );
}
