import React, { useState } from 'react'

export const Weeb = ({manga, setManga}) => {
    
    const [title, setTitle] = useState("")
    const [score, setScore] = useState("")

    const addManga = () => {
        setManga([...manga, {title:title, score:score}]);
        setTitle("");
        setScore("");
    }
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleScore = (event) => {
        setScore(event.target.value);
    }
    const deleteManga = (key) => {
        setManga(manga.filter((value) => value.title !== key));
    }

  return (
    <div>
        <h2>Weeb List</h2>
        <div className="inputs">
            <label>  Title  </label>
            <input value = {title} onChange={handleTitle}></input>

            <label>  Score/10  </label>
            <input value = {score} onChange={handleScore}></input>

            <button className="add-button" onClick={addManga}>Add</button>
        </div>
        <h2 className="tab-title"> Manga List </h2>
        <div className="MangaList">
            {manga.length > 0 ? (
                <ul>
                    {manga.map((value) => 
                        <li className= "list-manga" key={value.title}>
                            <span className="list-title"> {value.title}</span>
                            <span className="list-score"> {value.score}</span>
                            <span className="delete-button" onclick={() => deleteManga(value.title)}>X</span>
                        </li>
                    )}
                </ul>
            ): (<div className="empty-list"> Empty! </div>)}
        </div>
    </div>
  );
};
