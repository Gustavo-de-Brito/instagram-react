import SiteContent from "./SiteContent";
import TopBar from "./TopBar";

export default function App() {
    return (
        <div class="main-container">
            <TopBar />

            <SiteContent />

            <div class="bottom-bar">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}