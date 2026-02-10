import React from "react";
function StateDemo() {
    const [videoName, setvideoName] = React.useState("react js");
    const[videoLikes, setvideoLikes] = React.useState(96);

    return(
        <>
        <center>
            <h1>My Page</h1>
            <h3>video Name : {videoName} </h3>
            <h3>Likes : {videoLikes}</h3>
            <button onClick={() => {setvideoLikes(videoLikes + 1)}}>Like Video</button>
            <button onClick={() => {setvideoLikes(videoLikes - 1)}}>Dislike Video</button>
    {
                videoLikes >= 100 && <h2>Wow!! This video is getting popular</h2>
            }
            <p>This video are liking</p>
            
            {/*
                videoLikes <= 100 ?
                <p>people are liking this !! </p>
                :<p>people are loving this !!</p>
           */ }

        </center>


        </>
    )
}
export default StateDemo;