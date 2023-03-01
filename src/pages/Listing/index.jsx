import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import theCatAPI from "../../network/catapi";
import "./style.css";

const Listing = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    theCatAPI(`/images/search?breed_ids=${id}`)
      .then((res) => {
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div id="gallery">
      <div id="buttonWrapper">
        <button onClick={handleBack}>{"<"} Go Back</button>
      </div>
      {loading && <div className="card-title">Loading images...</div>}
      {!loading && list.length === 0 && (
        <div className="card-title">No images available</div>
      )}
      {!loading &&
        list.length > 0 &&
        list.map((item) => <img src={item.url} key={item.id} />)}
    </div>
  );
};
export default Listing;
