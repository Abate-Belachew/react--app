import React, { useState } from 'react';


const Columntwo = () => {
    const [addPlayer, setAddPlayer] = useState({
        name: ''
    }); 
    const handleAddPlayerChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newName ={...addPlayer};
        newName[fieldName] = fieldValue;
        setAddPlayer(newName);
    }
   /*  const [nameList, stateName] = useState({
        name:'',
        deleteBtn: 'Delete'
    }); */

    const handleAddPLayerSubmit = (event) => {
        event.preventDefault();

        const newPlayer = {
            name: addPlayer.name
        };

        const newPlayers = [...playerList, newPlayer];
        setList(newPlayers);

    };

    const [playerList, setList] = useState([]);

    const handleDeleteClick = (playerId) => {
        const newPlayers = [...playerList];

        const index = playerList.findIndex((player) => player.name === playerId);

        newPlayers.splice(index, 1);

        setList(newPlayers);

    }


    return (  
        <div className="columnTwo">
                <form onSubmit={handleAddPLayerSubmit}> 
                    <div className="inputPlayer"> 
                        <input id="addPlayer" type="text" name="name" placeholder="add player" 
                        onChange={handleAddPlayerChange}/>
                    </div>
                    <button id ="add" type="submit"> Add Player </button>
                </form>
               
                <table> 
                    <tbody> 
                        {playerList.map((players)=> (
                        <tr>
                            <td>{ players.name }</td>
                            <td><button type='button' onClick={ handleDeleteClick } style={{
                                border: "none",
                                backgroundColor: "white",
                                color: "red"
                            }}>Delete</button></td> 
                        </tr>))}  
                    </tbody>
                </table> 
            </div>
    );
}
 
export default Columntwo;