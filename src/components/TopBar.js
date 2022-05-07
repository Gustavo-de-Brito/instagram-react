import SlideBar from "./SlideBar";

export default function TopBar() {
    return (
        <div class="top-bar">
            <div class="top-bar-content">
                <div>
                    <div class="logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div></div>
                        <img src="./images/logo.png" alt="logo-instagram" />
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="search">
                        <form action="">
                            <input type="text" placeholder="Pesquisar"/>
                        </form>
                    </div>
                    <div class="icons">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>

                <SlideBar />
            </div>
        </div>
    );
}