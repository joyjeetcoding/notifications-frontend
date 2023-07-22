import React, { useState } from "react";
import Markwebber from "./assets/Markwebber.webp";
import Angelagray from "./assets/Angelagray.webp";
import Jacobthompson from "./assets/Jacobthompson.webp";
import Rizkyhasanuddin from "./assets/Rizkyhasanuddin.webp";
import Kimberlysmith from "./assets/Kimberlysmith.webp";
import Chess from "./assets/Chess.webp";
import Nathanpeterson from "./assets/Nathanpeterson.webp";
import Annakim from "./assets/Annakim.webp";

function App() {

  const[count, setCount] = useState(3);


  const Reset = () => {
    setCount(0);
  }

  

  return (
    <div className="">

      <div className="main-div p-5 font-writing sm:max-w-md md:mx-auto md:max-w-3xl bg-white md:my-10 md:rounded-2xl">
        <div className="navbar flex justify-between">
          <div className="flex">
            <h2 className="font-semibold text-xl">Notifications</h2>
            <p className="px-3 rounded-md mx-2 font-writing bg-[#0a317b] text-white font-medium">{count}</p>
          </div>
          <div>
            <button onClick={Reset} className="text-[#5e6778] hover:text-[#0a317b] hover:font-medium tracking-wide">Mark all as read</button>
          </div>
        </div>
        <div>
          <div className="user-1 flex p-3 mt-4 my-2 bg-[#f7fafd] rounded-md">
            <img src={Markwebber} alt="/" className="w-[13%] h-[19%] md:w-[6%]" />
            <div className="mx-2 relative">
              <div className="tracking-wide flex">
                <p><span className="font-bold hover:text-[#0a317b] hover:cursor-pointer">Mark Webber</span> reacted to your recent post.
                  <span className="font-semibold text-[#5e6778] hover:text-[#0a317b] hover:cursor-pointer"> My first tournament today!
                  <span className="w-2 h-2 bg-[#f65351] rounded-full inline-block ml-[7px]"></span></span>
                </p>
              </div>
              <p className="text-[#5e6778]">1m ago</p>
            </div>
          </div>
          <div className="user-2 flex p-3  my-2 bg-[#f7fafd] rounded-md">
            <img src={Angelagray} alt="/" className="w-[13%] h-[19%] md:w-[6%]" />
            <div className="mx-2 relative w-full">
              <div className="tracking-wide ">
                <p><span className="font-bold hover:text-[#0a317b] hover:cursor-pointer">Angela Gray</span> followed you
                <span className="w-2 h-2 bg-[#f65351] rounded-full inline-block ml-[7px]"></span></p>
              </div>
              <p className="text-[#5e6778]">5m ago</p>
            </div>
          </div>
          <div className="user-3 flex p-3  my-2 bg-[#f7fafd] rounded-md">
            <img src={Jacobthompson} alt="/" className="w-[13%] h-[19%] md:w-[6%]" />
            <div className="mx-2 relative w-full">
              <div className="tracking-wide ">
                <p><span className="font-bold hover:text-[#0a317b] hover:cursor-pointer">Jacob Thompson</span> has joined your group <span className="font-bold text-[#5e6778] hover:text-[#0a317b] hover:cursor-pointer">Chess Club</span>
                <span className="w-2 h-2 bg-[#f65351] rounded-full inline-block ml-[7px]"></span></p>
              </div>
              <p className="text-[#5e6778]">1 day ago</p>
            </div>
          </div>
          <div className="user-4 flex p-3 my-2 ">
              <img src={Rizkyhasanuddin} alt="/" className="w-[13%] h-[19%] md:w-[6%]" />
            <div className="mx-2 relative w-full">
              <div className="tracking-wide ">
                <p><span className="font-bold hover:text-[#0a317b] hover:cursor-pointer">Rizky Hasanuddin</span> sent you a private message</p>
                <p className="text-[#5e6778]">5 days ago</p>
              </div>
              <div className="border border-[#5e6778] border-opacity-[0.3] rounded-md p-5 my-4 hover:bg-[#dde7ee] cursor-pointer">
                <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
              </div>
            </div>
          </div>
          <div className="user-5 flex p-3 my-2">
            <img src={Kimberlysmith} alt="/" className="w-[13%] h-[19%] md:w-[6%]" />
            <div className="mx-2 relative w-full tracking-wide ">
              <p><span className="font-bold hover:text-[#0a317b] hover:cursor-pointer">Kimberly Smith</span> commented on your picture</p>
              <p className="text-[#5e6778]">1 week ago</p>
            </div>
            <img src={Chess} alt="/" className="w-[13%] h-[19%] cursor-pointer md:w-[6%]" />
          </div>
          <div className="user-6 flex p-3 my-2">
            <img src={Nathanpeterson} alt="/" className="w-[13%] h-[19%] md:w-[6%]" />
            <div className="mx-2 relative w-full tracking-wide ">
              <p><span className="font-bold hover:text-[#0a317b] hover:cursor-pointer">Nathan Peterson</span> reacted to your recent post <span className="font-bold text-[#5e6778]">5 end-game strategies to increase your win rate</span></p>
              <p className="text-[#5e6778]">2 weeks ago</p>
            </div>
          </div>
          <div className="user-7 flex p-3 my-2">
            <img src={Annakim} alt="/" className="w-[13%] h-[19%] md:w-[6%]" />
            <div className="mx-2 relative w-full tracking-wide ">
              <p><span className="font-bold hover:text-[#0a317b] hover:cursor-pointer"> Anna Kim</span> left the group <span className="font-bold text-[#0a317b]">Chess Club</span></p>
              <p className="text-[#5e6778]">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
