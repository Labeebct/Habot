import Linkidin from "/assets/linkidin.png";
import Twitter from "/assets/twitter.png";
import Facebook from "/assets/facebook.png";
import insta from "/assets/insta.png";

const Footer = () => {
  return (
      <footer className="h-auto min-h-[260px] w-full bg-[#123557] flex items-center justify-center p-4">
        <div className="h-auto w-full md:w-[80%] flex flex-col md:flex-row border-t-[1px]  border-b-[1px] border-t-[#ffffff4c] border-b-[#ffffff4c] py-10">
          <div className="left w-full md:w-[60%] flex flex-col md:flex-row md:items-center">
            <div className="flex flex-col items-center md:items-start w-full md:w-[30%] p-4 md:p-0 gap-2">
              <img
                src="/assets/LogoWhite.png"
                alt="Logo"
                className="w-[206px] h-[40.15px]"
              />
              <p className="text-[16px] font-Poppins font-[300] leading-[32px] text-white">
                © R Singhania
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:ml-14 mt-4 md:mt-0 w-full md:w-[70%] text-center md:text-left">
              <div className="flex flex-col text-white gap-2">
                <h1 className="font-bold">Company</h1>
                <div className="flex flex-col">
                  <a href="#">About</a>
                  <a href="#">FAQ</a>
                </div>
              </div>
              <div className="flex flex-col text-white gap-2">
                <h1 className="font-bold">Terms</h1>
                <div className="flex flex-col">
                  <a href="#">Data privacy</a>
                  <a href="#">Terms</a>
                  <a href="#">Accessibility</a>
                </div>
              </div>
              <div className="flex flex-col text-white gap-2">
                <h1 className="font-bold">Related</h1>
                <div className="flex flex-col">
                  <a href="#">Find Buyer</a>
                  <a href="#">Feedback</a>
                </div>
              </div>
            </div>
          </div>
          <div className="right w-full md:w-[40%] flex justify-center md:justify-end items-center gap-4 mt-4 md:mt-0">
            <div className="w-[40px] h-[40px] rounded-full border-2 border-[#ffffff4c] flex items-center justify-center">
              <img
                src={Linkidin}
                alt="LinkedIn"
                className="w-[18px] h-[18px]"
              />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border-2 border-[#ffffff4c] flex items-center justify-center">
              <img src={Twitter} alt="Twitter" className="w-[18px] h-[18px]" />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border-2 border-[#ffffff4c] flex items-center justify-center">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-[18px] h-[18px]"
              />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border-2 border-[#ffffff4c] flex items-center justify-center">
              <img src={insta} alt="Instagram" className="w-[18px] h-[18px]" />
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
