import WeatherComponent from "./components/WeatherComponent";



function App() {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-rose-400 to-orange-300 flex flex-col justify-center items-center">
      <div className=" bg-opacity-10 bg-white px-4 py-6 rounded-lg mt-2 mb-2">
        <WeatherComponent />
      </div>
    </div>
  );
}

export default App;
