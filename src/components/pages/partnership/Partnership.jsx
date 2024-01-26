import "./partnership.css"
import PartnershipPhoto from "./partnership.png"

export default function Partnership(){
    return(
        <section>
            <div className="partnership-container">
                <div className="partnership-paragraph">
                    <h1>EMPRESA PARCEIRA</h1>
                    <p>Conheça também a TEM Energia, nossa empresa parceira especializada.</p>
                    <a href="/">Visite o site da TEM Energia →</a>
                </div>

                <div>
                    <img src={PartnershipPhoto}></img>
                </div>
            </div>
        </section>
    )
}