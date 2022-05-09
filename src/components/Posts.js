import React from "react";

const postsInfo = [
    {   
        profile:{
            img: "./images/icons/meowed 1.png",
            name: "meowed",
        },
        media: {
            type: "image",
            src: "./images/gato-telefone 1.png"
        },
        likedData: {
            mainImg: "./images/icons/respondeai 1.png",
            mainProfile: "respondeai",
            qtdProfiles: 101.523,
        },
        comments: [
            {
                profileName: "sorayateamo",
                text: "what a strange dog"
            },
            {
                profileName: "idontunderstandjokes",
                text: "but its a cat"
            },
            {
                profileName: "withoutcreativity",
                text: "what a strange dog"
            },
        ],
        userProfileImg: "./images/icons/catanacomics 1.png",
    },
    {
        profile:{
            img: "./images/icons/barked 1.png",
            name: "barked",
        },
        media: {
            type: "image",
            src: "./images/dog 1.png"
        },
        likedData: {
            mainImg: "./images/icons/adorableanimals 1.png",
            mainProfile: "adorable_animals",
            qtdProfiles: 99.159,
        },
        comments: [
            {
                profileName: "sorayateamo",
                text: "what a strange cat"
            },
            {
                profileName: "idontunderstandjokes",
                text: "but its a dog"
            },
            {
                profileName: "withoutcreativity",
                text: "what a strange cat"
            },
        ],
        userProfileImg: "./images/icons/catanacomics 1.png",
    },
    {
        profile:{
            img: "./images/icons/soraya-te-amo.jpg",
            name: "sorayateamo",
        },
        media: {
            type: "video",
            src: "./video/video.mp4"
        },
        likedData: {
            mainImg: "./images/icons/respondeai 1.png",
            mainProfile: "respondeai",
            qtdProfiles: 101.523,
        },
        comments: [
            {
                profileName: "sorayateamo",
                text: "what a strange platypus"
            },
            {
                profileName: "idontunderstandjokes",
                text: "but its a bear"
            },
            {
                profileName: "withoutcreativity",
                text: "what a strange platypus"
            },
        ],
    },
];



const userImg = "./images/icons/catanacomics 1.png";


function Comment(props) {
    const [likeIcon, setLikeIcon] = React.useState("heart-outline");
    const [color, setColor] = React.useState("#262626");

    function likeUnlike() {
        if(likeIcon === "heart-outline") {
            setLikeIcon("heart");
            setColor("red");
        } else {
            setLikeIcon("heart-outline");
            setColor("#262626");
        }
    }
    
    return (
        <div class="comment">
        <p>
            <span>{props.profileName}</span> {props.comment}
        </p>
        <ion-icon onClick={likeUnlike} style={{color: color}} name={likeIcon}></ion-icon>

    </div>
    );
}

function Post(props) {
    let postMedia;
    
    if(props.media.type === "image") {
        postMedia = <img src={props.media.src}/>
    } else {
        postMedia = (
            <video controls autoplay muted>
                <source src={props.media.src} type="video/mp4"/>
            </video>
        )
    }

    const [likeIcon, setLikeIcon] = React.useState("heart-outline");
    const [color, setColor] = React.useState("#262626");
    
    function likeUnlike() {
        if(likeIcon === "heart-outline") {
            setLikeIcon("heart");
            setColor("red");
        } else {
            setLikeIcon("heart-outline");
            setColor("#262626");
        }
    }

    return (
        <div class="post">
            <div class="top-post">
                <div class="profile-info">
                        <img src={props.profile.img}/>
                    <p>{props.profile.name}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            {postMedia}

            <div class="actions-bar">
                <div class="left-side">
                    <ion-icon onClick={likeUnlike} style={{color: color}} name={likeIcon}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="right-side">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class="liked-info">
                <img src={props.likedData.mainImg}/>
                <p>Curtido por <span>{props.likedData.mainProfile}</span> e <span>outras {props.likedData.qtdProfiles} pessoas</span></p>
            </div>

            <div class="comments">

                {props.comments.map(comment => <Comment profileName={comment.profileName} comment={comment.text} />)}

            </div>

            <div class="comment-bar">
                <div>
                    <img src={props.userProfileImg}/>
                    <form action="">
                        <input type="text" placeholder="Adicione um comentário..."/>
                    </form>
                </div>
                <button>Publicar</button>
            </div>
        </div>
    )
}

export default function Posts() {
    const postsJsx = [];

    for(const postInfo of postsInfo) {
        postsJsx.push(
            <Post 
            profile={postInfo.profile}
            media={postInfo.media}
            likedData={postInfo.likedData}
            comments={postInfo.comments}
            userProfileImg={userImg}/>
        );
    }

    return (
        <div class="posts">

            {postsJsx}

        </div>
    );
}