import Logo from "@/app/components/common/Logo";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <Button>
        <span className="bg-white rounded-full h-8 w-8 grid place-items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
        <p className="mr-2">get started</p>
      </Button>
    </nav>
  );
}
