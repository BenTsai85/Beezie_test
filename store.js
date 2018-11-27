const initialState = {
  calendar: {
    button: 'free',
    color: '#000000',
    popup: false
  },
  nav: 'calendar',
  subnav: 'eventdetail',
  events: mockup.events,
  account: mockup.accounts.find(a => a.id === 0),
  accounts: mockup.accounts,
  event: mockup.events[0],
  guestbar: 'guestList',
  mainPageHide: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'calendar':
      switch (action.subtype) {
        case 'button':
          return { ...state, calendar: { ...state.calendar, button: action.payload } }
        case 'update':
          mockup.accounts = mockup.accounts.map(a => a.name === "Sam" ? { ...a, calendar: action.payload }: a )
          window.localStorage.setItem('Beezie', JSON.stringify(mockup))
          return { ...state, account: { ...state.account, calendar: action.payload }, accounts: mockup.accounts }
        case 'add':
          return { ...state, calendar: { ...state.calendar, popup: true } }
      }
      break
    case 'nav':
      return { ...state, nav: action.payload }
    case 'subnav':
      return { ...state, subnav: action.payload }
    case 'init':
      return state
    case 'event':
      switch (action.subtype) {
        case 'set':
          return { ...state, event: action.payload }
        case 'create':
          const newEvent = { ...state.event, id: state.events.length, participants: [{ id: 0, name: "Sam", willingness: null }], host: 0 }
          state.events.push(newEvent)
          state.account.events.push(newEvent.id)
          window.localStorage.setItem('Beezie', JSON.stringify(mockup))
          return { ...state, event: newEvent }
        case 'name':
          return { ...state, event: { ...state.event, name: action.payload } }
        case 'detail':
          return { ...state, event: { ...state.event, detail: action.payload } }
        case 'location':
          return { ...state, event: { ...state.event, location: action.payload } }
        case 'image':
          return { ...state, event: { ...state.event, image: action.payload } }
        case 'time':
          return { ...state, event: { ...state.event, time: action.payload } }
        case 'period':
          return { ...state, event: { ...state.event, period: action.payload } }
        case 'edit':
          mockup.events[mockup.events.findIndex(e => e.id === state.event.id)] = state.event
          window.localStorage.setItem('Beezie', JSON.stringify(mockup))
          return state
        case 'copy':
          return { ...state, event: Object.assign({}, state.event) }
        case 'reset':
          return { ...state, event: state.events.find(e => e.id === state.event.id) }
        case 'invite':
          const a = state.accounts.find(a => a.id === action.payload)
          state.event.participants.push({ id: action.payload, name: a.name, willingness: null })
          return state
      }
      break
    case 'willingness':
      state.event.participants.find(p => p.id === 0).willingness = action.payload
      window.localStorage.setItem('Beezie', JSON.stringify(mockup))
      return state
    case 'friend':
      switch (action.subtype) {
        case 'add':
          state.account.friends.push(action.payload)
          state.accounts.find(a => a.id === action.payload).friends.push(0)
          window.localStorage.setItem('Beezie', JSON.stringify(mockup))
          return state
      }
      break
    case 'guestbar':
      return { ...state, guestbar: action.payload }
    case 'showCalendar':
      state.event.participants.find(p => p.id === 0).show = action.payload
      window.localStorage.setItem('Beezie', JSON.stringify(mockup))
      return { ...state }
    case 'mainPageHide':
      return { ...state, mainPageHide: action.payload }
  }
  return state
}

const store = Redux.createStore(reducer)
