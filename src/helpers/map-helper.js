import jmap from 'jmap.js'

const host = 'https://api.jibestream.com';
const customerId = parseInt(process.env.REACT_APP_CUSTOMER_ID, 10);
const JIBESTREAM_CLIENT_ID = process.env.REACT_APP_JIBESTREAM_CLIENT_ID;
const JIBESTREAM_SECRET= process.env.REACT_APP_JIBESTREAM_SECRET;

const venueId = process.env.REACT_APP_VENUE_ID;

export const setupMap = () => {
  const core = new jmap.core.JCore({
    host,
    auth: new jmap.core.Auth(
      JIBESTREAM_CLIENT_ID,
      JIBESTREAM_SECRET
    ),
    customerId,
    venueId: 443,
    showAllAmenities: true,
    showAllPathTypes: true,
  })

  return new Promise((resolve, reject) => {
    core.populateVenueByVenueId(venueId, (error, activeVenue) => {
      if (error) {
        console.log('error populating active venue', error);
        return reject(error)
      }
      const buildingId = activeVenue.buildings.getDefault().id
      return core.populateBuildingInVenue(activeVenue, buildingId, (err2) => {
        if (err2) {
          console.log('error populating buidling in venue', err2);
          return reject(err2)
        }
        resolve(activeVenue)
      })
    })
  })
};
