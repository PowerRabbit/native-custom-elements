import { MyCard } from "./my-card.component";

const setFirstHeadline = (headline: string) => {
    const cards = document.querySelectorAll<MyCard>('my-card');
    cards[0].headline = headline;
};

const toggleCardsClicked = (el: HTMLElement) => {
    const appCards = el.querySelectorAll<MyCard>('my-card');
    appCards.forEach(card => card.toggleClickedInfo());
}

const setButtonClickListener = () => {
    const appDiv = document.getElementById('myApp');
    if (appDiv) {
        const clickMe = appDiv.querySelector<HTMLButtonElement>('#clickMe');
        if (clickMe) {
            clickMe.addEventListener('click', () => {
                toggleCardsClicked(appDiv);
            });
        }

    } else {
        console.warn('Cannot find appDiv!');
    }
}

setFirstHeadline('Card 1');
setButtonClickListener();
