function Profile() {
    return (
        <div class="profile">
            <img src={require("../images/icons/catanacomics 1.png").default} alt=""/>
            <div>
                <p>catanacomics</p>
                <p>Catana</p>
            </div>
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
            <div class="suggestion">
                <div>
                    <img src={require("../images/icons/badvibesmemes 1.png").default}/>
                    <div>
                        <p>bad.vibes.memes</p>
                        <p>Segue você</p>
                    </div>
                </div>
                <button>Seguir</button>
            </div>
            <div class="suggestion">
                <div>
                    <img src={require("../images/icons/chibirdart 1.png").default}/>
                    <div>
                        <p>chibirdart</p>
                        <p>Segue você</p>
                    </div>
                </div>
                <button>Seguir</button>
            </div>
            <div class="suggestion">
                <div>
                    <img src={require("../images/icons/razoesparaacreditar 1.png").default}/>
                    <div>
                        <p>razoesparaacreditar</p>
                        <p>Segue você</p>
                    </div>
                </div>
                <button>Seguir</button>
            </div>
            <div class="suggestion">
                <div>
                    <img src={require("../images/icons/adorableanimals 1.png").default}/>
                    <div>
                        <p>adorable_animals</p>
                        <p>Segue você</p>
                    </div>
                </div>
                <button>Seguir</button>
            </div>
            <div class="suggestion">
                <div>
                    <img src={require("../images/icons/smallcutecats 1.png").default}/>
                    <div>
                        <p>smallcutecats</p>
                        <p>Segue você</p>
                    </div>
                </div>
                <button>Seguir</button>
            </div>
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