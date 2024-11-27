import { useState } from "react";
import { FaMapPin, FaSignOutAlt } from "react-icons/fa";
import Header from "./Header";
import Menu from "./Menu";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Marion Jotohot",
    bio: "Adventure Enthusiast",
    trips: 24,
    countries: 12,
    reviews: 89,
    recentTrips: [
      { location: "Tinuy-an Falls, Surigao City", date: "2 weeks ago" },
      { location: "Masao Beach, Butuan City", date: "1 month ago" },
      { location: "Spot Sample, Sample City", date: "3 months ago" },
      { location: "Spot Sample, Sample City", date: "3 months ago" },
      { location: "Spot Sample, Sample City", date: "3 months ago" },
      { location: "Spot Sample, Sample City", date: "3 months ago" },
      { location: "Spot Sample, Sample City", date: "3 months ago" },
      { location: "Spot Sample, Sample City", date: "3 months ago" },
    ],
  });

  return (
    <>
      <div className="max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col font-mono">
        <Header />
        <main className="flex-grow p-4 mt-20 pb-24">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-4">
                <img
                  src="https://placehold.co/400"
                  alt="Profile Picture"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-xl font-bold">{userProfile.name}</h2>
                  <p className="text-gray-600">{userProfile.bio}</p>
                </div>
              </div>
              <button className="w-full rounded-full flex items-center justify-center bg-red-500 text-white px-4 py-3 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mt-7">
                <FaSignOutAlt className="h-5 w-5 mr-2" />
                Sign Out
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Trips</h3>
              <ul className="space-y-4">
                {userProfile.recentTrips.map((trip, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <FaMapPin className="h-5 w-5 text-blue-500" />
                    <span>{trip.location}</span>
                    <span className="text-sm text-gray-500 ml-auto">
                      {trip.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>

        <Menu />
      </div>
    </>
  );
};

export default Profile;
