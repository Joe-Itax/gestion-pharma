class ProductService {
  static getProducts() {
    const products = [
      {
        id: '1',
        slug: 'doliprane',
        name: 'Doliprane',
        image: 'https://dummyimage.com/200x200/000/fff&text=Doliprane',
        description:
          'Le Doliprane est un médicament contre la douleur et la fièvre couramment utilisé pour soulager les maux de tête, les douleurs musculaires, les courbatures, les douleurs dentaires, les maux de gorge et les fièvres.',
      },
      {
        id: '2',
        slug: 'aspirine',
        name: 'Aspirine',
        image: 'https://dummyimage.com/200x200/000/fff&text=Aspirine',
        description:
          "L'aspirine est un médicament anti-inflammatoire non stéroïdien (AINS) qui est utilisé pour soulager la douleur, la fièvre et l'inflammation.",
      },
      {
        id: '3',
        slug: 'ibuprofene',
        name: 'Ibuprofène',
        image: 'https://dummyimage.com/200x200/000/fff&text=Ibuprofene',
        description:
          "Il est disponible en comprimés, en gélules, en suppositoires et en sirop. La dose recommandée pour les adultes est de 200 à 400 milligrammes par prise, jusqu'à 4 prises par jour",
      },
    ];
    return products;
  }
}

export default ProductService;
