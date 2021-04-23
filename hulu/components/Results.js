import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ requests }) => {
  return (
    <FlipMove>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {requests.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </div>
    </FlipMove>
  );
};

export default Results;
