const products = [
    {
        id: 1,
        name: 'Optimum Nutrition Протеины',
        rating: 5,
        price: 3200,
        description: "Optimum Nutrition — это одна из ведущих мировых марок спортивного питания, известная своими высококачественными продуктами, предназначенными для оптимизации физических результатов и поддержания здоровья. В линейке протеинов Optimum Nutrition представлены различные виды белка, включая сывороточный (Whey), казеин и растительные протеины.",
        sale: false,
        new: true,
    },
    {
        id: 2,
        name: 'MyProtein Креатин',
        rating: 5,
        price: 1530,
        description: "Креатин MyProtein - это идеальный выбор для спортсменов и активных людей, которые стремятся к максимальной эффективности тренировок и достижению своих целей. Регулярный прием этой добавки поможет вам повысить работоспособность, выносливость и ускорить рост мышечной массы.",
        sale: true,
        new: false,
    },
    {
        id: 3,
        name: 'Scitec Nutrition BCAA',
        rating: 4,
        price: 1350,
        description: "BCAA Scitec Nutrition - это идеальный выбор для спортсменов и активных людей, которые стремятся к максимальной эффективности тренировок, наращиванию мышечной массы и ускорению восстановления. Регулярный прием этой добавки поможет вам достичь новых высот в спорте и фитнесе.",
        sale: true,
        new: true,
    },
    {
        id: 4,
        name: 'Biotech USA Аминокислоты',
        rating: 5,
        price: 2100,
        description: "Biotech USA Аминокислоты - это комплексная добавка, которая обеспечит вашему организму все необходимые аминокислоты для максимальной эффективности тренировок и достижения поставленных целей. Регулярный прием этой добавки поможет вам повысить работоспособность, выносливость и ускорить рост мышечной массы.",
        sale: false,
        new: false,
    },
    {
        id: 5,
        name: 'MuscleTech Гейнер',
        rating: 4,
        price: 2850,
        description: "MuscleTech Гейнер - это мощная протеиновая смесь, разработанная специально для спортсменов и активных людей, стремящихся к наращиванию мышечной массы. Этот продукт содержит сбалансированный состав белков, углеводов и других важных питательных веществ, необходимых для роста и восстановления мышц.",
        sale: false,
        new: true,
    },
    {
        id: 6,
        name: 'PowerBar Изотоники',
        rating: 4,
        price: 970,
        description: "PowerBar Изотоники - это высокоэффективные спортивные напитки, разработанные для поддержания оптимального водно-солевого баланса и быстрого восполнения энергетических запасов во время физических нагрузок. Эти напитки содержат сбалансированный комплекс углеводов, электролитов и других важных нутриентов, необходимых для повышения выносливости и работоспособности.",
        sale: false,
        new: false,
    },
    {
        id: 7,
        name: 'Optimum Nutrition Протеины',
        rating: 5,
        price: 3200,
        description: "Optimum Nutrition — это одна из ведущих мировых марок спортивного питания, известная своими высококачественными продуктами, предназначенными для оптимизации физических результатов и поддержания здоровья. В линейке протеинов Optimum Nutrition представлены различные виды белка, включая сывороточный (Whey), казеин и растительные протеины.",
        sale: false,
        new: true,
    },
    {
        id: 8,
        name: 'MyProtein Креатин',
        rating: 5,
        description: "Креатин MyProtein - это идеальный выбор для спортсменов и активных людей, которые стремятся к максимальной эффективности тренировок и достижению своих целей. Регулярный прием этой добавки поможет вам повысить работоспособность, выносливость и ускорить рост мышечной массы.",
        price: 1530,
        sale: true,
        new: false,
    }

]

products.forEach(product => {
    if (product.name.includes('Протеины')) {
        product.image = '/img/protein.png';
        product.settings = [{
            type: 'Протеин',
            vkys: 'Банан',
            v: '2900 мл',
            format: 'Порошок'
        }];
    } else if (product.name.includes('Креатин')) {
        product.image = '/img/image.png';
        product.settings = [{
            type: 'Креатин',
            vkys: 'Апельсин',
            v: '300 г',
            format: 'Порошок'
        }];
    } else if (product.name.includes('BCAA')) {
        product.image = '/img/bcaa.png';
        product.settings = [{
            type: 'BCAA',
            vkys: 'Апельсин',
            v: '400 г',
            format: 'Порошок'
        }];

    } else if (product.name.includes('Аминокислоты')) {
        product.image = '/img/amino.png';
        product.settings = [{
            type: 'BCAA',
            vkys: 'Апельсин',
            v: '400 г',
            format: 'Порошок'
        }];
    } else if (product.name.includes('Гейнер')) {
        product.image = '/img/gainer.png';
        product.settings = [{
            type: 'Гейнер',
            vkys: 'Апельсин',
            v: '1100 г',
            format: 'Порошок'
        }];
    } else if (product.name.includes('Изотоники')) {
        product.image = '/img/iso.png';
        product.settings = [{
            type: 'BCAA',
            vkys: 'Апельсин',
            v: '920 г',
            format: 'Порошок'
        }];
    } else {
        product.image = '/img/default_image.png'; // Изображение по умолчанию
    }
});


export default products