export default function Posts() {
    return (
        <div class="posts">
            <div class="post">
                <div class="top-post">
                    <div class="profile-info">
                        <img src={require("../images/icons/meowed 1.png").default}/>
                        <p>meowed</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img src={require("../images/gato-telefone 1.png").default}/>
                <div class="actions-bar">
                    <div class="left-side">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="right-side">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="liked-info">
                    <img src={require("../images/icons/respondeai 1.png").default}/>
                    <p>Curtido por <span>respondeai</span> e <span>outras 101.523 pessoas</span></p>
                </div>

                <div class="comments">
                    <div class="comment">
                        <p>
                            <span>sorayateamo</span> what a strange dog
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>

                    </div>
                    <div class="comment">
                        <p>
                            <span>idontunderstandjokes</span> but its a cat
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>

                    </div>
                    <div class="comment">
                        <p>
                            <span>withoutcreativity</span> what a strange dog
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>

                <div class="comment-bar">
                    <div>
                        <img src={require("../images/icons/catanacomics 1.png").default}/>
                        <form action="">
                            <input type="text" placeholder="Adicione um comentário..."/>
                        </form>
                    </div>
                    <button>Publicar</button>
                </div>
            </div>

            <div class="post">
                <div class="top-post">
                    <div class="profile-info">
                        <img src="../images/icons/barked 1.png"/>
                        <p>barked</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img src={require("../images/dog 1.png").default}/>
                <div class="actions-bar">
                    <div class="left-side">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="right-side">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="liked-info">
                    <img src={require("../images/icons/adorableanimals 1.png").default}/>
                    <p>Curtido por <span>adorable_animals</span> e <span>outras 99.159 pessoas</span></p>
                </div>
                <div class="comments">
                    <div class="comment">
                        <p>
                            <span>sorayateamo</span> what a strange cat
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>

                    </div>
                    <div class="comment">
                        <p>
                            <span>idontunderstandjokes</span> but its a dog
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>

                    </div>
                    <div class="comment">
                        <p>
                            <span>withoutcreativity</span> what a strange cat
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>

                <div class="comment-bar">
                    <div>
                        <img src={require("../images/icons/catanacomics 1.png").default}/>
                        <form action="">
                            <input type="text" placeholder="Adicione um comentário..."/>
                        </form>
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
            <div class="post">
                <div class="top-post">
                    <div class="profile-info">
                        <img src={require("../images/icons/soraya-te-amo.jpg").default}/>
                        <p>sorayateamo</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <video controls autoplay muted>
                    <source src={require("../video/video.mp4").default} type="video/mp4"/>
                </video>
                <div class="actions-bar">
                    <div class="left-side">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="right-side">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="liked-info">
                    <img src={require("../images/icons/respondeai 1.png").default}/>
                    <p>Curtido por <span>respondeai</span> e <span>outras 101.523 pessoas</span></p>
                </div>
                <div class="comments">
                    <div class="comment">
                        <p>
                            <span>sorayateamo</span> what a strange platypus
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>

                    </div>
                    <div class="comment">
                        <p>
                            <span>idontunderstandjokes</span> but its a bear
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>

                    </div>
                    <div class="comment">
                        <p>
                            <span>withoutcreativity</span> what a strange platypus
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>

                <div class="comment-bar">
                    <div>
                        <img src={require("../images/icons/catanacomics 1.png").default}/>
                        <form action="">
                            <input type="text" placeholder="Adicione um comentário..."/>
                        </form>
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
        </div>
    );
}