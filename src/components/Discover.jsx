import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import { FaCommentDots, FaStar } from "react-icons/fa";

const Discover = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [touristSpots, setTouristSpots] = useState([
    {
      id: 1,
      name: "Green House",
      image: "https://placehold.co/600x400",
      rating: 4.5,
      category: "Imanan sa Ampayon",
      comments: [
        { id: 1, user: "Marion", text: "Great place!", rating: 4 },
        { id: 2, user: "Marc", text: "I loved it!", rating: 5 },
        { id: 3, user: "Veronica", text: "I loved it!", rating: 5 },
        { id: 4, user: "Grace", text: "I loved it!", rating: 5 },
        { id: 5, user: "Chlei", text: "I loved it!", rating: 5 },
      ],
    },
    {
      id: 2,
      name: "Pink House",
      image: "https://placehold.co/600x400",
      rating: 4.7,
      category: "Imanan sa Ampayon",
      comments: [],
    },
    {
      id: 3,
      name: "Imnanan nga Aircon",
      image: "https://placehold.co/600x400",
      rating: 4.8,
      category: "Imanan sa Ampayon",
      comments: [
        { id: 1, user: "User1", text: "Great place!", rating: 4 },
        { id: 2, user: "User2", text: "I loved it!", rating: 3 },
      ],
    },
    {
      id: 4,
      name: "Unahan sa Ampayon",
      image: "https://placehold.co/600x400",
      rating: 4.8,
      category: "Imanan sa Ampayon",
      comments: [
        { id: 1, user: "User1", text: "Great place!", rating: 4 },
        { id: 2, user: "User2", text: "I loved it!", rating: 5 },
      ],
    },
  ]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage("");
  };

  const handleCommentOpen = (spot) => {
    setSelectedSpot(spot);
  };

  const handleCloseCommentModal = () => {
    setSelectedSpot(null);
    setNewComment("");
    setNewRating(5); // Reset the rating
  };

  const handleSubmitComment = () => {
    if (selectedSpot && newComment.trim() !== "") {
      const updatedSpot = {
        ...selectedSpot,
        comments: [
          ...selectedSpot.comments,
          {
            id: selectedSpot.comments.length + 1,
            user: "You",
            text: newComment,
            rating: newRating,
          },
        ],
      };
      const updatedTouristSpots = touristSpots.map((spot) =>
        spot.id === selectedSpot.id ? updatedSpot : spot
      );
      setTouristSpots(updatedTouristSpots);
      setNewComment("");
      setNewRating(5);
      handleCloseCommentModal();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col font-mono">
      <Header />
      <main className="flex-grow p-4 mt-20 pb-24">
        {/* Recommended for you section */}
        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <h3 className="text-xl font-semibold mb-4">Recommended for you</h3>
          <div className="flex space-x-4 overflow-x-auto">
            {touristSpots.map((spot) => (
              <div
                key={spot.id}
                className="w-32 h-32 rounded-lg overflow-hidden"
              >
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleImageClick(spot.image)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* List of tourist spots */}
        <div className="space-y-4">
          {touristSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={spot.image}
                alt={spot.name}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => handleImageClick(spot.image)}
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">{spot.name}</h2>
                  <span className="px-2 py-1 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-[#feda75] to-[#4f5bd5]">
                    {spot.rating}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{spot.category}</p>
                <div className="flex justify-end">
                  <button
                    className="flex items-center text-gray-600"
                    onClick={() => handleCommentOpen(spot)}
                  >
                    <FaCommentDots className="h-5 w-5 mr-1" />
                    Comments
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Menu />

      {/* Modal for Image Preview */}
      {isImageModalOpen && selectedImage && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
          onClick={handleCloseImageModal}
        >
          <div
            className="bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>
      )}

      {/* Modal for Comments */}
      {selectedSpot && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 font-bold">
          <div className="bg-white rounded-lg w-96 p-6">
            <h2 className="text-2xl font-semibold">{selectedSpot.name}</h2>
            <p className="text-gray-600">Leave a comment and rating:</p>
            <div className="space-y-4 mt-4">
              {/* Scrollable container for all comments */}
              <div className="overflow-y-auto max-h-56">
                {selectedSpot.comments.length > 0 ? (
                  selectedSpot.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="p-2 border-b border-gray-300"
                    >
                      <div className="flex items-center mb-1">
                        <span className="font-semibold">{comment.user}</span>
                        <div className="flex ml-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`h-4 w-4 ${
                                i < comment.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No comments yet.</p>
                )}
              </div>

              {/* Add new comment */}
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Write your comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Your rating:</span>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 cursor-pointer ${
                      i < newRating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setNewRating(i + 1)}
                  />
                ))}
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
                  onClick={handleCloseCommentModal}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={handleSubmitComment}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discover;
