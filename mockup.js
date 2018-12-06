let mockup

const storage = window.localStorage.getItem('Beezie')

const dateHandler = (key, value) => {
  if (key === 'period') {
    return new Date(value)
  }
  if (key === 'time') {
    return [ new Date(value[0]), new Date(value[1]) ]
  }
  return value
}

if (storage != null) {
  mockup = JSON.parse(storage, dateHandler)
} else {
  mockup = {
    events: [{
      id: 0,
      name: "DIY",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 0,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 2,
        show: true
      }, {
        id: 3,
        name: "Ben",
        willingness: 1,
        show: true
      }, {
        id: 4,
        name: "Triton A",
        willingness: 2,
        show: true
      } ],
      host: 0
    }, {
      id: 1,
      name: "Dinner",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 0,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 2,
        show: true
      }, {
        id: 3,
        name: "Ben",
        willingness: 1,
        show: true
      }, {
        id: 4,
        name: "Triton A",
        willingness: 2,
        show: true
      } ],
      host: 0,
      image: 'https://www.hot-dinners.com/images/stories/blog/2017/dintaifung.jpg'
    }, {
      id: 2,
      name: "Free Pizza",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 0,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 2,
        show: true
      }, {
        id: 3,
        name: "Ben",
        willingness: 1,
        show: true
      }, {
        id: 4,
        name: "Triton A",
        willingness: 2,
        show: true
      } ],
      host: 0,
      image: 'https://food-images.files.bbci.co.uk/food/recipes/alpine_pizza_32132_16x9.jpg'
    }, {
      id: 3,
      name: "Zumba",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 0,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 2,
        show: true
      }, {
        id: 3,
        name: "Ben",
        willingness: 1,
        show: true
      }, {
        id: 4,
        name: "Triton A",
        willingness: 2,
        show: true
      } ],
      host: 1,
      image: 'https://img.grouponcdn.com/deal/77qbXKZ1bijfCSnqeTJ4/n8-6769x4531/v1/c700x420.jpg'
    }, {
      id: 4,
      name: "Free Movie Night - the Crimes of Grindelwald",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 0,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 1,
      image: 'https://www.vitalthrills.com/wp-content/uploads/2018/07/fantasticbeastsheader.jpg'
    }, {
      id: 5,
      name: "Hiphop Drop-in class",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 0,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 1,
      image: 'https://udemy-images.udemy.com/course/750x422/393732_7789_4.jpg'
    }, {
      id: 6,
      name: "Let's go Disney!",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: null,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 2,
      image: 'https://secure.cdn1.wdpromedia.com/resize/mwImage/1/640/360/75/dam/wdpro-assets/dlr/gallery/destinations/disneyland-park/disneyland-gallery00.jpg'
    }, {
      id: 7,
      name: "Teen Ice Skating",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 1,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 2,
      image: 'https://kidbucketlist.com.au/wp-content/uploads/2018/05/Ice-Skating-in-Sydney-with-Kids-skating-together.jpg'
    }, {
      id: 8,
      name: "Hiking",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 26, 15, 0), new Date(2018, 10, 26, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 2,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 2,
      image: 'https://cdn.mos.cms.futurecdn.net/azqA883RyuuTBkKsCdoHcb-768-80.jpg'
    }, {
      id: 9,
      name: "Camping",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 20, 15, 0), new Date(2018, 10, 20, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 0,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 0,
      image: 'https://cdn.vox-cdn.com/thumbor/dG1MZjhVdGUXGSTpWub1cKMOEbM=/0x0:5225x3479/1820x1213/filters:focal(2195x1322:3031x2158):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg'
    }, {
      id: 10,
      name: "Gaming",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 20, 15, 0), new Date(2018, 10, 20, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 0,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 0,
      image: 'https://cdn.downtoearth.org.in/library/large/2018-07-11/0.59875200_1531295001_blur-close-up-device-442576.jpg'
    }, {
      id: 11,
      name: "Afternoon Coffee",
      period: [ new Date(2018, 10, 22), new Date(2018, 10, 28) ],
      time: [ new Date(2018, 10, 20, 15, 0), new Date(2018, 10, 20, 17, 0) ],
      location: "Price Center",
      detail: "Let's DIY at PC!",
      participants: [ {
        id: 1,
        name: "Alex",
        willingness: null,
        show: true
      }, {
        id: 0,
        name: "Sam",
        willingness: 0,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 0,
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/coffee-mug-1493946797.jpg'
    }],
    accounts: [{
      id: 0,
      name: "Sam",
      calendar: [
        [ "201810221000", "201810221445", 0 ],
        [ "201810221900", "201810222045", 2 ],
        [ "201810230800", "201810231145", 1 ],
        [ "201810231200", "201810231415", 0 ],
        [ "201810241000", "201810241515", 0 ],
        [ "201810251000", "201810251215", 2 ],
        [ "201810251230", "201810251345", 0 ],
        [ "201810251400", "201810251645", 2 ],
        [ "201810270800", "201810271745", 0 ]
      ],
      events: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
      friends: [ 1, 2, 3 ]
    }, {
      id: 1,
      name: "Alex",
      calendar: [
        [ "201810221100", "201810221345", 1 ],
        [ "201810221730", "201810221950", 1 ],
        [ "201810230800", "201810231145", 0 ],
        [ "201810231200", "201810231315", 1 ],
        [ "201810241200", "201810241545", 2 ],
        [ "201810241600", "201810241745", 1 ],
        [ "201810251100", "201810251215", 2 ],
        [ "201810251230", "201810251345", 0 ],
        [ "201810251400", "201810251645", 1 ],
        [ "201810270800", "201810271745", 1 ]
      ],
      events: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      friends: [ 0, 2, 3 ]
    }, {
      id: 2,
      name: "Christine",
      calendar: [
        [ "201810220800", "201810220945", 1 ],
        [ "201810221730", "201810221950", 1 ],
        [ "201810230800", "201810231145", 0 ],
        [ "201810231200", "201810231315", 1 ],
        [ "201810241200", "201810241545", 2 ],
        [ "201810241600", "201810241745", 1 ],
        [ "201810251100", "201810251215", 2 ],
        [ "201810251230", "201810251345", 0 ],
        [ "201810251400", "201810251645", 1 ],
        [ "201810270800", "201810271745", 1 ],
      ],
      events: [ 0, 1, 2, 3 ],
      friends: [ 0, 1 ]
    }, {
      id: 3,
      name: "Ben",
      calendar: [
        [ "201810220800", "201810220945", 1 ],
        [ "201810221730", "201810221950", 1 ],
        [ "201810230800", "201810231145", 0 ],
        [ "201810231200", "201810231315", 1 ],
        [ "201810241200", "201810241545", 2 ],
        [ "201810241600", "201810241745", 1 ],
        [ "201810251100", "201810251215", 2 ],
        [ "201810251230", "201810251345", 0 ],
        [ "201810251600", "201810251745", 1 ],
        [ "201810270800", "201810271745", 1 ],
      ],
      events: [ 0, 1, 2, 3 ],
      friends: [ 0, 1, 2 ]
    },{
      id: 4,
      name: "Triton A",
      calendar: [
        [ "201810220900", "201810221245", 2 ],
        [ "201810230800", "201810231145", 0 ],
        [ "201810231300", "201810231645", 2 ],
        [ "201810231800", "201810232115", 1 ],
        [ "201810251100", "201810251215", 2 ],
        [ "201810251230", "201810251345", 0 ],
        [ "201810251600", "201810251745", 1 ],
        [ "201810270800", "201810271745", 1 ],
      ],
      events: [ 1, 2, 3 ],
      friends: [ 1, 2 ]
    },{
      id: 5,
      name: "Triton B",
      calendar: [
        [ "201810220900", "201810221245", 2 ],
        [ "201810230800", "201810231145", 0 ],
        [ "201810231300", "201810231645", 2 ],
        [ "201810231800", "201810232115", 1 ],
        [ "201810251100", "201810251215", 2 ],
        [ "201810251230", "201810251345", 0 ],
        [ "201810251600", "201810251745", 1 ],
        [ "201810270800", "201810271745", 1 ],
      ],
      events: [],
      friends: [ 1, 2, 5 ]
    },{
      id: 6,
      name: "Triton C",
      calendar: [
        [ "201810220900", "201810221245", 2 ],
        [ "201810230800", "201810231145", 0 ],
        [ "201810231300", "201810231645", 2 ],
        [ "201810231800", "201810232115", 1 ],
        [ "201810251100", "201810251215", 2 ],
        [ "201810251230", "201810251345", 0 ],
        [ "201810251600", "201810251745", 1 ],
        [ "201810270800", "201810271745", 1 ],
      ],
      events: [ 1, 2, 3 ],
      friends: [ 4 ]
    }]
  }
}