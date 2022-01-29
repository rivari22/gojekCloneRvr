import {ProductListType} from '../interface/Home';

export const ProductList: ProductListType = {
  gomart: {
    detail: {
      title: 'gomart',
      subtitle: 'Gampang belanja dari berbagai merchant GoMart!',
      desc: 'Lengkapi kebutuhan pokok kamu di GoMart dengan berbagai macam promo dari berbagi merchant + gratis',
    },
    productContentList: [
      {id: 1, image: '', title: 'Diskon s/d 53%'},
      {id: 2, image: '', title: 'Diskon s/d 67%'},
      {id: 3, image: '', title: 'Diskon s/d 40%'},
      {id: 4, image: '', title: 'Diskon s/d 20%'},
      {id: 5, image: '', title: 'Diskon s/d 20%'},
      {id: 6, image: '', title: 'Diskon s/d 20%'},
      {id: 7, image: '', title: 'Diskon s/d 10%'},
      {id: 8, image: '', title: 'Diskon s/d 10%'},
    ],
  },
  gojek1: {
    detail: {
      title: 'gojek',
      subtitle: 'Pilihan Terlaris',
      button: {
        label: 'Lihat semua',
        onClick: () => undefined,
      },
    },
    productContentList: [
      {
        id: 1,
        image: '',
        title: 'SaladStop!, Senayan City(Salad Stop Healthy)',
        category: 'Barat,Jepang,Korea',
        rate: '4.8',
      },
      {
        id: 2,
        image: '',
        title: "McDonald's Senayan Trade Center",
        category: 'Cepat saji,Sweets,Jajanan',
        rate: '4.8',
      },
      {
        id: 3,
        image: '',
        title: 'Starbucks Pakubuwono (Reserve)',
        category: 'Minuman, Kopi Roti',
        rate: '4.8',
      },
      {
        id: 4,
        image: '',
        title: 'Bakerman, SCBD',
        category: 'Roti,Minuman,Jajanan',
        rate: '4.8',
      },
    ],
  },
  gojek2: {
    detail: {
      title: 'gojek',
      subtitle: 'Banyak resto enak, loh!',
      button: {
        label: 'Lihat semua',
        onClick: () => undefined,
      },
    },
    productContentList: [
      {
        id: 1,
        image: '',
        title: 'SaladStop!, Senayan City(Salad Stop Healthy)',
        category: 'Barat,Jepang,Korea',
        rate: '4.8',
      },
      {
        id: 2,
        image: '',
        title: "McDonald's Senayan Trade Center",
        category: 'Cepat saji,Sweets,Jajanan',
        rate: '4.8',
      },
      {
        id: 3,
        image: '',
        title: 'KFC, Ayam Bulungan Jakarta',
        category: 'Minuman, Kopi Roti',
        rate: '4.8',
      },
      {
        id: 4,
        image: '',
        title: 'Bakerman, SCBD',
        category: 'Roti,Minuman,Jajanan',
        rate: '4.8',
      },
    ],
  },
};

export const advertistmentList = [
  {
    id: 1,
    image: '',
    desc: {
      title: 'Klik sebelum hilang!',
      value:
        'Lihat kilas balik kehebatanmu selama 2021 biar kamu bisa terus jadi orang hebat di tahun ini. Dapetin juga promo khusus customer jempolan',
    },
  },
  {
    id: 2,
    image: '',
    desc: {
      title: 'GRATIS ONGKIR UNTUKMU!',
      value:
        'Belanja kebutuhan jadi gampang dan menyenangkan pakai goMart. Ada gratis ongkir dan diskon dari berbagai merchant goMart. Klik',
    },
  },
  {
    id: 3,
    image: '',
    desc: {
      title: 'Pesan GoFood Pasti Ada Promo',
      value:
        'Diskon s.d. 110rb & diskon ongkir! Cepet pesen goFood biar cepet sampenya, cepet uenaknya~',
    },
  },
];
