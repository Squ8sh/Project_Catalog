import React from "react";

const AboutPage = () => {

    return (
        <div className="about-us size">
            {/* Компонент фильтрации */}
            {/*<h1>О нас</h1>*/}

            <div className="about-page">
                <h1 className="about-page-title">Кто мы?</h1>
                <p className="about-page-text">
                    Мы – команда из Набережных Челнов. Под брендом <strong>Спортпит и Точка</strong> мы с 2015 года
                    разрабатываем и производим спортивное питание на современном оборудовании, расположенном в
                    Татарстане.
                    Наша миссия – создавать продукты, которые помогают людям достигать своих целей и вдохновляют их
                    на новые достижения. Мы стремимся производить спортивное питание, которое по вкусу, качеству и
                    цене превосходит зарубежные аналоги и идеально подходит российским покупателям.
                </p>

                <h2 className="about-page-subtitle">Кто наши покупатели?</h2>
                <ul className="about-page-list">
                    <li>Профессиональные спортсмены, бодибилдеры и пауэрлифтеры, чемпионы России и мира.</li>
                    <li>Любители фитнеса, стремящиеся улучшить форму или сохранить физическую активность.</li>
                    <li>Приверженцы здорового образа жизни, которые хотят сделать свое тело лучше и сильнее.</li>
                </ul>

                <h2 className="about-page-subtitle">Как мы этого добиваемся?</h2>
                <p className="about-page-text">
                    Мы делаем ставку на качество и надежность:
                </p>
                <ul className="about-page-list">
                    <li>Закупаем сырье напрямую у проверенных поставщиков из России, Европы и других стран.</li>
                    <li>Производим спортивное питание на собственной сертифицированной площадке с системой контроля
                        качества HACCP.
                    </li>
                    <li>Проводим лабораторные тесты каждой партии продукции, результаты которых хранятся до конца
                        срока годности.
                    </li>
                    <li>У нас открытая политика: мы проводим экскурсии для партнеров, спортсменов, диетологов и
                        блогеров, которые делятся своими отзывами и мнениями.
                    </li>
                </ul>

                <h2 className="about-page-subtitle">Что для нас важно?</h2>
                <ul className="about-page-list">
                    <li>Учитывать тренды и выпускать актуальные и проверенные продукты.</li>
                    <li>Прислушиваться к рекомендациям профессионалов: тренеров, диетологов и спортсменов.</li>
                    <li>Использовать проверенные временем технологии производства и многолетний опыт наших
                        технологов.
                    </li>
                    <li>Делать продукцию доступной для каждого: мы работаем не только через наш официальный сайт, но
                        и через фитнес-клубы, магазины и крупные онлайн-маркеты по всей России.
                    </li>
                </ul>

                <h2 className="about-page-subtitle">Что мы предлагаем?</h2>
                <ul className="about-page-list">
                    <li><strong>Протеины</strong> более чем в десяти вкусовых вариантах – насыщенные, мягкие и
                        идеально подходящие для любого способа приготовления.
                    </li>
                    <li><strong>Высокобелковые снеки</strong> – батончики и печенье без добавленного сахара, которые
                        подойдут как для перекуса, так и для здорового образа жизни.
                    </li>
                    <li><strong>Аминокислоты и BCAA</strong> со сбалансированными освежающими вкусами, которые легко
                        растворяются.
                    </li>
                    <li><strong>Ознакомительные наборы</strong>, чтобы вы могли попробовать разные продукты и
                        выбрать свой любимый.
                    </li>
                    <iframe width="1273" height="716" src="https://www.youtube.com/embed/O9jX1hvTyzQ"
                            title="Магазин спортивного питания «Geneticshop»" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </ul>

                <h2 className="about-page-subtitle">И это еще не все...</h2>
                <p className="about-page-text">
                    Мы заботимся о наших клиентах, предлагая доступные цены и удобную доставку. На нашем сайте
                    регулярно проходят акции, розыгрыши и скидки.
                    Мы также проводим обучающие вебинары и прямые эфиры, где делимся советами по питанию и
                    тренировкам. Наши эксперты – диетологи, тренеры и спортсмены – всегда готовы помочь с выбором и
                    ответить на любые вопросы.
                </p>
                <p className="about-page-text">
                    Все это мы делаем для того, чтобы вы могли меняться к лучшему вместе с <strong>Спортпит и
                    Точка</strong>!
                </p>
            </div>

        </div>
    );
};

export default AboutPage;