store.subscribe(() => {
  const state = store.getState()
  if (state.mainPageHide) {
    $('.mainPage').hide()
    $('.subPage').show()
    $('.subPage > div').hide()
    $('.' + state.subnav).show()
  } else {
    $('.mainPage').show()
    $('.subPage').hide()
    $('.navbar').show()
    $('.navbar .navitem').show()
    $('.navbar .toggled').hide()
    $('.page').hide()
    $('.navbar .' + state.nav).hide()
    $('.navbar .' + state.nav + '.toggled').show()
    $('.' + state.nav + '.page').show()
  }
})

store.dispatch({
  type: 'init'
})

$('.navitem').click(e => {
  store.dispatch({
    type: 'nav',
    payload: e.target.classList[e.target.classList.length - 1]
  })
})

$().click(() => {
  $('.navbar').show()
  $('.navbar .navitem').show()
  $('.navbar .toggled').hide()
  $('.page').hide()
})

$('.backbutton').click(() => {
  const state = store.getState()
  if (state.subnav === 'editEvent') {
    store.dispatch({
      type: 'event',
      subtype: 'reset'
    })
    store.dispatch({
      type: 'subnav',
      payload: 'eventDetail'
    })
  } else if (state.subnav === 'guest') {
    store.dispatch({
      type: 'subnav',
      payload: 'eventDetail'
    })
  } else {
    store.dispatch({
      type: 'mainPageHide',
      payload: false
    })
  }
})

$('.helpMark').click(() => {
  store.dispatch({
    type: 'mainPageHide',
    payload: true
  })
  store.dispatch({
    type: 'subnav',
    payload: 'help'
  })
})