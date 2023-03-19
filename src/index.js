import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Person = (props) => {
  return <h4>{props.person}</h4>;
};

const Title = (props) => {
  return <h2>{props.title}</h2>;
};

const Image = (props) => {
  return <img src={props.img} alt="Interesting Facts For Curious Minds" />;
};

const Book = (props) => {
  return (
    <article className="book">
      <Image img={props.img} />
      <Person person={props.person} />
      <Title title={props.title} />
    </article>
  );
};

const EventExample = () => {
  const handleFormInput = () => {
    console.log("You'r typing something on Input box.")
  }
  const habdleButtonClick = () => {
    alert("You just clicked search button.")
  }
  return (
    <section>
      <form>
        <h2> Search Book </h2>
        <input type="text" name="bookProduct" onClick={handleFormInput} style={{ margin: "1rem 0" }} />
      </form>
      <button onClick={habdleButtonClick}>Search</button>
    </section>
  );
};

// const firstBook = {
//   title: "Interesting Facts For Akash Minds",
//   person: "Jordan Moore",
//   img: "https://m.media-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
// };
// const secondBook = {
//   title: "Atomic Habits",
//   person: "James Clear",
//   img: "https://m.media-amazon.com/images/I/419hlQBPe6L._SY346_.jpg",
// };
// const thirdBook = {
//   title: "The 5 AM Club",
//   person: "Robin Sharma",
//   img: "https://m.media-amazon.com/images/I/41MC15v6UIL._SY344_BO1,204,203,200_.jpg",
// };

const bookList = [
  {
    title: "Interesting Facts For Akash Minds",
    person: "Jordan Moore",
    img: "https://m.media-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
    id: 1,
  },
  {
    title: "Atomic Habits",
    person: "James Clear",
    img: "https://m.media-amazon.com/images/I/419hlQBPe6L._SY346_.jpg",
    id: 2,
  },
  {
    title: "The 5 AM Club",
    person: "Robin Sharma",
    img: "https://m.media-amazon.com/images/I/41MC15v6UIL._SY344_BO1,204,203,200_.jpg",
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {/* <Book
        title={firstBook.title}
        person={firstBook.person}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        person={secondBook.person}
        img={secondBook.img}
      />
      <Book
        title={thirdBook.title}
        person={thirdBook.person}
        img={thirdBook.img}
      /> */}
      <EventExample />

      {bookList.map((book) => {
        return (
          <Book
            title={book.title}
            person={book.person}
            img={book.img}
            key={book.id}
          />
        );
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
