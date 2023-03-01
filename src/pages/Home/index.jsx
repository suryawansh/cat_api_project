import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import theCatAPI from "../../network/catapi";
import "./style.css";

const Home = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    theCatAPI(`/breeds`)
      .then((res) => {
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
  const handleClick = (id) => {
    history.push(id);
  };
  return (
    <div id="listing">
      {loading && <div className="card-title">Loading breeds...</div>}
      {!loading && list.length === 0 && (
        <div className="card-title">No Breeds available</div>
      )}
      {!loading &&
        list.length > 0 &&
        list.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <p className="card-title">{item.name}</p>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
    </div>
  );
};
export default Home;
