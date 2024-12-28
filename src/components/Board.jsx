import BoardCell from "./BoardCell"; 
import { useState } from "react";

export default function Board () {
    const [userState, setUserState] = useState([,"","","","","","","","",""]);

    let winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return (
        <div className="w-[800px] h-[600px] border-solid border-2 border-sky-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-3 ">
           {
           userState.map((element) => {
             return (
              <BoardCell />
             )
             //need to use ternary operator here somewhere from lesson with josh
             //figure out why map arrow is givng a red underline error
           })
        }       
        </div>
    )
}