// imports
import {useEffect, useState} from "react";
import Axios from "axios";

function functions() {

  // creates an object state 
  const [announcements, setAnnouncements] = useState(null);

  // useEffect ensures data is only fetched once 
  useEffect(() => {

    // get request with api via axios 
    Axios.get("https://globalislamic.org/?mec-ical-feed=1").then((res) => {
      
      // saves JSON data to the state 
      setAnnouncements(res.data);
    });
  }, []);
 
  console.log(announcements);
}
export default functions;

// fetches announcements
export const getAnnouncements = async () => {

  // creates an object state 
  const [announcements, setAnnouncements] = useState(null);

  // useEffect ensures data is only fetched once 
  useEffect(() => {

    // get request with api via axios 
    Axios.get("https://globalislamic.org/wp-json/wp/v2/posts").then((res) => {
      
      // saves JSON data to the state 
      setAnnouncements(res.data);
    });
  }, []);
 
  // determines number of announcements 
  let announceNum = 0;

  if (announcements != null) 
    announceNum = Object.keys(announcements).length;
  
  // outputs    
  for (let i = 0; i < announceNum; i++)
    console.log(Object.values(announcements[i].title));
}

// fetches prayer times 
export const getPrayerTimes = async () => {

  // creates an object state 
  const [prayerTime, setPrayerTime] = useState(null);

  // useEffect ensures data is only fetched once 
  useEffect(() => {

    // get request with api via axios 
    Axios.get("http://globalislamic.org/wp-json/dpt/v1/prayertime?filter=today").then((res) => {
      
      // saves JSON data to the state 
      setPrayerTime(res.data[0]);
    });
  }, []);
  
  // outputs 
  if (prayerTime != null) { 
    if (prayerTime.d_date != null) {
      return prayerTime.d_date;
    } else {
      console.log("Inner");
    }
    /*console.log("       Masjid Al-Rayyan");
    console.log("");
    console.log("          " + prayerTime?.d_date);
    console.log("  " + prayerTime?.hijri_date_convert);
    console.log("");

    console.log("          Iqama       Adhan");
    console.log("Fajr      " + prayerTime?.fajr_begins + "    " + prayerTime?.fajr_jamah);
    console.log("Sunrise   " + prayerTime?.sunrise);
    console.log("Zuhr      " + prayerTime?.zuhr_begins + "    " + prayerTime?.zuhr_jamah);
    console.log("Asr       " + prayerTime?.asr_mithl_1 + "    " + prayerTime?.asr_jamah);
    console.log("Maghrib   " + prayerTime?.maghrib_begins + "    " + prayerTime?.maghrib_jamah);
    console.log("Isha      " + prayerTime?.isha_begins + "    " + prayerTime?.isha_jamah);*/
  } else  {
    console.log("Outer");
  }
}

export const getData = async (url, params, headers) => {
  let retValue;
  await Axios
      .get(url, {params}, {headers})
      .then(res => {
          // return the res object
          retValue = res;
      })
      .catch(err => {
          retValue = {status: -1, statusText: err, data: null};
          logEvents(logSeverity.error, `getData: ${url}`, `Error >>> ${JSON.stringify(err)} | ${url} | ${JSON.stringify(params)}`);
      });
  return retValue;
};

// npm install axios


