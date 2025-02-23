import React, { useEffect, useState } from "react";
import getSubdomain from "../helpers/hostname";
const hostName = getSubdomain();

const db = [
  {
    _id: "677d7422c99435ecb736b43c",
    name: "Mosque Test 1",
    slug: "mosque-1",
    address: {
      street: "123 Main Street",
      city: "springfield",
      state: "illinois",
      stateCode: "il",
      country: "united states",
      countryCode: "US",
      postalCode: "62701",
      coordinates: {
        latitude: 39.7817,
        longitude: -89.6501,
      },
    },
    timings: {
      fajr: {
        azaan: "05:15",
        jamaat: "05:30",
      },
      dhuhr: {
        azaan: "12:30",
        jamaat: "12:45",
      },
      asr: {
        azaan: "15:45",
        jamaat: "16:00",
      },
      maghrib: {
        azaan: "18:30",
        jamaat: "18:45",
      },
      isha: {
        azaan: "20:00",
        jamaat: "20:15",
      },
      jumma: {
        azaan: "13:15",
        jamaat: "13:30",
        qutba: "13:10",
      },
    },
  },
  {
    _id: "676d952088641d5826b1a994",
    name: "Jamia Masjid",
    slug: "jamia-masjid",
    address: {
      street: "jataprole",
      city: "nagar karnul",
      state: "telangana",
      stateCode: "tg",
      country: "india",
      countryCode: "IN",
      postalCode: "509105",
      coordinates: {
        latitude: 16.4821,
        longitude: 78.32471,
      },
    },
    timings: {
      fajr: {
        azaan: "05:15",
        jamaat: "05:30",
      },
      dhuhr: {
        azaan: "12:30",
        jamaat: "12:45",
      },
      asr: {
        azaan: "15:45",
        jamaat: "16:00",
      },
      maghrib: {
        azaan: "18:30",
        jamaat: "18:45",
      },
      isha: {
        azaan: "20:00",
        jamaat: "20:15",
      },
      jumma: {
        azaan: "13:15",
        jamaat: "13:30",
        qutba: "13:10",
      },
    },
  },
  {
    _id: "673e19244f630ca743c7abce",
    name: "Alfalah Mosque",
    slug: "alfalahmosque",
    address: {
      street: "123 Main Street",
      city: "springfield",
      state: "illinois",
      stateCode: "il",
      country: "united states",
      countryCode: "US",
      postalCode: "62701",
      coordinates: {
        latitude: 39.7817,
        longitude: -89.6501,
      },
    },
    timings: {
      fajr: {
        azaan: "05:31",
        jamaat: "05:30",
      },
      dhuhr: {
        azaan: "12:30",
        jamaat: "12:45",
      },
      asr: {
        azaan: "15:45",
        jamaat: "16:00",
      },
      maghrib: {
        azaan: "18:30",
        jamaat: "18:45",
      },
      isha: {
        azaan: "20:00",
        jamaat: "20:15",
      },
      jumma: {
        azaan: "13:15",
        jamaat: "13:30",
        qutba: "13:10",
      },
    },
  },
  {
    _id: "673e19244f630ca743c7abce",
    name: "Alfalah Mosque",
    slug: "test",
    address: {
      street: "123 Main Street",
      city: "springfield",
      state: "illinois",
      stateCode: "il",
      country: "united states",
      countryCode: "US",
      postalCode: "62701",
      coordinates: {
        latitude: 39.7817,
        longitude: -89.6501,
      },
    },
    timings: {
      fajr: {
        azaan: "05:31",
        jamaat: "05:30",
      },
      dhuhr: {
        azaan: "12:30",
        jamaat: "12:45",
      },
      asr: {
        azaan: "15:45",
        jamaat: "16:00",
      },
      maghrib: {
        azaan: "18:30",
        jamaat: "18:45",
      },
      isha: {
        azaan: "20:00",
        jamaat: "20:15",
      },
      jumma: {
        azaan: "13:15",
        jamaat: "13:30",
        qutba: "13:10",
      },
    },
  },
];
const Detail = () => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    let data = db.find((item) => item.slug === hostName);
    setInfo({ ...data });
  }, []);

  if (!info) return <div>Loading...</div>;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      {info ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-4">{info.name}</h1>
          <p className="text-gray-600 text-center mb-4">
            {info.address.street}, {info.address.city},{" "}
            {info.address.stateCode.toUpperCase()}, {info.address.countryCode}
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Prayer Timings</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(info.timings).map(([prayer, timing]) => (
                <div key={prayer} className="bg-gray-100 p-3 rounded-md">
                  <h3 className="text-lg font-medium capitalize">{prayer}</h3>
                  <p className="text-gray-700">Azaan: {timing.azaan}</p>
                  <p className="text-gray-700">Jamaat: {timing.jamaat}</p>
                  {timing.qutba && (
                    <p className="text-gray-700">Qutba: {timing.qutba}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No information available</p>
      )}
    </div>
  );
};

export default Detail;
