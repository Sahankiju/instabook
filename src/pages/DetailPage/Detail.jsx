import Navbar from "../../components/Navbar/Navbar";
import DetailMain from "./DetailMain";

function DetailPage({selectedBook}) {
  return (
      <DetailMain selectedBook={selectedBook}/>
  );
}

export default DetailPage;
