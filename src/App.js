import React from "react";
import ImageCard from "./components/Imagecard";
import galleryData from "./components/galleryData";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Image Gallery</h1>

      <div className="gallery">
        {galleryData.map((item) => (
          <ImageCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;