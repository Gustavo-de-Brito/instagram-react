const suggestionsInfo = [
    {
        image: "./images/icons/badvibesmemes 1.png",
        name: "bad.vibes.memes",
    },
    {
        image: "./images/icons/chibirdart 1.png",
        name: "chibirdart",
    },
    {
        image: "./images/icons/razoesparaacreditar 1.png",
        name: "razoesparaacreditar",
    },
    {
        image: "./images/icons/adorableanimals 1.png",
        name: "adorable_animals",
    },
    {
        image: "./images/icons/smallcutecats 1.png",
        name: "smallcutecats",
    },
];

function Profile() {
    return (
        <div class="profile">
            <img src="./images/icons/catanacomics 1.png" alt=""/>
            <div>
                <p>catanacomics</p>
                <p>Catana</p>
            </div>
        </div>
    );
}

function Suggestion(props) {
    return (
        <div class="suggestion">
            <div>
                <img src={props.image} />
                <div>
                    <p>{props.name}</p>
                    <p>Segue você</p>
                </div>
            </div>
            <button>Seguir</button>
        </div>
    );
}

function Suggestions() {
    return (
        <div class="suggestions">
            <div>
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>

            {suggestionsInfo.map(suggestion => <Suggestion image={suggestion.image} name={suggestion.name}/>)}

        </div>
    );
}

export default function SlideBar() {
    return (
        <div class="slidebar">
            <Profile />
            <Suggestions />
            <div class="site-info">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}