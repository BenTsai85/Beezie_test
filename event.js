store.subscribe(() => {
  const state = store.getState()
  const events = state.events.map(e => {
    const account = e.participants.find(p => p.id === 0)
    const participants = e.participants.filter(p => p.id !== 0)
    participants.push(account)
    return { ...e, participants }
  })
  const eventsICreated = [], eventsImGoing = [], pendingInvitations = [], eventHistory = []

  for (let e of events) {
    if (e.time && e.time[1] < new Date(2018, 10, 22)) {
      eventHistory.push(e)
    } else if (e.host === 0) {
      eventsICreated.push(e)
    } else if (e.participants.some(p => p.id === 0 && p.willingness === 0)) {
      eventsImGoing.push(e)
    } else {
      pendingInvitations.push(e)
    }
  }

  $('#eventsICreated').html(eventsICreated.map(e => ' \
    <div class="eventblock" id="event' + e.id + '" \
      style="background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(100, 100, 100, 0.7)), url(\'' + (e.image ? e.image : 'image/DIY.jpg') + '\')"> \
      <div class="eventheader"> \
        <div class="eventtitle"> \
          <span>' + e.name + '</span> \
        </div> \
        <div class="eventtime"> \
          ' + (e.time ? e.time[0].toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }) + ' at ' + e.time[0].toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'}) : 'TBD') + ' \
        </div> \
        <div class="eventpeople"> \
          ' + (e.participants.length === 1 ? 'You' :
          e.participants.length === 2 ? e.participants[0].name + ' and You' :
          e.participants[0].name + ', ' + e.participants[1].name + ', and ' + (e.participants.length - 2) + ' people') + ' \
        </div> \
      </div> \
    </div>'
  ))

  $('#eventsImGoing').html(eventsImGoing.map(e => ' \
    <div class="eventblock" id="event' + e.id + '" \
      style="background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(100, 100, 100, 0.7)), url(\'' + (e.image ? e.image : 'image/DIY.jpg') + '\')"> \
      <div class="eventheader"> \
        <div class="eventtitle"> \
          <span>' + e.name + '</span> \
        </div> \
        <div class="eventtime"> \
        ' + (e.time ? e.time[0].toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }) + ' at ' + e.time[0].toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'}) : 'TBD') + ' \
        </div> \
        <div class="eventpeople"> \
          ' + (e.participants.length === 1 ? 'You' :
          e.participants.length === 2 ? e.participants[0].name + ' and You' :
          e.participants[0].name + ', ' + e.participants[1].name + ', and ' + (e.participants.length - 2) + ' people') + ' \
        </div> \
      </div> \
    </div>'
  ))

  $('#pendingInvitations').html(pendingInvitations.map(e => ' \
    <div class="eventblock" id="event' + e.id + '" \
      style="background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(100, 100, 100, 0.7)), url(\'' + (e.image ? e.image : 'image/DIY.jpg') + '\')"> \
      <div class="eventheader"> \
        <div class="eventtitle"> \
          <span>' + e.name + '</span> \
        </div> \
        <div class="eventtime"> \
        ' + (e.time ? e.time[0].toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }) + ' at ' + e.time[0].toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'}) : 'TBD') + ' \
        </div> \
        <div class="eventpeople"> \
          ' + (e.participants.length === 1 ? 'You' :
          e.participants.length === 2 ? e.participants[0].name + ' and You' :
          e.participants[0].name + ', ' + e.participants[1].name + ', and ' + (e.participants.length - 2) + ' people') + ' \
        </div> \
      </div> \
    </div>'
  ))

  $('#eventHistory').html(eventHistory.map(e => ' \
    <div class="eventblock" id="event' + e.id + '" \
      style="background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(100, 100, 100, 0.7)), url(\'' + (e.image ? e.image : 'image/DIY.jpg') + '\')"> \
      <div class="eventheader"> \
        <div class="eventtitle"> \
          <span>' + e.name + '</span> \
        </div> \
        <div class="eventtime"> \
          ' + e.time[0].toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }) + ' at ' + e.time[0].toLocaleString('en-US', {hour: '2-digit', minute: '2-digit'}) + ' \
        </div> \
        <div class="eventpeople"> \
        ' + (e.participants.length === 1 ? 'You' :
        e.participants.length === 2 ? e.participants[0].name + ' and You' :
        e.participants[0].name + ', ' + e.participants[1].name + ', and ' + (e.participants.length - 2) + ' people') + ' \
        </div> \
      </div> \
    </div>'
  ))

  $('.eventblock').click(e => {
    store.dispatch({
      type: 'event',
      subtype: 'set',
      payload: store.getState().events.find(event => event.id === Number(e.currentTarget.id.slice(5)))
    })
    store.dispatch({
      type: 'mainPageHide',
      payload: true
    })
    store.dispatch({
      type: 'subnav',
      payload: 'eventDetail'
    })
  })
})

$('.eventadd').click(() => {
  store.dispatch({
    type: 'mainPageHide',
    payload: true
  })
  store.dispatch({
    type: 'subnav',
    payload: 'createEvent'
  })
  store.dispatch({
    type: 'event',
    subtype: 'set',
    payload: {
      participants: [{
        id: 0,
        name: "Sam"
      }]
    }
  })
})