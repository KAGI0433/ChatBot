import React from "react";

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <div className="text-center mt-4">
      <p className="text-blue-500">Loading...</p>
    </div>
  ) : null;
};

export default Loading;
