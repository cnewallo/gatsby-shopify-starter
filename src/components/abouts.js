import React from "react"

import "../styles/about.css"
import "../styles/grid.css"
import "../styles/normalize.css"
import portrait from "../images/header1.jpg"
import Button from "../utils/button"

const About = () => {
    return (
        <div>
            <section class="section-story" >
                <div class="row">
                    <h2>Our Story</h2>
                </div>
                <div class="row">
                    <div class="col span-1-of-2 box">
                        <img src={portrait} alt="RASTA FENG" class="story-img" />
                    </div>
                    <div class="col span-1-of-2 box">
                        <p class="text-a"> A holistic lifestyle brand. Offering natural body products, soon to offer natural makeup as soon as I get the formula right lol, clothing , food products and cannabis infused kitchen basics.
                        To offer holistic, feel good, guilt free products to the mentally emancipated:) and those who strive to be....internationally. I do think that I have become an overall better human being during this class and
                        I have grown so much as a person in a way in which I am not only benefitting myself but also enriching the lives of others in a positive way.
                        </p>
                        <p>&nbsp;</p>
                        <p class="text-b">I also found myself writing a lot of poetry, putting down on paper my experiences, thoughts and feelings throughout my journey in college and sharing it with my friends and family.
                        In that way I was able to voice my internal feeling and emotions in a way that is not threatening and effective in communicating.
                        I have used Marian Chace’s body action technique in order to release the tension in my body when I may feel very stressed out,
                        allowing me to feel more relaxed and my body to feel lighter in order to continue with my day in a more stress free head space.
                        </p>
                    </div>
                </div>
                <Button />

            </section>
        </div>
    )
}

export default About