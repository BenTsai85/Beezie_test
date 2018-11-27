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
      id: 2,
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
      id: 3,
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
      host: 1
    }, {
      id: 4,
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
        willingness: 1,
        show: true
      } ],
      host: 1
    }, {
      id: 5,
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
        willingness: 1,
        show: true
      } ],
      host: 1
    }, {
      id: 6,
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
        willingness: null,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 2
    }, {
      id: 7,
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
        willingness: 1,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 2
    }, {
      id: 8,
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
        willingness: 2,
        show: true
      }, {
        id: 2,
        name: "Christine",
        willingness: 1,
        show: true
      } ],
      host: 2
    }, {
      id: 9,
      name: "DIY",
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
      host: 0
    }, {
      id: 10,
      name: "DIY",
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
      host: 0
    }, {
      id: 11,
      name: "DIY",
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
      host: 0
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