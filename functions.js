// imports
import {useEffect, useState} from "react";
import Axios from "axios";    // npm install axios

// fetches announcements
export const getAnnouncements = async () => {

  // creates an object state 
  const [announcements, setAnnouncements] = useState(null);

  // useEffect ensures data is only fetched once 
  useEffect(() => {
    async function fetchData() {
  
      await Axios.get("https://globalislamic.org/wp-json/wp/v2/posts").then((res) => {
        
      // saves JSON data to the state 
      setAnnouncements(res.data[0]);
      });
    }
    fetchData();
  }, []);
 
  // determines number of announcements 
  let announceNum = 0;

  if (announcements != null) 
    announceNum = Object.keys(announcements).length;

  // returns 
  const announcementsArr = [];
  for (let i = 0; i < announceNum; i++)
    announcementsArr[i] = Object.values(announcements[i].title);

  return announcementsArr;
}

// fetches prayer times 
export const getPrayerTimes = async () => {

  // creates an object state 
  const [prayerTime, setPrayerTime] = useState(null);

  // useEffect ensures data is only fetched once 
  useEffect(() => {
    async function fetchData() {

      await Axios.get("http://globalislamic.org/wp-json/dpt/v1/prayertime?filter=today").then((res) => {
        
      // saves JSON data to the state 
      setPrayerTime(res.data[0]);
      });
    }
    fetchData();
  }, []);

  // returns 
  if (prayerTime != null) return prayerTime;
  
  // output
  /*
  if (prayerTime != null) {
    console.log("       Masjid Al-Rayyan");
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
    console.log("Isha      " + prayerTime?.isha_begins + "    " + prayerTime?.isha_jamah);
  }
 */ 
}

// eWorx function to get data 
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
