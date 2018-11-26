const freeze = Object.freeze

const createChristmasParty = date => {
  const partyDate = date
  let invitees = []
  let attendees = []

  return freeze({
    sendInvites: function (...friends) {
      invitees = [...friends, ...invitees]
      return this
    },
    acceptInvites: function (...friends) {
      attendees = [...friends, ...attendees]
      invitees = invitees.filter(x => !friends.includes(x))
      return this
    },
    getAttendees: () => attendees,
    getInvites: () => invitees,
    getDate: () => partyDate
  })
}
