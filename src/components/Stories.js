const storiesInfo = [
    {
        image: "./images/icons/9gag 1.png",
        name: "9gag",
    },
    {
        image: "./images/icons/meowed 1.png",
        name: "meowed",
    },
    {
        image: "./images/icons/barked 1.png",
        name: "barked",
    },
    {
        image: "./images/icons/nathanwpylestrangeplanet 1.png",
        name: "nathanwpylestrangeplanet",
    },
    {
        image: "./images/icons/wawawiwacomicsa 1.png",
        name: "wawawiwacomicsa",
    },
    {
        image: "./images/icons/respondeai 1.png",
        name: "respondeai",
    },
    {
        image: "./images/icons/filomoderna 1.png",
        name: "filomoderna",
    },
    {
        image: "./images/icons/memeriagourmet 1.png",
        name: "memeriagourmet",
    },
]

function Storie(props) {
    return (
        <div class="storie-box">
            <div class="storie-img">
                <img class="background-img" src="./images/icons/stories_background.jpg"/>
                <img class="profile-img" src={props.image}/>
            </div>
            <p>{props.name}</p>
        </div>
    );
}

export default function Stories() {
    return (
        <div class="stories-container">

            {storiesInfo.map(storieInfo => <Storie image={storieInfo.image} name={storieInfo.name}/>)}

            <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
        </div>
    );
}