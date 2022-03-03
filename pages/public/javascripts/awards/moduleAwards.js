export let Awards = {
    Awards: function(_id, _title, _image) {
        this.id = _id;
        this.title = _title;
        this.image = _image;
        return this;
    },


}

export function getAwards(url, heregjihFunctionNews) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            heregjihFunctionNews(data.awards);
        })
};

class MyAwards extends HTMLElement {
    constructor() {
        super();
        this.myShadowRoot = this.attachShadow({ mode: "open" });
        this.myShadowRoot.innerHTML = html`
        <style>
        @import url(https://fonts.googleapis.com/css?family=Space+Mono);
        @media all {

            .rule p{
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
            .trailer {
                display: inline-block;
                text-align: center;
                width: 250px;
                border: rgba(255, 255, 255, .2);
                border-style: solid;
                border-width: 3px;
                background-color: transparent;
                padding: 10px 30px;
                color: #fff;
                text-decoration: none;
                transition: all .3s ease-in-out
            }
            
            .trailer:focus,
            .trailer:hover {
                color: #fff;
                text-decoration: none;
                bottom: 41%;
                border: rgba(255, 0, 0, .4);
                border-style: solid;
                border-width: 3px
            }
            .aboutUs img{
                max-height: 1000px;
            }
            .aboutUs .pos {
                position: absolute;
                bottom: 40%;
                align-items: center;
                width: 100%;
                font-size: 100%
            }
            .rule {
                margin: 40px 0;
            }
            
            #parent {
                text-align: center;
                margin: 20px 0;
            }
            
            #parent.grid {
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                grid-gap: 40px;
            }
            
            #parent h2 {
                font-size: 30px;
            }
            
            .awards img {
                border: rgba(255, 255, 255, 1);
                border-style: solid;
                border-width: 1px;
                padding: 20px;
            }
            
            .award {
                margin-top: 20px;
            }
            }
            
            @media screen and (max-width:992px) {
                .rule h1,
                .OurInfo {
                    font-size: 25px;
                }
            }
            
            @media screen and (max-width:768px) {
                .trailer{
                    width: auto;
                    max-width: 150px;
                    font-size: 3vw;
                }
            }
            
            @media screen and (max-width:600px) {
                .award  {
                    font-size: 30px;
                }
            }
        </style>

        <div class="awards">
            <div><img src="${this.image}">
                <p class="award">${this.title}</p>
            </div>
        </div>`
    }

}

customElements.define("my-awards", MyA);