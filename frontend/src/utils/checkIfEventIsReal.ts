import LostInterface from "../interfaces/LostInterface";

function deg2rad(deg: number) {
    return deg * (Math.PI/180)
    }

function distanceBetweenCoordinates(lat1: number, lon1: number, lat2: number, lon2:number) {
    const R = 6371;
    const dLat = deg2rad(lat2-lat1);
    const dLon = deg2rad(lon2-lon1); 
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c;
    return d;
    }
  
const compareDate = (date1: string, date2: string) => date1 === date2

const compareEvents = (event1: string, event2: string) => event1 === event2

const checkEvent = (losts: LostInterface[], lost: LostInterface) => {
  const divergentEvent = losts.find((lostEvent) => {
      const distance = distanceBetweenCoordinates(
          lost.latitude,
          lost.longitude,
          lostEvent.latitude,
          lostEvent.longitude
          );
      const dateIsTheSame = compareDate(lost.date, lostEvent.date);
      const eventIsTheSame = compareEvents(lost.event, lostEvent.event)
      return distance <= 10 && dateIsTheSame && !eventIsTheSame
  })
  return divergentEvent;
}

export default checkEvent;
