import coderoyale from "../../assets/coderoyale.png";

export default function Header() {
  return (
    <div className="navbar bg-[#05050D] h-[8vh]">
      <div className="navbar-start">
        <img
          src={coderoyale}
          alt="CodeRoyale"
          className="object-contain w-[10vw] ml-[1vw]"
        />
      </div>
    </div>
  );
}
