import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div id="about-page" className="container">
            <div id="about-page-text">
                <h1>About Petreon</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit magnam facilis, rem consequuntur aperiam, laboriosam
                    impedit nemo deserunt id natus delectus quis voluptatibus ab
                    atque accusamus? Molestiae, perspiciatis. Facilis blanditiis
                    suscipit vitae quisquam. Ullam distinctio illo maxime ipsa
                    labore consequuntur, porro eius ex facere est officiis.
                    Sequi quos cupiditate asperiores quasi mollitia iure,
                    aperiam assumenda sunt obcaecati, fugiat id ex?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus assumenda quo labore quaerat, vel laudantium,
                    ipsa laborum natus autem atque, animi sed ullam eaque velit
                    nesciunt iure veritatis quam molestias fuga quasi
                    consequatur voluptatem eligendi in! Iusto eligendi provident
                    voluptates aut? Dignissimos quibusdam possimus laboriosam
                    repudiandae unde magnam nesciunt id facere optio inventore,
                    ipsam reprehenderit deleniti dolor. Commodi eos voluptatum
                    doloribus! Suscipit rerum consectetur impedit quidem
                    incidunt libero hic quia adipisci perferendis earum
                    recusandae in, commodi ex itaque, ullam esse?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    sed labore ea dolore inventore, accusantium magni accusamus
                    similique porro! Temporibus molestiae modi quibusdam nisi
                    voluptates possimus, soluta eveniet doloribus sunt dolores?
                    Excepturi cumque illum dolorum aperiam. Ea eius maiores
                    ipsam odio ex aliquid assumenda officia facere cumque,
                    possimus, ad vero!
                </p>
            </div>
            <Link className="btn" to="/register">
                Register Today!
            </Link>
        </div>
    );
};

export default AboutPage;
