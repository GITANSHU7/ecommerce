import React, { useEffect , useState } from 'react'
import { getUserDeatils } from '../functions/user'
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, register } from '../components/actions/userActions';
import { Link } from 'react-router-dom';
import { fetchProductsByFilter, getProductsByCount } from '../functions/product';
import TestCard from '../components/cards/TestCard';
import { getBrands } from '../functions/brand';
import { getModels } from '../functions/model';
import styled from "styled-components";


const Row = styled.div`
margin = 0 0 0 50px;


`;

const Input = styled.input`

max-width = 400px

`;

const Sort = styled.div`
margin = 0 0 0 0;


`;

const Name = styled.h3`
float: left;
font-size: 20px;
margin-top: 5px;
margin-top : 5px;
`;

const Gallery = styled.div`
display: flex;
      flex-wrap: wrap;
   
      justify-content: center;
      align-items: center;
      `;

const Content = styled.div`
margin: 15px;
box-sizing: border-box;
float: left;
text-align: center;
border-radius:10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
padding-top: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
transition: .4s;
`;


const Image = styled.img`
width: 100%;
height: 200px;
text-align: center;
margin: 0 auto;
display: block;
`;

const Price = styled.h6`
font-size: 15px;
float: right;
color: #222f3e;
margin: 0;
`;
const BUTTON = styled.button`
text-align: center;
      font-size: 15px;
      color: #fff;
      width: 100%;
      padding: 15px;
      border:0px;
      outline: none;
      cursor: pointer;
      margin-top: 5px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color : #FFB344;
      `;

const Heart = styled.i`
color : red;
font-size: 26px;
      transition: .4s;


`;

const Testing3 = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState([0, 0]);
    const [ok, setOk] = useState(false);
    const [brands , setBrands] = useState([])
    const [brand, setBrand] = useState('')
    const [models , setModels] = useState([])
    const [model,setModel] = useState('')
    const [types , setTypes] = useState(["Engine Oil" , "Air Filter", "Tyre","Oil Filter","Battery", "Spares and Maintainance Kit", "Accessories"]);
    const [type,setType] = useState('')
    
    let dispatch = useDispatch();
    let { search } = useSelector((state) => ({ ...state }));
    const { text } = search;
  
    useEffect(() => {
      loadAllProducts();
      getBrands().then((res) => {
        setBrands(res.data)
  
      getModels().then((res) => setModels(res.data));
      })
    }, []);
  
    const fetchProducts = (arg) => {
      fetchProductsByFilter(arg).then((res) => {
        setProducts(res.data);
      });
    };
  
    // 1. load products by default on page load
    const loadAllProducts = () => {
      getProductsByCount(12).then((p) => {
        setProducts(p.data);
        setLoading(false);
      });
    };
  
    // 2. load products on user search input
    useEffect(() => {
      const delayed = setTimeout(() => {
        fetchProducts({ query: text });
        if (!text) {
          loadAllProducts();
        }
      }, 300);
      return () => clearTimeout(delayed);
    }, [text]);
  
  
    // 3. load products based on price range
    useEffect(() => {
      console.log("ok to request");
      fetchProducts({ price });
    }, [ok]);
  
    const handleType = (e) => {
    
        dispatch({
          type: "SEARCH_QUERY",
          payload: { text: "" },
        });
        
        setType(e.target.value);
        fetchProducts({ type: e.target.value });
      };


return (
<>
<div className="filter_menu">
<Row>
               
                <select name="category"  onChange={handleType} >
                    <option value=''>Product Type</option>
                    {
                        types.map(t => (
                            <option value={t} key={t}>
                                {t}
                            </option>
                        ))
                    }
                </select>
            </Row>

            <form>
  <input type="text" name="search" placeholder="Search.." />
</form>
 </div>
 <Gallery>
      <Content>
        <Heart className="fa fa-heart"/>
        <Image src="https://i.imgur.com/zEKgulH.jpg" />
        
        <Name>Shoes</Name>
       
        <Price>₹100.00</Price>
       
        <BUTTON class="buy-1">Buy Now</BUTTON>
      </Content>
      <Content>
        <Image src="https://i.imgur.com/zEKgulH.jpg" />
        <Name>Shoes</Name>
       
        <Price>₹100.00</Price>
       
        <BUTTON class="buy-1">Buy Now</BUTTON>
      </Content>
      <Content>
        <Image src="https://i.imgur.com/zEKgulH.jpg" />
        <Name>Shoes</Name>
       
        <Price>₹100.00</Price>
       
        <BUTTON class="buy-1">Buy Now</BUTTON>
      </Content>
      <Content>
        <Image src="https://i.imgur.com/zEKgulH.jpg" />
        <Name>Shoes</Name>
       
        <Price>₹100.00</Price>
       
        <BUTTON class="buy-1">Buy Now</BUTTON>
      </Content>
      <Content>
        <Image src="https://i.imgur.com/zEKgulH.jpg" />
        <Name>Shoes</Name>
       
        <Price>₹100.00</Price>
       
        <BUTTON class="buy-1">Buy Now</BUTTON>
      </Content>
      <Content>
        <Image src="https://i.imgur.com/zEKgulH.jpg" />
        <Name>Shoes</Name>
       
        <Price>₹100.00</Price>
       
        <BUTTON class="buy-1">Buy Now</BUTTON>
      </Content>
      <Content>
        <Image src="https://i.imgur.com/zEKgulH.jpg" />
        <Name>Shoes</Name>
       
        <Price>₹100.00</Price>
       
        <BUTTON class="buy-1">Buy Now</BUTTON>
      </Content>
      </Gallery>
</>

);


}




export default Testing3;