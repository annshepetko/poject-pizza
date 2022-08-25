export const initialState = {
    pizza:
        [
            {
                id: 1,
                title: 'Паппероні',
                price: 200,
                description: ['Піца Пепероні – це поєднання ніжного сиру моцарелла, пікантної салямі пепероні та запашного базиліку.'],
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC328cXavujdWQ88Iss-gtBskiDLOhViBDFg&usqp=CAU',
                quantity: 0
            },
            {
                id: 2,
                title: 'Піца Маргарита ',
                price: 150,
                description: ['це типова неаполітанська піца, виготовлена з помідорами Сан-Марцано, сиром моцарелла, свіжим базиліком, сіллю та оливковою олією.'],
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYprEeJgHUyIrDBGeC2ZhUH90ggJVvLBM5A&usqp=CAU',
                quantity: 0

            },
            {
                id: 3,
                title: 'Сицилійська піца',
                price: 270,
                description: ['На відміну від інших видів піци, сир (за класичним рецептом це італійський сир пекоріно) тут міститься під соусом, а також для її приготування використовуються анчоуси'],
                image: 'https://images.zakupka.com/i3/firms/27/82/82399/pica-presto-30-sm_684be268c40a080_500x500_1.jpg',
                quantity: 0

            },
            {
                id: 4,
                title: 'Баварська піца',
                price: 300,
                description: ['Баварська піца — ось що сподобається любителям м\'яса. Тут повний спектр м\'ясних смаків, які поєднуються в єдиному блюді, дарують неповторний аромат і відчуття ситості, адже калорійність висока. Піца з ковбасками й сиром це дуже поживно.'],
                image: 'https://mafia.ua/storage/editor/fotos/450x450/picca-bavarskaya.jpeg',
                quantity: 0

            },
            {
                id: 5,
                title: 'Грибна піца',
                price: 250,
                description: ['Піца з грибами та куркою — всім відоме і надзвичайно смачна страва Жульєн.'],
                image: 'https://timeout.od.ua/image/cache/catalog/grib-800x800.jpg',
                quantity: 0

            },
        ],
    burgers: [
        {
            id: 6,
            title: 'Chicken Баффало Burger',
            price: 146,
            description : ['булка, куряче філе паніроване в кукурудзяних пластівцях, цибулеві кільця, моцарела, помідори, айсберг, американська гірчиця, соуси: баффало, блю чіз та гриль, та картопля фрі'],
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/06/Buffalo-chicken-burgers-ranch-slaw-312bb64.jpg',
            quantity: 0
        },
        {
            id: 7,
            title: 'Double burger grill',
            price: 150,
            description : ['котлета з натуральної яловичини 2 шт., салат айсберг, томат, огірок, сир Моцарела, соуси'],
            image: 'https://thumbs.dreamstime.com/b/big-grilled-chicken-burger-double-cutlet-cheese-wooden-background-side-view-close-up-208658240.jpg',
            quantity: 0
        },
        {
            id: 8,
            title: 'Royal Burger з телятиною',
            price: 170,
            description : ['Неформальний варіант бургера: соковита котлета з телятини та свіжий лист айсбергу поєднуються зі слайсом солодкої груші.\n' +
            'Подається бургер разом із журавлиним соусом власного приготування та блакитним сиром.'],
            image: 'https://pastagrill.com.ua/wp-content/uploads/2022/07/411_burger-z-telyatinoyu-ta-bekon-300x300.jpg',
            quantity: 0
        },
        {
            id: 9,
            title: 'Black Баффало з телятиною',
            price: 182,
            description : ['чорна булка, сир чеддер, бекон, рукола, помідори, синя цибуля, соус, котлета з телятини *всі бургери подаються з картоплею фрі'],
            image: 'https://ternopil.menu.in.ua/wp-content/uploads/2021/03/3df4e88e-ea48-4bbf-97df-8132e9f0e760-600x600.jpg',
            quantity: 0
        },
        {
            id: 10,
            title: 'Burger Tuna',
            price: 255,
            description : ['Тунець панко, рукола, синя цибуля, соуси: манго-карі, васабі та гриль'],
            image: 'https://www.sainsburysmagazine.co.uk/uploads/media/1800x1800/02/9602-Tuna-burgers.jpg?v=1-0',
            quantity: 0
        }

    ]
}
