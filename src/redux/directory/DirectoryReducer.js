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
          imageUrl: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/88/19/rBVaVFwA1AeAT0QBAAcKnqCtwkc019.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://guycounseling.com/wp-content/uploads/2018/09/jessee-m.jpg',
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