const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://www.hatsandcaps.co.uk/images/products/large/202584.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://www.flare.com/wp-content/uploads/2017/10/INLINE_MonctonJackets.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://media.gq.com/photos/5c5db3311407441537b1aa66/16:9/w_2560%2Cc_limit/Footlocker-Sneaker-Resale-GQ-02082019_3x2.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    };
    

    const directoryReducer = (state = INITIAL_STATE, action) => {
      switch(action.type) {
        default:
        return state;
      }
    };

    export default directoryReducer;