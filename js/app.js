const { createApp } = Vue

createApp({
  data() {
    return {
      itemKatalogs: [{
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
        },
        {
        itemKatalog:'Платье', 
        link:"https://www.youtube.com/watch?v=8nW-IPrzM1g&list=RDMM&index=30&ab_channel=Disturbed"
      },],
      
      itemInfos: [{
        itemInfo:'инфо',
        link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
      },
      {
        itemInfo:'инфо',
        link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
      },
      {
        itemInfo:'инфо',
        link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
      },
      {
         itemInfo:'инфо',
         link:"https://www.youtube.com/"
        },
        {
          itemInfo:'инфо',
          link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
        },],

        itemAxes: [{
          itemAxe:'инфо',
          link:"https://www.youtube.com/"
        },
        {
          itemAxe:'инфо',
          link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
        },
        {
          itemAxe:'инфо',
          link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
        },
        {
           itemAxe:'инфо',
           link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
          },
          {
            itemAxe:'инфо',
            link:"https://www.youtube.com/watch?v=MZjVBRT3w3g&list=RDMZjVBRT3w3g&start_radio=1&ab_channel=ANACONDAZ"
          },]
    }
  }
}).mount('#app-menu')