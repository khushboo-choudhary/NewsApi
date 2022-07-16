import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Newscards } from "./Newscards";
// import {Link} from "react-router-dom";
// import { Newscards } from './components/Newscards';

export const News = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  console.log("Data", data);
  const handleData = () => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${search}&token=615b05617863562d14a1ea401f0a3294`
      )
      .then((res) => {
        setData(res.data.articles);
        console.log("all", res.data.articles)
      });
  };

  return (
    <>
      <div>
       
        <input
          label="Search..."
          onChange={(e) => setSearch(e.target.value)}/>
        <SearchIcon
          style={{ width: "50px", height: "50px", marginLeft: "10px" }}
          onClick={handleData}
        />
      </div>
      
      <div className='detailsDiv'>
        {data.map((article)=>{
            return(
                <div onClick={()=> {navigate("/newscards")}}>
                    <div><h3>{article.title}</h3></div>
                    <h6><b>Source:{article.source.name}</b>
                    </h6>
                    <h6><b>Source:{article.source.url}</b></h6>
                    <div><img src={article.image} alt="" /></div>
                   
                </div>
            )
        })}
    </div>
<div><Newscards data={data}/></div>
    </>
  );
};
