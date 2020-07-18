import Airtable from "airtable"

const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(
  "appVqolaLSPFh2oSw"
)

const sendRsvpToAirtable = rsvp => {
  const updates = rsvp.attendees.map((name, i) => {
    return {
      id: rsvp.ids[i],
      fields: {
        name: name,
        RSVP: String(rsvp.rsvps[i]),
        dinner: rsvp.meals[i],
        "dietary restrictions": rsvp.restrictions[i],
      },
    }
  })
  base("Guests").update([...updates], err => {
    if (err) {
      console.error(err)
      return
    }
  })
}

const getNamesFromAirtable = async () => {
  return base("Guests")
    .select({
      sort: [{ field: "name", direction: "desc" }],
      fields: [
        "name",
        "RSVP",
        "related guests",
        "dinner",
        "dietary restrictions",
      ],
    })
    .all()
    .then(records => {
      return records
    })
    .catch(e => console.error(e))
}

export { sendRsvpToAirtable, getNamesFromAirtable }
