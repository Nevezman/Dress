const { createApp } = Vue

createApp({
  data() {
    return {
      itemKatalogs: [{
        itemKatalog:'Для невест', 
        linkIndex:"pages/dopPagese/forWedding.html",
        linkOtherPage:"dopPagese/forWedding.html",
        linkDopPage:"forWedding.html",
      },
      {
        itemKatalog:'Платье',
         link:"https://www.youtube.com/watch?v=8nW-IPrzM1g&list=RDMM&index=30&ab_channel=Disturbed"
        },
        {
          itemKatalog:'Платье', 
          link:"https://www.youtube.com/watch?v=8nW-IPrzM1g&list=RDMM&index=30&ab_channel=Disturbed"
        },
        {
          itemKatalog:'Платье', 
          link:"https://www.youtube.com/watch?v=8nW-IPrzM1g&list=RDMM&index=30&ab_channel=Disturbed"
        },
        {
        itemKatalog:'Платье', 
        link:"https://www.youtube.com/watch?v=8nW-IPrzM1g&list=RDMM&index=30&ab_channel=Disturbed"
      },],

      itemInfos: [{
        itemInfo:'Аренда',
        link:"Info.html#rent"
      },
      {
        itemInfo:'Примерка',
        link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
      },
      {
        itemInfo:'Бронирование',
        link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
      },
      {
         itemInfo:'Ответственность за сохранность платья',
         link:"https://www.youtube.com/"
        },
        {
          itemInfo:'Отзывы',
          link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
        },],
    }
  }
}).mount('#app-menu')