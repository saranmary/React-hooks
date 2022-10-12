import React from "react";
import {BsStarFill,BsStarHalf,BsCart} from "react-icons/bs"
import {BiRupee} from "react-icons/bi"


const Books = [

  { 
    id:1,
    img:" https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    title:"Ikigai Hardcover - 27 September 2017",
    author:"by Héctor García",
    price:'257.00',
    rs:'327.00',
  },

  {
    id:2,
    img:"https://m.media-amazon.com/images/I/51W-r3VQlAL._SX320_BO1,204,203,200_.jpg",
    title:"It Starts With Us Paperback - 18 October 2022",
    author:"by Colleen Hoover",
    price:'439.00',
    rs:'517.00',
    
  },

  {
    id:3,
    img:"https://m.media-amazon.com/images/I/51g1+ePgYCL._SX430_BO1,204,203,200_.jpg",
    title:"SPARKS OF PHOENIX Paperback - 5 March 2019", 
    author:"by Najwa Zebian" ,
    price:'393.00',
    rs:'467.00',
  },

  {
    id:4,
    img:"https://m.media-amazon.com/images/I/41QPBtd5VIS._SX460_BO1,204,203,200_.jpg",
    title:"Siddhartha Paperback - 1 January 2012",
    author:"by Hermann Hesse",
    price:'92.00',
    rs:'154.00',
  },
  {
    id:5,
    img:"https://m.media-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
    title:"The Alchemist Paperback - 17 October 2005",
    author:"by Paulo Coelho",
    price:'188.00',
    rs:'250.00',
  },

  {
    id:6,
    img:"https://m.media-amazon.com/images/I/51tiopcLhuS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "As a Man Thinketh Paperback - 6 November 2017", 
    author:"by James Allen",
    price:'69.00',
    rs:'105.00',
  
  },

]

function BookList (){
  return(
    <section className="booklist">
      {Books.map((book)=>{

        return <Book book={book} key={book.id}></Book>;
      })}
    </section>
  )
}
const Book = (props) =>{
  const {img,title,author,price,rs}=props.book;
  return(
    <article className="book"> 
      <img
      src={img}
      />
    
      <article className="book1">
      <div className="tt">{title}</div>
      <div className="at">{author}</div>
      <div className="rt"><span>Rating:</span><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>
      <div className="pr"><span><BiRupee/></span>{price}</div>
      <div className="mrp">M.R.P :{rs}</div>
      <button  classname="btn" onClick={Change}><BsCart/> ADD TO CART</button>
      </article>
    
      
    </article>
  );
}

function Change() {
  alert('ADDED TO CART');
}
  



export default BookList;
 														                 
