import SpinnerGIF from "../assets/Spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={SpinnerGIF}
        className="d-block m-auto"
        style={{ width: "200px" }}
       alt={"⏳ در حال بررسی برای نمایش اشخاص"}/>
    </>
  );
};

export default Spinner;
