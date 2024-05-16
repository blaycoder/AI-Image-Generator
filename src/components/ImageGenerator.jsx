import "../index.css";
import aiImage from "../assets/ai-image.jpg";
import { useState } from "react";
import { useRef } from "react";

export const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  const inputRef = useRef(null);
// sk - proj - e3bCPxCJ4mGFC7AQKM23T3BlbkFJ2M1ySw5YilFZThKYHoTR;

  const ImageGenerator = async ()=>{
    if(inputRef.current.value === ""){
        return 0;
    }
    const response = await fetch
  }

  return (
    <>
      <div className="flex m-auto flex-col items-center mt-4 mb-2 gap-3">
        <div className="text-xl p-4">AI IMAGE GENERATOR</div>
        <div>
          <img
            src={imageUrl === "/" ? aiImage : imageUrl}
            alt="AI image"
            className="w-48"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-around items-center bg-slate-500 w-full rounded-full gap-3 h-12">
          <div>
            <input
              type="text"
              placeholder="Describe what you want to see"
              className="h-12 w-96 text-lg pl-4 mr-4 placeholder:italic"
              ref={inputRef}
            />
          </div>
          <div>
            <button className="text-black">Generate</button>
          </div>
        </div>
      </div>
    </>
  );
};
