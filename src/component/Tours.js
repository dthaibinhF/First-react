import {Title} from "./Title";
import {tours} from "../data";
import Tour from "./Tour";

export const Tours = () => {
    return <section className="section" id="tours">
        <Title title='featured' subTitle='tours'/>

        <div className="section-center featured-center">
            {
                tours.map((tour) => {
                    return <Tour item={tour.id} {...tour} />
                })
            }
        </div>
    </section>
}