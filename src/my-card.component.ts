export class MyCard extends HTMLElement {

    set headline(value: string) {
        this._headline = value;
    }
    get headline() {
        return this._headline;
    }

    private _headline = 'Default Headline';

    private myStyle = `
        <style>
            :host {
                display: inline-block;
                --myHeadlineColor: #000;
            }
            .wrapper {
                border: 1px solid #aaa;
                min-height: 10rem;
            }
            header {
                color: var(--myHeadlineColor);
            }
            header, main, .clickedInfo {
                padding: 0.5rem;
            }
            .clickedInfo {
                color: #f00;
                font-weight: 700;
            }
        </style>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    toggleClickedInfo() {
        const clickedInfo = this.shadowRoot?.querySelector('.clickedInfo');

        if (!clickedInfo) {
            return;
        }

        if (clickedInfo.hasAttribute('hidden')) {
            clickedInfo.removeAttribute('hidden');
        } else {
            clickedInfo.setAttribute('hidden', '');
        }
    }

    private render() {
        const template = document.createElement('template');
        template.innerHTML = `
            ${this.myStyle}
            <div class="wrapper">
                <header>
                    ${this.headline}
                </header>
                <main>
                    <slot name="main"></slot>
                </main>
                <div class="clickedInfo" hidden>
                    Button clicked
                </div>
            </div>
        `;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
            this.shadowRoot.appendChild(template.content);
        }
    }
}

customElements.define('my-card', MyCard);
