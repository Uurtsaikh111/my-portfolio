import { useTheme } from "@/context/ChangeTheme";

export default function Contact() {
  const { theme } = useTheme();
  const containerClassName = theme === "light" ? "bg-white text-black" : "bg-black text-white";

  return (
    <div className={`min-h-screen ${containerClassName} p-4`}>
      <div className="container mx-auto flex flex-col gap-8 px-4 py-8 items-center md:px-8 md:py-12 lg:px-16 lg:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Contact Us</h2>
        <p className="text-base md:text-lg lg:text-xl max-w-screen-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        
        <div className="flex flex-col items-center justify-between md:flex-row gap-8 py-4">
          <div className="flex flex-col gap-4 p-4 bg-gray-200 rounded-md md:w-2/3">
            <h4 className="text-lg font-semibold">Address</h4>
            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-gray-200 rounded-md md:w-2/3">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p>313-332-8662</p>
            <p>info@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
