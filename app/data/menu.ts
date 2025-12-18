export type Category = 'Antipasti' | 'Primi' | 'Secondi' | 'Dessert';

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    category: Category;
    image?: string;
}

export const menuItems: MenuItem[] = [
    // Antipasti
    {
        id: 'a1',
        name: 'Burrata & Prosciutto',
        description: 'Burrata pugliese 125g, Prosciutto Crudo di Parma 24 muaj, pomodorini konfit, vaj borziloku.',
        price: '1.400 L',
        category: 'Antipasti',
        image: '/menu-item-1.png'
    },
    {
        id: 'a2',
        name: 'Tartar Viçi',
        description: 'Fileto viçi e grirë me thikë, e verdhë veze, kaperi, qepë e kuqe, mustardë Dijon.',
        price: '1.600 L',
        category: 'Antipasti',
        image: '/menu-item-4.png'
    },
    {
        id: 'a3',
        name: 'Carpaccio Oktapodi',
        description: 'Oktapod i freskët, vaj ulliri ekstra i virgjër, limon, rukola e egër.',
        price: '1.500 L',
        category: 'Antipasti'
    },

    // Primi
    {
        id: 'p1',
        name: 'Tagliolini me Tartuf',
        description: 'Pastë e freskët, tartuf i zi i stinës, gjalpë artizanal, parmixhan 36 muaj.',
        price: '1.800 L',
        category: 'Primi',
        image: '/menu-item-2.png'
    },
    {
        id: 'p2',
        name: 'Risotto me Karkaleca',
        description: 'Oriz Carnaroli, karkaleca deti të freskët, shafran, lime.',
        price: '1.700 L',
        category: 'Primi'
    },
    {
        id: 'p3',
        name: 'Paccheri Ragu Viçi',
        description: 'Ragu viçi i gatuar ngadalë për 12 orë, djathë Pecorino.',
        price: '1.500 L',
        category: 'Primi'
    },

    // Secondi
    {
        id: 's1',
        name: 'Tagliata Viçi',
        description: 'Fileto viçi Black Angus, rukola, parmixhan, vaj ulliri, kripë Maldon.',
        price: '2.400 L',
        category: 'Secondi',
        image: '/menu-item-3.png'
    },
    {
        id: 's2',
        name: 'Fileto Levraku',
        description: 'Levrak i eger i pjekur në furrë, perime të stinës, salcë limoni.',
        price: '2.100 L',
        category: 'Secondi'
    },
    {
        id: 's3',
        name: 'Brinjë Qengji',
        description: 'Brinjë qengji Zelandë e Re, krustë erëzash, pure patatesh me tartuf.',
        price: '2.600 L',
        category: 'Secondi'
    },

    // Dessert
    {
        id: 'd1',
        name: 'Tiramisu Klasik',
        description: 'Receta tradicionale me mascarpone, kafe ekspres dhe kakao.',
        price: '600 L',
        category: 'Dessert'
    },
    {
        id: 'd2',
        name: 'Cheesecake Fruta Pylli',
        description: 'Bazë biskote, krem djathi i freskët, salcë frutash pylli.',
        price: '700 L',
        category: 'Dessert'
    }
];
